package com.github.mahui53541.blog.controller;

import com.github.mahui53541.blog.po.User;
import com.github.mahui53541.blog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/queryAll", method = RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> getPosts() throws Exception{
		User user=userService.selectByPrimaryKey(2);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("user",user);
		return map;
    }
	@RequestMapping(value = "/add", method = RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> add() throws Exception{
		User user=new User();
		user.setId(19);
		user.setGender("男");
		user.setNickName("huih");
		user.setStatus((byte)0);
		user.setOpenId("asxcas1234");
		user.setDisabledTime(new Date());
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("user",userService.updateByPrimaryKeySelective(user));
		map.put("id",user.getId());
		return map;
	}

	@RequestMapping(value = "/delete", method = RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> delete() throws Exception{
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("user",userService.deleteByPrimaryKey(19));
		return map;
	}
}
