package com.github.mahui53541.blog.mapper;

import com.github.mahui53541.blog.po.User;
import com.github.mahui53541.blog.util.base.BaseMapper;

/**
 * 用户
 * @author 马辉
 * @since JDK1.8
 * @history 2017年4月7日下午6:39:39 马辉 新建
 */
public interface UserMapper extends BaseMapper<User,Integer>{
    /**
     * 根据OpenID获取用户
     * @param openId
     * @return
     */
    User selectByOpenID(String openId);
}
