package com.github.mahui53541.blog.service;

import org.apache.ibatis.session.RowBounds;

import java.io.Serializable;
import java.util.List;

/**
 * Created by mahui on 2017/5/26.
 */
public interface BaseService<T,PK extends Serializable> {
    /**
     * 有选择的插入
     * @param entity
     * @return int
     */
    int insertSelective(T entity);

    /**
     * 根据主键ID删除
     * @param id
     * @return
     */
    int deleteByPrimaryKey(PK id);

    /**
     * 有选择的更新
     * @param entity
     * @return
     */
    int updateByPrimaryKeySelective(T entity);

    /**
     * 根据主键获取对象
     * @param id
     * @return
     */
    T selectByPrimaryKey(PK id);

    /**
     * 查询所有
     * @return
     */
    List<T> findAll();

    /**
     * 分页
     * @param rowBounds
     * @return
     */
    List<T> findAll(RowBounds rowBounds);
}
