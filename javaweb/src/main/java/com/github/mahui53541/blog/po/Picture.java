package com.github.mahui53541.blog.po;

import java.io.Serializable;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * 文章对应图片
 * @author 马辉
 * @since JDK1.8
 * @history 2017年4月7日下午4:45:31 马辉 新建
 */
public class Picture implements Serializable{

	/**
	 * 序列号
	 */
	private static final long serialVersionUID = 6723224213233236170L;
	
	//key
	private Integer id;
	
	//上传时间
	@DateTimeFormat(pattern="yyyy-MM-dd HH:mm")
	private Date uploadTime;
	
	//图片名
	private String pictureName;
	
	//图片地址
	private String pictureUrl;
	
	//上传人
	private User user;
	
	//所属文章
	private Post post;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getUploadTime() {
		return uploadTime;
	}

	public void setUploadTime(Date uploadTime) {
		this.uploadTime = uploadTime;
	}

	public String getPictureName() {
		return pictureName;
	}

	public void setPictureName(String pictureName) {
		this.pictureName = pictureName;
	}

	public String getPictureUrl() {
		return pictureUrl;
	}

	public void setPictureUrl(String pictureUrl) {
		this.pictureUrl = pictureUrl;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Post getPost() {
		return post;
	}

	public void setPost(Post post) {
		this.post = post;
	}
}
