package com.github.mahui53541.blog.service;

import com.github.mahui53541.blog.po.Post;
import org.apache.ibatis.session.RowBounds;

import java.util.List;

/**
 * Created by mahui on 2017/5/29.
 */
public interface PostService extends BaseService<Post,Integer> {

    /**
     * 分页查询post，亦可搜索
     * @param rowBounds
     * @param categoryId
     * @param searchText
     * @return
     */
     List<Post> queryByPage(RowBounds rowBounds, Integer categoryId, String searchText);
    /**
     * 浏览次数加一
     * @param id
     */
    void readTimesPlusOne(Integer id);

    /**
     * 评论数加一
     * @param id
     */
    void commentTimesPlusOne(Integer id);

    /**
     * 评论数减一
     * @param id
     */
    void commentTimesMinusOne(Integer id);
}
