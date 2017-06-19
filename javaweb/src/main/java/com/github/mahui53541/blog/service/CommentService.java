package com.github.mahui53541.blog.service;

import com.github.mahui53541.blog.po.Comment;
import org.apache.ibatis.session.RowBounds;

import java.util.List;

/**
 * Created by mahui on 2017/5/29.
 */
public interface CommentService extends BaseService<Comment,Integer> {
    /**
     * 获取文章的评论（分页获取）
     * @param rowBounds
     * @param postId
     * @return
     */
    List<Comment> selectByPostId(RowBounds rowBounds, Integer postId );
}
