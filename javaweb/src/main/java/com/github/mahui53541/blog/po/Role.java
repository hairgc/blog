package com.github.mahui53541.blog.po;

import java.io.Serializable;

/**
 * 角色表
 * @author 马辉
 * @since JDK1.8
 * @history 2017年4月7日下午6:31:28 马辉 新建
 */
public class Role implements Serializable{

	/**
	 * 序列号
	 */
	private static final long serialVersionUID = 7626814616572197293L;

	//key
	private Integer id;
	
	//角色名称
	private String roleName;
	
	//角色类型(0：内置不可修改 1：自定义)
	private Byte roleType;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public Byte getRoleType() {
		return roleType;
	}

	public void setRoleType(Byte roleType) {
		this.roleType = roleType;
	}
	
	
}
