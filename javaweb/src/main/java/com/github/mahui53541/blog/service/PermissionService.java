package com.github.mahui53541.blog.service;

import com.github.mahui53541.blog.po.Permission;

import java.util.List;

/**
 * Created by mahui on 2017/5/29.
 */
public interface PermissionService extends BaseService<Permission,Integer> {
    /**
     * 根据用户openID查寻权限
     * @param openId
     * @return
     */
    List<String> selectPermissionByOpenID(String openId);
}
