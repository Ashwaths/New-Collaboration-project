package com.niit.collaboration.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Table(name="c_FORUM_COMMENT")
@Component

public class ChatForumComment extends BaseDomain {
	
	@Id
	private int id;
	private String forumId;
	private String user_id;
	private String message;
	private Date commentedDate;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getForumId() {
		return forumId;
	}
	public void setForumId(String forumId) {
		this.forumId = forumId;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Date getCommentedDate() {
		return commentedDate;
	}
	public void setCommentedDate(Date commentedDate) {
		this.commentedDate = commentedDate;
	}
	
	

}
