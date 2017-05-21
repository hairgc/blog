package com.github.mahui53541.blog.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * 文章实体
 * @author 马辉
 * @since JDK1.8
 * @history 2017年4月7日下午3:14:45 马辉 新建
 */
public class Post implements Serializable{
	/**
	 * 序列号
	 */
	private static final long serialVersionUID = -4406823578443753118L;
	
	//key
	private Integer id;
	
	//文章标题
	private String title;
	
	//发表时间
	@DateTimeFormat(pattern="yyyy-MM-dd HH:mm")
	private Date postTime;
	
	//文章内容
	private String postContent;
	
	//文章类型
	private Byte postType;
	
	//最近修改
	@DateTimeFormat(pattern="yyyy-MM-dd HH:mm")
	private Date lastModifyTime;
	
	//浏览次数
	private Integer readTimes;
	
	//文章状态(0：草稿；1：发布；2：置顶；3:删除)
	private Byte status;
	
	//是否允许哦评论
	private Boolean enableComment;
	
	//QQ登录open_id关联用户
	private User user;

	//对应评论
	private List<Comment> comments;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getPostTime() {
		return postTime;
	}

	public void setPostTime(Date postTime) {
		this.postTime = postTime;
	}

	public String getPostContent() {
		return postContent;
	}

	public void setPostContent(String postContent) {
		this.postContent = postContent;
	}

	public Byte getPostType() {
		return postType;
	}

	public void setPostType(Byte postType) {
		this.postType = postType;
	}

	public Date getLastModifyTime() {
		return lastModifyTime;
	}

	public void setLastModifyTime(Date lastModifyTime) {
		this.lastModifyTime = lastModifyTime;
	}

	public Integer getReadTimes() {
		return readTimes;
	}

	public void setReadTimes(Integer readTimes) {
		this.readTimes = readTimes;
	}

	public Byte getStatus() {
		return status;
	}

	public void setStatus(Byte status) {
		this.status = status;
	}

	public Boolean getEnableComment() {
		return enableComment;
	}

	public void setEnableComment(Boolean enableComment) {
		this.enableComment = enableComment;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}
	
}
