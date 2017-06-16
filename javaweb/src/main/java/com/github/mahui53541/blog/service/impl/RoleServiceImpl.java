package com.github.mahui53541.blog.service.impl;

import com.github.mahui53541.blog.po.Role;
import com.github.mahui53541.blog.service.RoleService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by mahui on 2017/5/29.
 */
@Service
public class RoleServiceImpl extends BaseServiceImpl<Role,Integer> implements RoleService{
    @Override
    public List<String> selectRoleByOpenID(String openId) {
        return roleMapper.selectRoleByOpenID(openId);
    }
}
