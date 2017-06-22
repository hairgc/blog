package com.github.mahui53541.blog.service.impl;

import com.github.mahui53541.blog.po.Post;
import com.github.mahui53541.blog.service.PostService;
import org.apache.ibatis.session.RowBounds;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by mahui on 2017/5/29.
 */
@Service
public class PostServiceImpl extends BaseServiceImpl<Post,Integer> implements PostService{
    @Override
    public List<Post> queryByPage(RowBounds rowBounds, Integer categoryId,String searchText) {
        return postMapper.queryByPage(rowBounds,categoryId,searchText);
    }

    @Override
    public List<Post> queryByUserId(RowBounds rowBounds, Integer userId) {
        return postMapper.queryByUserId(rowBounds,userId);
    }

    @Override
    public void readTimesPlusOne(Integer id) {
        postMapper.readTimesPlusOne(id);
    }

    @Override
    public void commentTimesPlusOne(Integer id) {
        postMapper.commentTimesPlusOne(id);
    }

    @Override
    public void commentTimesMinusOne(Integer id) {
        postMapper.commentTimesMinusOne(id);
    }
}
