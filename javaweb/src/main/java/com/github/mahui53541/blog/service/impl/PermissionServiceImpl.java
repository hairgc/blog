package com.github.mahui53541.blog.service.impl;

import com.github.mahui53541.blog.po.Permission;
import com.github.mahui53541.blog.service.PermissionService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by mahui on 2017/5/29.
 */
@Service
public class PermissionServiceImpl extends BaseServiceImpl<Permission,Integer> implements PermissionService {
    @Override
    public List<String> selectPermissionByOpenID(String openId) {
        return permissionMapper.selectPermissionByOpenID(openId);
    }
}
