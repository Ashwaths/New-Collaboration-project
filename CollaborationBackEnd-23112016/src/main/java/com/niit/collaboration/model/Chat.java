package com.niit.collaboration.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Table(name="c_CHAT")
@Component

public class Chat {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int chat_Id;
	private String username;
	private Date dateandTime;
	private String message;
	
	public int getChat_Id() {
		return chat_Id;
	}
	public void setChat_Id(int chat_Id) {
		this.chat_Id = chat_Id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Date getDateandTime() {
		return dateandTime;
	}
	public void setDateandTime(Date dateandTime) {
		this.dateandTime = dateandTime;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
}
