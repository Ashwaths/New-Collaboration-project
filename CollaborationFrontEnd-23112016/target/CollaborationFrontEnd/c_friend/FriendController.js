'use strict';

app.controller("FriendController", ['UserService','$scope','FriendService','$location','$rootScope',   
                                    function($UserService,$scope,FriendService,$location,$rootScope){
	console.log("FriendController...")
  	var self = this;
	self.friend ={
			id : '',
			userID : '',
			friendID : '',
			status : '',
			isOnline : '',
			errorMessage : '',
			errorCode : ''
	};
	self.friends = [];
	
	self.sendFriendRequest=sendFriendRequest
	function sendFriendRequest(friendID)
	{
		console.log("->sendFriendRequest :"+friendID)
		FriendService.sendFriendRequest(friendID)
		.then
		(function(d){
			self.friend = d;
			alert("Friend request sent")
		},
		  function(errResponse){
			console.error('Error while sending friend request');
		}
		);
	}
	
	self.getMyFriends = function(){
		console.log("Getting my friends")
		FriendsService.getMyFriends()
		.then(
		     function()	{
		    	 self.friend = d;
					alert("Got the friend request")
		     },
		     function(errResponse){
					console.error('Error while sending friend request');
				}
		);
	};
	
	self.updateFriendRequest = function(friend, id){
		Friendservice.updateFriendRequest(friend, id)
		.then(
				self.fetchAllFriends,
			     function(errResponse){
						console.error('Error while updating friend');
					} 		
		);
	};
	
	self.deleteFriend = function(id){
		Friendservice.deleteFriend(id)
		.then(
				self.fetchAllFriends,
			     function(errResponse){
						console.error('Error while deleting friend');
					} 		
		);
	};
	
	self.fetechAllUsers = function(id){
		UserService.fetchAllusers().then(function(d){
			self.user = d;
		},
			     function(errResponse){
						console.error('Error while feteching users');
					} 		
		);
	};
	
	self.fetchAllUsers= function(){
		
	    console.log('fetching all users')	
	}
	
	self.getMyFriends();
	
}])
  

	
	