package com.github.mahui53541.blog.mapper;

import com.github.mahui53541.blog.po.Comment;
import com.github.mahui53541.blog.util.base.BaseMapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import java.util.List;

/**
 * 评论Dao
 * @author 马辉
 * @since JDK1.8
 * @history 2017年4月7日下午7:34:05 马辉 新建
 */
public interface CommentMapper extends BaseMapper<Comment,Integer>{
    /**
     * 文章详情页获取文章的评论（分页获取）
     * @param rowBounds
     * @param postId
     * @return
     */
    List<Comment> selectByPostId(@Param("rowBounds") RowBounds rowBounds, @Param("postId")Integer postId );

    /**
     * 评论管理页获取文章的评论（分页获取）
     * @param rowBounds
     * @param postId
     * @return
     */
    List<Comment> selectAllByPostId(@Param("rowBounds") RowBounds rowBounds, @Param("postId")Integer postId );

    /**
     * 查询评论数
     * @return
     */
    int countAll();
}
