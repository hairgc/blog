package com.github.mahui53541.blog.service;

import com.github.mahui53541.blog.po.Role;

import java.util.List;

/**
 * Created by mahui on 2017/5/29.
 */
public interface RoleService extends BaseService<Role,Integer>{
    /**
     * 根据用户openID查寻角色
     * @param openId
     * @return
     */
    List<String> selectRoleByOpenID(String openId);
}
