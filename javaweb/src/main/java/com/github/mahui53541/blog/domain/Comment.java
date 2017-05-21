package com.github.mahui53541.blog.domain;

import java.io.Serializable;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * 文章评论
 * @author 马辉
 * @since JDK1.8
 * @history 2017年4月7日下午4:15:52 马辉 新建
 */
public class Comment implements Serializable{

	/**
	 * 序列号
	 */
	private static final long serialVersionUID = 2283639907486309069L;

	//key
	private Integer id;
	
	//评论内容
	private String content;
	
	//评论时间
	@DateTimeFormat(pattern="yyyy-MM-dd HH:mm")
	private Date commentTime;
	
	//状态（0：已删除，1：已发布，2：优质评论）
	private String status;
	
	//评论用户
	private User user;
	
	//所属文章
	private Post post;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getCommentTime() {
		return commentTime;
	}

	public void setCommentTime(Date commentTime) {
		this.commentTime = commentTime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
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
