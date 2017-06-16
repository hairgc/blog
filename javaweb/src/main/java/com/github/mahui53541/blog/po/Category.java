package com.github.mahui53541.blog.po;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * @author mahui
 * @create 2017-06-16 18:50
 **/
public class Category implements Serializable {
    //key
    private Integer id;

    //文章分类名称
    private String categoryName;

    //显示顺序
    private Integer desc;

    //文章数
    private Integer postSize;

    //文章
    private List<Post> posts=new ArrayList<Post>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Integer getDesc() {
        return desc;
    }

    public void setDesc(Integer desc) {
        this.desc = desc;
    }

    public List<Post> getPosts() {
        return posts;
    }

    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }
    public Integer getPostSize() {
        return postSize;
    }

    public void setPostSize(Integer postSize) {
        this.postSize = postSize;
    }

}
