package com.github.mahui53541.blog.controller;

import com.github.mahui53541.blog.po.Post;
import com.github.mahui53541.blog.service.PostService;
import com.github.pagehelper.PageRowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;

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
        PageRowBounds pageRowBounds=new PageRowBounds(page-1,5);
        List<Post> posts=postService.queryByPage(pageRowBounds,categoryId,searchText);
        posts.forEach(post -> {
            System.out.print(post.getLastModifyTime());
            System.out.print(post.getUser());
        });
        HashMap<String,Object> map=new HashMap<String,Object>();
        map.put("rows",posts);
        map.put("total",pageRowBounds.getTotal());
        return map;
    }
}
