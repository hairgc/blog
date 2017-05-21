package com.github.mahui53541.blog.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * @author 马辉
 * @since JDK1.8
 * @history 2017年4月6日下午7:33:40 马辉 新建
 */
public class User implements Serializable{
	/**
	 * 序列号
	 */
	private static final long serialVersionUID = 8726459412900925229L;
	
	//主键id
	private Integer id;

    //中文昵称
    private String nickName;

    //登录时的账号
    private String userName;

    //头像链接
    private String figureUrl;

    //性别
    private String gender;

    //open-id
    private String openId;
    
    //用户状态(0:正常，1：禁言)
    private Byte status;

    //禁言到期
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm")
    private Date disableDtime;

    //用户拥有的文章
    private List<Post> posts;
    
    //用户角色
    private List<Role> roles;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNickName() {
		return nickName;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getFigureUrl() {
		return figureUrl;
	}

	public void setFigureUrl(String figureUrl) {
		this.figureUrl = figureUrl;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getOpenId() {
		return openId;
	}

	public void setOpenId(String openId) {
		this.openId = openId;
	}

	public Byte getStatus() {
		return status;
	}

	public void setStatus(Byte status) {
		this.status = status;
	}

	public Date getDisableDtime() {
		return disableDtime;
	}

	public void setDisableDtime(Date disableDtime) {
		this.disableDtime = disableDtime;
	}

	public List<Post> getPosts() {
		return posts;
	}

	public void setPosts(List<Post> posts) {
		this.posts = posts;
	}
	
	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}
}
