package com.github.mahui53541.blog.service;

import com.github.mahui53541.blog.domain.User;

public interface UserService {
	
	public int insert(User user);
	
	public User findById(int id);
	
	public int delete(int id);
	
	public User findByOpenId(String openId);
	
	public int update(User user);
}
