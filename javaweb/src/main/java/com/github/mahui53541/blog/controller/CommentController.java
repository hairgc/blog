package com.github.mahui53541.blog.controller;

import com.github.mahui53541.blog.po.Comment;
import com.github.mahui53541.blog.po.User;
import com.github.mahui53541.blog.service.CommentService;
import com.github.mahui53541.blog.service.PostService;
import com.github.pagehelper.PageRowBounds;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.apache.shiro.session.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by mahui on 2017/6/19.
 */
@Controller
@RequestMapping("/comment")
public class CommentController extends BaseController {

    @Autowired
    private CommentService commentService;
    @Autowired
    private PostService postService;
    @RequestMapping(value = "/{postId}/{pageNum}", method = RequestMethod.GET)
    @ResponseBody
    public HashMap<String,Object> getCommentByPostIdAndPage(@PathVariable("postId") Integer postId, @PathVariable("pageNum") Integer pageNum)
            throws Exception {
        HashMap<String,Object> result=new HashMap<String,Object>();
        PageRowBounds pageRowBounds=new PageRowBounds(pageNum,10);
        result.put("rows",commentService.selectByPostId(pageRowBounds,postId));
        result.put("total",pageRowBounds.getTotal());
        return result;
    }

    @RequestMapping(value = "/newComment", method = RequestMethod.POST)
    @ResponseBody
    @RequiresPermissions("comment:add")
    public Map<String, Object> newComment(@RequestBody Comment comment)  {
        Session session= SecurityUtils.getSubject().getSession(false);

        if(session!=null){
            User user=(User)session.getAttribute("user");
            comment.setUser(user);
        }
        comment.setCommentTime(new Date());
        comment.setStatus(1);
        commentService.insertSelective(comment);
        //文章对应的评论数加一
        postService.commentTimesPlusOne(comment.getPost().getId());
        return this.ajaxSuccessResponse();
    }

    @RequestMapping(value = "/deleteComment", method = RequestMethod.POST)
    @ResponseBody
    @RequiresPermissions("comment:delete")
    public Map<String, Object> deleteComment(@RequestBody Comment comment)  {
        Session session= SecurityUtils.getSubject().getSession(false);
        if(session!=null){
            User user=(User)session.getAttribute("user");
            if(comment.getUser()!=null && user.getId()==comment.getUser().getId()){
                //文章对应的评论数减一
                comment.setStatus(0);
                commentService.updateByPrimaryKeySelective(comment);
                postService.commentTimesMinusOne(comment.getPost().getId());
                return this.ajaxSuccessResponse();
            }else{
                return this.ajaxFailureResponse("只能删除自己的评论哦！");
            }
        }else{
            return this.ajaxFailureResponse("用户不存在，删除失败！");
        }
    }
}
