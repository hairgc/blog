package com.github.mahui53541.blog.service;

import com.github.mahui53541.blog.domain.User;

public interface UserService extends BaseService<User,Integer>{
    /**
     * 根据OpenID获取用户
     * @param openId
     * @return
     */
    User selectByOpenID(String openId);
}
