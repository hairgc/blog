package com.github.mahui53541.blog.controller;

import com.github.mahui53541.blog.po.Post;
import com.github.mahui53541.blog.po.User;
import com.github.mahui53541.blog.service.PostService;
import com.github.pagehelper.PageRowBounds;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author mahui
 * @create 2017-06-17 18:28
 **/
@Controller
@RequestMapping("/post")
public class PostController extends BaseController {

    @Autowired
    private PostService postService;

    @RequestMapping(value = "/queryPostListByPage",method = RequestMethod.GET)
    @ResponseBody
    public HashMap<String,Object> query(
            @RequestParam(required=false,defaultValue = "1")Integer page,
            @RequestParam(required=false,defaultValue = "-1")Integer categoryId,
            String searchText){
        PageRowBounds pageRowBounds=new PageRowBounds(page,5);
        List<Post> posts=postService.queryByPage(pageRowBounds,categoryId,searchText);
        HashMap<String,Object> map=new HashMap<String,Object>();
        map.put("rows",posts);
        map.put("total",pageRowBounds.getTotal());
        return map;
    }

    @RequestMapping(value = "/newPost", method = RequestMethod.POST)
    @ResponseBody
    @RequiresPermissions("post:add")
    public Map<String,Object> newPost(@RequestBody Post post, HttpSession session) throws Exception {
        User user=(User) session.getAttribute("user");
        post.setPostTime(new Date());
        if(post.getStatus()==null){
            post.setStatus((byte)1);
        }
        post.setLastModifyTime(new Date());
        post.setUser(user);
        if(post.getId()!=null){
            postService.updateByPrimaryKeySelective(post);
        }else{
            postService.insertSelective(post);
        }
        return this.ajaxSuccessResponse(String.valueOf(post.getId()));
    }

    @RequestMapping(value = "/postdetail/{postId}", method = RequestMethod.GET)
    @ResponseBody
    public Post getPostById(@PathVariable("postId")Integer postId) {
        //浏览数加一
        postService.readTimesPlusOne(postId);
        return postService.selectByPrimaryKey(postId);
    }

    /**
     * 文章管理列表
     * @param pageNum
     * @param rowNum
     * @return
     */
    @RequestMapping(value = "/queryPostByUserId/{userId}",method = RequestMethod.GET)
    @ResponseBody
    @RequiresPermissions("post:manage")
    public HashMap<String,Object> query(
            @PathVariable Integer userId,
            @RequestParam(required=false,defaultValue = "1")Integer pageNum,
            @RequestParam(required=false,defaultValue = "10")Integer rowNum){
        PageRowBounds pageRowBounds=new PageRowBounds(pageNum,rowNum);
        List<Post> posts=postService.queryByUserId(pageRowBounds,userId);
        HashMap<String,Object> map=new HashMap<String,Object>();
        map.put("rows",posts);
        map.put("total",pageRowBounds.getTotal());
        return map;
    }
}
