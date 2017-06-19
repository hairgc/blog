package com.github.mahui53541.blog.po;

import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

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

    //昵称
    private String nickName;

    //30*30
	private String avatarURL30;

	//50*50
	private String avatarURL50;

	//100*100
	private String avatarURL100;

    //性别
    private String gender;

    //open-id
    private String openId;
    
    //用户状态(0:正常，1：禁言)
    private Byte status;

    //禁言到期
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm")
    private Date disabledTime;

    //用户拥有的文章
    private List<Post> posts;

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

	public String getAvatarURL30() {
		return avatarURL30;
	}

	public void setAvatarURL30(String avatarURL30) {
		this.avatarURL30 = avatarURL30;
	}

	public String getAvatarURL50() {
		return avatarURL50;
	}

	public void setAvatarURL50(String avatarURL50) {
		this.avatarURL50 = avatarURL50;
	}

	public String getAvatarURL100() {
		return avatarURL100;
	}

	public void setAvatarURL100(String avatarURL100) {
		this.avatarURL100 = avatarURL100;
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


	public Date getDisabledTime() {
		return disabledTime;
	}

	public void setDisabledTime(Date disabledTime) {
		this.disabledTime = disabledTime;
	}

	public List<Post> getPosts() {
		return posts;
	}

	public void setPosts(List<Post> posts) {
		this.posts = posts;
	}
}
