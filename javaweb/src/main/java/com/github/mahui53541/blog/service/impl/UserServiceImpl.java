package com.github.mahui53541.blog.service.impl;

import com.github.mahui53541.blog.dao.UserDao;
import com.github.mahui53541.blog.domain.User;
import com.github.mahui53541.blog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	@Override
	public int insert(User user) {
		return userDao.insert(user);
	}

	@Override
	public User findById(int id) {
		return userDao.findById(id);
	}

	@Override
	public int delete(int id) {
		return userDao.delete(id);
	}

	@Override
	public User findByOpenId(String openId) {
		return userDao.findByOpenId(openId);
	}

	@Override
	public int update(User user) {
		return userDao.update(user);
	}

}
