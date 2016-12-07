'use strict';

app.controller('BlogController',['$scope','BlogService','$location','$rootScope',   
                                 function($scope,BlogService,$location,$rootScope){
                          	console.log("BlogController...")
                          	var self = this;
                          	self.blog = {
                          			id : '',
                          			title :'',
                          			description : '',
                          			userID : '',
                          			dateTime : '',
                          			status : '',
                          		  errorCode:'',
                    			  errorMessage:''
                          	};
                          	self.blogs = [];
                          	self.ratingvalue=0;
                        	self.blogcomment = {
                          			id : '',
                                    blogID : '',
                          			userID : '',
                          			dateTime : '',
                          			bcomment : '',
                          			rating : '',
                          		  errorCode:'',
                    			  errorMessage:''
                          	};
                          	self.blogcomments = [];

                          	
                          	self.getSelectedBlog = function getBlog(id){
                          		console.log("--.getting blog:"+id)
                          		BlogService.getBlog(id)
                          		.then(function(d){
                          			self.blog=d;
                          			$location.path('/view_blog');
                          			
                          		},
                          		function(errResponse){
                          			console.error("Error while fetching Blogs");
                          		}
                          	);
                          		};
                          		
                          		//method definition
                          		self.fetchAllBlogs = function(){
                          			BlogService.fetchAllBlogs()
                          			.then(function(d){
                          				self.blogs = d;
                          			},
                          			function(errResponse){
                          				console.error("Error while fetching Blogs");
                          			});
                          		};
                          		self.fetchAllBlogs();
                          		
                                
                          		
                          		self.fetchAllBlogComments = function(){
                          			BlogService.fetchAllBlogComments()
                          			.then(function(d){
                          				self.blogcomments = d;
                          			},
                          			function(errResponse){
                          				console.error("Error while fetching BlogComments");
                          			});
                          		};
                          		
                          		self.fetchAllBlogComments();

                          		
                          		self.submit = function(){
                          		{
                          			console.log('saving new blog', self.blog);
                          			self.createBlog(self.blog);
                          		}
                          		self.reset();
                          		};
                          		
                          		self.createBlog = function(blog){
                          			console.log("create blogs...")
                          			BlogService.createBlog(blog)
                          			.then(
                          					self.fetchAllBlogs,
                          					function(errResponse){
                          						console.error("Error while creating Blog");
                          					});                 			
                          		};
                          		self.addrating=function()
                          		{
                          			var radios = document.getElementsByName('genderS');

                          			for (var i = 0, length = radios.length; i < length; i++) {
                          			    if (radios[i].checked) {
                          			        // do whatever you want with the checked radio
                          			        alert(radios[i].value);
                          			        	self.ratingvalue=radios[i].value;
                          			        // only one radio can be logically checked, don't check the rest
                          			        break;
                          			    }
                          			}
                          			
                          		}
                          		
                          		self.addcomment = function(){
                              		{
                              			console.log('saving new blog', self.blogcomment);
                              			self.commentBlog(self.blogcomment);
                              		}
                              		};
                              		
                              		self.commentBlog = function(blogcomment){
                              			console.log("create blogs..."+blogcomment.bcomment)
                              			BlogService.commentBlog(blogcomment)
                              			.then(
                              					self.fetchAllBlogComments,
                              					function(errResponse){
                              						console.error("Error while creating BlogComment");
                              					});                 			
                              		};

                          		
                          		 self.reset=function(){
                               	  console.log('resetting the form',self.blog);
                               	  self.blog={
                               			id : '',
                              			title :'',
                              			description : '',
                              			userID : '',
                              			dateTime : '',
                              			status : '',
                              		  errorCode:'',
                        			  errorMessage:''
                               			  
                               	  };
                               	  $scope.myForm.$setPristine();//reset form
                                 };
                          		
                          		self.updateBlog = function(blog,blog_Id){
                          			BlogService.updateBlog(blog,blog_Id)
                          			.then(
                          					self.fetchAllBlogs,
                          					function(errResponse){
                          						console.error("Error while updating blog");
                          					});
                          		};
                          		self.deleteBlog = function(blog_Id){
                          			BlogService.deleteBlog(blog_Id)
                          			.then(
                          					self.fetchAllBlogs,
                          					function(errResponse){
                          						console.error("Error while deleting blog");
                          					});
                          		};
}])
                          	
