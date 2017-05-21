package com.github.mahui53541.blog.dao;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import com.github.mahui53541.blog.domain.User;

/**
 * 用户
 * @author 马辉
 * @since JDK1.8
 * @history 2017年4月7日下午6:39:39 马辉 新建
 */
public interface UserDao{
	
	public int insert(User user);
	
	// 根据id查询用户
	@Select("select * from user where id = #{id}")
	@Results({
		@Result(id=true,column="id",property="id"),
		@Result(column="nick_name",property="nickName"),
		@Result(column="figure_url",property="figureUrl"),
		@Result(column="gender",property="gender"),
		@Result(column="open_id",property="openId"),
		@Result(column="status",property="status"),
		@Result(column="disabled_time",property="disabledTime"),
	})
	public User findById(int id);
	
	//根据ID删除
	@Delete("delete from user where id = #{id}")
	public int delete(int id);
	
	public User findByOpenId(String openId);
	
	public int update(User user);
}
