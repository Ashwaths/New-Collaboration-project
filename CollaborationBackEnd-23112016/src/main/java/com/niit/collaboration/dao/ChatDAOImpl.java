package com.niit.collaboration.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.niit.collaboration.model.Chat;

@SuppressWarnings("deprecation")
@EnableTransactionManagement
@Repository("chatDAO")

public class ChatDAOImpl implements ChatDAO 
{

	
		@Autowired
		private SessionFactory sessionFactory;
		public ChatDAOImpl(SessionFactory sessionFactory)
		{
			this.sessionFactory=sessionFactory;
		}
		
		@Transactional
		public boolean save(Chat chat){	
			
			try{
			  sessionFactory.getCurrentSession().save(chat);
		return true;
			}catch (Exception e ){
				//TODO Auto-generated catch block
				e.printStackTrace();
				return false;
			}
		}	
		@Transactional
		public boolean update(Chat chat){
			
			try{
				sessionFactory.getCurrentSession().update(chat);
		return true;
			} catch (Exception e){
				//TODO Auto-generated catch block
		       e.printStackTrace();
		       return false;
			}
		}
		@Transactional
		public boolean delete(Chat chat){
			try{
		       sessionFactory.getCurrentSession().delete(chat);
		return true;
			} catch (Exception e){
				//TODO Auto-generated catch block
		       e.printStackTrace();
		       return false;
			}
		}//To list the Chat items.
		@SuppressWarnings("unchecked")
		@Transactional
		public List<Chat> list(){
			
			String hql = "from Chat";
		@SuppressWarnings("rawtypes")
		Query query =sessionFactory.getCurrentSession().createQuery(hql);
		
		List<Chat> listChat = query.list();
		if(listChat == null  || listChat.isEmpty())
		{
			 return null;
			 
		}
		return query.list();
		}
}
