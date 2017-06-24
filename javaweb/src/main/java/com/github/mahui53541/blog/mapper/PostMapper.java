package com.github.mahui53541.blog.mapper;

import com.github.mahui53541.blog.po.Post;
import com.github.mahui53541.blog.util.base.BaseMapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import java.util.List;

/**
 * 文章
 * @author 马辉
 * @since JDK1.8
 * @history 2017年4月7日下午7:33:36 马辉 新建
 */
public interface PostMapper extends BaseMapper<Post,Integer> {
    /**
     * 分页查询post，亦可搜索
     * @param rowBounds
     * @param categoryId
     * @param searchText
     * @return
     */
    List<Post> queryByPage(@Param("rowBounds") RowBounds rowBounds,@Param("categoryId")Integer categoryId ,@Param("searchText")String searchText);

    /**
     * 文章管理模块查询
     * @param rowBounds
     * @param userId
     * @return
     */
    List<Post> queryByUserId(@Param("rowBounds") RowBounds rowBounds,@Param("userId")Integer userId);

    /**
     * 评论管理管理模块查询不分页
     * @param categoryId
     * @return
     */
    List<Post> queryByCategoryId(@Param("categoryId")Integer categoryId);

    /**
     * 浏览次数加一
     * @param id
     */
    void readTimesPlusOne(@Param("id") Integer id);

    /**
     * 评论数加一
     * @param id
     */
    void commentTimesPlusOne(@Param("id") Integer id);

    /**
     * 评论数减一
     * @param id
     */
    void commentTimesMinusOne(@Param("id") Integer id);

    /**
     * 查询文章数
     * @return
     */
    int countAll();

    /**
     * 浏览数
     * @return
     */
    int countReadTimes();

    /**
     * 评论查询post
     * @param id
     * @return
     */
    Post queryByCommentId(Integer id);
}
