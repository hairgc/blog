package com.github.mahui53541.blog.util.base;

import java.io.Serializable;

/**
 * Created by mahui on 2017/5/26.
 */
public interface BaseMapper<T, PK extends Serializable> {

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
}
