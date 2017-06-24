package com.github.mahui53541.blog.controller;

import com.github.mahui53541.blog.po.User;
import com.github.mahui53541.blog.service.UserService;
import com.github.pagehelper.PageRowBounds;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.apache.shiro.session.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/user")
public class UserController extends BaseController{

	@Autowired
	private UserService userService;

	/**
	 * 分页查询
	 * @param pageNum
	 * @param rowNum
	 * @return
	 */
	@RequestMapping(value = "/queryByPage",method = RequestMethod.GET)
	@ResponseBody
	@RequiresPermissions("user:manage")
	public HashMap<String,Object> queryByPage(
			@RequestParam(required=false,defaultValue = "1")Integer pageNum,
			@RequestParam(required=false,defaultValue = "10")Integer rowNum){
		PageRowBounds pageRowBounds=new PageRowBounds(pageNum,rowNum);
		List<User> users=userService.findAll(pageRowBounds);
		HashMap<String,Object> map=new HashMap<String,Object>();
		map.put("rows",users);
		map.put("total",pageRowBounds.getTotal());
		return map;
	}

    /**
     * 设置禁言/解禁
     * @param user
     * @return
     */
    @RequestMapping(value = "/editUser", method = RequestMethod.POST)
    @ResponseBody
    @RequiresPermissions("user:update")
    public Map<String, Object> deleteComment(@RequestBody User user)  {
        Session session= SecurityUtils.getSubject().getSession(false);
        if(session!=null){
            User loginUser=(User)session.getAttribute("user");
            if(loginUser.getId()==user.getId()){
                return this.ajaxFailureResponse("不能修改自己！");
            }else{
                userService.updateByPrimaryKeySelective(user);
                return this.ajaxSuccessResponse();
            }
        }else{
            return this.ajaxFailureResponse("用户不存在，删除失败！");
        }
    }
}
