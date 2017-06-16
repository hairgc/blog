package com.github.mahui53541.blog.mapper;

import com.github.mahui53541.blog.po.Permission;
import com.github.mahui53541.blog.util.base.BaseMapper;

import java.util.List;

/**
 * 权限Dao
 * @author 马辉
 * @since JDK1.8
 * @history 2017年4月7日下午7:31:59 马辉 新建
 */
public interface PermissionMapper extends BaseMapper<Permission,Integer> {
    /**
     * 根据用户openID查寻权限
     * @param openId
     * @return
     */
    List<String> selectPermissionByOpenID(String openId);
}
