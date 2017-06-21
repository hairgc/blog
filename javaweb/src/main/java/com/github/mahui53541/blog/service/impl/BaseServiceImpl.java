package com.github.mahui53541.blog.service.impl;

import com.github.mahui53541.blog.mapper.*;
import com.github.mahui53541.blog.service.BaseService;
import com.github.mahui53541.blog.util.base.BaseMapper;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.Serializable;
import java.lang.reflect.Field;
import java.lang.reflect.ParameterizedType;
import java.util.List;

/**
 * Created by mahui on 2017/5/26.
 */
@SuppressWarnings("unchecked")
@Service("baseService")
@Lazy(true)
public class BaseServiceImpl<T,PK extends Serializable> implements BaseService<T,PK>{

    private Class clazz; // clazz中存储了子类当前操作实体类型
    public BaseServiceImpl() {
        // 如果子类调用当前构造方法,this代表的是子类对象
        ParameterizedType type = (ParameterizedType) this.getClass()
                .getGenericSuperclass();
        clazz = (Class) type.getActualTypeArguments()[0];
    }

    protected BaseMapper baseMapper;

    @PostConstruct   // init方法是在构造方法与set注入之后执行, 也就是XML的: init-method=""
    public void init() throws Exception{
        // 1: 根据具体的泛型, 获取相应的Field字段
        String clazzName=clazz.getSimpleName();
        String clazzDaoName=clazzName.substring(0,1).toLowerCase() + clazzName.substring(1) + "Mapper";
        Field clazzField=this.getClass().getSuperclass().getDeclaredField(clazzDaoName);
        // 2: baseMapper Filed字段
        Field baseField=this.getClass().getSuperclass().getDeclaredField("baseMapper");
        // 3: 把具体Mapper的值赋值给baseMapper
        baseField.set(this,clazzField.get(this));
    }

    @Autowired
    protected CommentMapper commentMapper;
    @Autowired
    protected PermissionMapper permissionMapper;
    @Autowired
    protected PictureMapper pictureMapper;
    @Autowired
    protected PostMapper postMapper;
    @Autowired
    protected RoleMapper roleMapper;
    @Autowired
    protected UserMapper userMapper;
    @Autowired
    protected RolePermissionMapper rolePermissionMapper;
    @Autowired
    protected UserRoleMapper userRoleMapper;
    @Autowired
    protected CategoryMapper categoryMapper;
    @Autowired
    protected VisitorRecordMapper visitorRecordMapper;
    @Override
    public int insertSelective(T entity) {
        return baseMapper.insertSelective(entity);
    }

    @Override
    public int deleteByPrimaryKey(PK id) {
        return baseMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(T entity) {
        return baseMapper.updateByPrimaryKeySelective(entity);
    }

    @Override
    public T selectByPrimaryKey(PK id) {
        return (T)baseMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<T> findAll() {
        return baseMapper.findAll();
    }
    @Override
    public List<T> findAll(RowBounds rowBounds) {
        return baseMapper.findAll(rowBounds);
    }
}
