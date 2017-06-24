package com.github.mahui53541.blog.controller;

import com.github.mahui53541.blog.po.Comment;
import com.github.mahui53541.blog.po.User;
import com.github.mahui53541.blog.service.CommentService;
import com.github.pagehelper.PageRowBounds;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.apache.shiro.session.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by mahui on 2017/6/19.
 */
@Controller
@RequestMapping("/comment")
public class CommentController extends BaseController {

    @Autowired
    private CommentService commentService;

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
        commentService.newComment(comment);
        return this.ajaxSuccessResponse();
    }

    /**
     * 删除自己的评论
     * @param comment
     * @return
     */
    @RequestMapping(value = "/deleteComment", method = RequestMethod.POST)
    @ResponseBody
    @RequiresPermissions("comment:delete")
    public Map<String, Object> deleteComment(@RequestBody Comment comment)  {
        Session session= SecurityUtils.getSubject().getSession(false);
        if(session!=null){
            User user=(User)session.getAttribute("user");
            if(comment.getUser()!=null && user.getId()==comment.getUser().getId()){
                commentService.deleteComment(comment);
                return this.ajaxSuccessResponse();
            }else{
                return this.ajaxFailureResponse("只能删除自己的评论哦！");
            }
        }else{
            return this.ajaxFailureResponse("用户不存在，删除失败！");
        }
    }

    /**
     * 分页查询
     * @param pageNum
     * @param rowNum
     * @return
     */
    @RequestMapping(value = "/queryByPage",method = RequestMethod.GET)
    @ResponseBody
    @RequiresPermissions("category:manage")
    public HashMap<String,Object> queryByPage(
            @RequestParam(required=false,defaultValue = "1")Integer pageNum,
            @RequestParam(required=false,defaultValue = "10")Integer rowNum,
            Integer postId){
        PageRowBounds pageRowBounds=new PageRowBounds(pageNum,rowNum);
        List<Comment> comments=commentService.selectAllByPostId(pageRowBounds,postId);
        HashMap<String,Object> map=new HashMap<String,Object>();
        map.put("rows",comments);
        map.put("total",pageRowBounds.getTotal());
        return map;
    }

    /**
     * 修改评论评论
     * @param comment
     * @return
     */
    @RequestMapping(value = "/editComment", method = RequestMethod.POST)
    @ResponseBody
    @RequiresPermissions("comment:update")
    public Map<String, Object> editComment(@RequestBody Comment comment)  {
        commentService.editComment(comment);
        return ajaxSuccessResponse();
    }
}
