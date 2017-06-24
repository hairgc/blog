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

    /**
     * 文章列表
     * @param page
     * @param categoryId
     * @param searchText
     * @return
     */
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

    @RequestMapping(value = "/querySelect/{categoryId}",method = RequestMethod.GET)
    @ResponseBody
    public List<Post> querySelect(@PathVariable Integer categoryId){
        return postService.queryByCategoryId(categoryId);
    }
    /**
     * 写文章
     * @param post
     * @param session
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/write", method = RequestMethod.POST)
    @ResponseBody
    @RequiresPermissions("post:add")
    public Map<String,Object> writePost(@RequestBody Post post, HttpSession session) throws Exception {
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

    /**
     * 浏览文章详情
     * @param postId
     * @return
     */
    @RequestMapping(value = "/postdetail/{postId}", method = RequestMethod.GET)
    @ResponseBody
    public Post getPostById(@PathVariable("postId")Integer postId) {
        //浏览数加一
        postService.readTimesPlusOne(postId);
        return postService.selectByPrimaryKey(postId);
    }

    /**
     * 获取所要编辑的文章
     * @param postId
     * @return
     */
    @RequestMapping(value = "/getEditPost/{postId}", method = RequestMethod.GET)
    @ResponseBody
    @RequiresPermissions("post:update")
    public Post getEditPostById(@PathVariable("postId")Integer postId) {
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

    /**
     * 文章属性修改（不修改内容、标题、评论数等）
     * @param post
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/attributeModification", method = RequestMethod.POST)
    @ResponseBody
    @RequiresPermissions("post:update")
    public Map<String,Object> attributeModification(@RequestBody Post post) throws Exception {
        post.setLastModifyTime(new Date());
        //将不修改的属性设置为空
        post.setReadTimes(null);
        post.setPostTime(null);
        post.setUser(null);
        post.setCommentTimes(null);
        post.setPostContent(null);
        post.setTitle(null);
        postService.updateByPrimaryKeySelective(post);
        return this.ajaxSuccessResponse();
    }

    /**
     * 文章编辑
     * @param post
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    @ResponseBody
    @RequiresPermissions("post:update")
    public Map<String,Object> editPost(@RequestBody Post post) throws Exception {
        post.setLastModifyTime(new Date());
        //将不修改的属性设置为空
        post.setReadTimes(null);
        post.setPostTime(null);
        post.setUser(null);
        post.setCommentTimes(null);
        postService.updateByPrimaryKeySelective(post);
        return this.ajaxSuccessResponse();
    }
}
