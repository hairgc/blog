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

    /**
     * 评论管理页获取文章的评论（分页获取）
     * @param rowBounds
     * @param postId
     * @return
     */
    List<Comment> selectAllByPostId(RowBounds rowBounds,Integer postId );

    /**
     * 查询评论数
     * @return
     */
    int countAll();

    /**
     * 修改评论
     * @param comment
     */
    void editComment(Comment comment);

    /**
     * 新增评论
     * @param comment
     */
    void newComment(Comment comment);

    /**
     * 删除自己的评论
     * @param comment
     */
    void deleteComment(Comment comment);

}
