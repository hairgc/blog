package com.github.mahui53541.blog.domain;

import java.io.Serializable;

/**
 * 权限表
 * @author 马辉
 * @since JDK1.8
 * @history 2017年4月7日下午6:34:27 马辉 新建
 */
public class Permission implements Serializable{

	/**
	 * 序列号
	 */
	private static final long serialVersionUID = -1464432253054067901L;
	
	//key
	private Integer id;
	
	//权限码
	private String code;
	
	//显示顺序
	private Integer desc;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public Integer getDesc() {
		return desc;
	}

	public void setDesc(Integer desc) {
		this.desc = desc;
	}
	
	
}
