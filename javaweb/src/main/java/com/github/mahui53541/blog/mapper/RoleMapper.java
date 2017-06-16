package com.github.mahui53541.blog.mapper;

import com.github.mahui53541.blog.po.Role;
import com.github.mahui53541.blog.util.base.BaseMapper;

import java.util.List;

/**
 * 角色Dao
 * @author 马辉
 * @since JDK1.8
 * @history 2017年4月7日下午6:39:46 马辉 新建
 */
public interface RoleMapper extends BaseMapper<Role,Integer>{


    /**
     * 根据用户openID查寻角色
     * @param openId
     * @return
     */
    List<String> selectRoleByOpenID(String openId);

}
