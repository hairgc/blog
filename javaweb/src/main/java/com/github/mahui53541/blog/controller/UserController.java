package com.github.mahui53541.blog.controller;

import com.github.mahui53541.blog.domain.User;
import com.github.mahui53541.blog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/queryAll", method = RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> getPosts(int id) throws Exception{
		//int totalRecords=postService.selectCount();
		//int startRow=PageUtil.calcStartRow(pageIndex,pageSize);
		User user=userService.selectByPrimaryKey(1);
		//List<Post> list = postService.selectByPage(startRow,pageSize);
		//int totalPages=PageUtil.calcPages(totalRecords, pageSize);
		Map<String, Object> map = new HashMap<String, Object>();
		if(user!=null){
			
			map.put("userName", user.getNickName());
			map.put("totalPages", user.getGender());
		}
		
		return map;
    }
}
