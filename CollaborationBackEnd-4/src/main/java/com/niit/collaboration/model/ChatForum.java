package com.niit.collaboration.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Table(name="c_chat_FORUM")
@Component

public class ChatForum extends BaseDomain {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String id;
	private String user_id;
	private String message;
	private Date createdDate;
	
	
	private int get_id;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
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
	public Date getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	public int getGet_id() {
		return get_id;
	}
	public void setGet_id(int get_id) {
		this.get_id = get_id;
	}
	
	

}
