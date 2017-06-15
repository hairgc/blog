package com.github.mahui53541.blog.service.impl;

import com.github.mahui53541.blog.domain.User;
import com.github.mahui53541.blog.service.UserService;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl extends BaseServiceImpl<User,Integer> implements UserService {

    @Override
    public User selectByOpenID(String openId) {
        return userMapper.selectByOpenID(openId);
    }
}
