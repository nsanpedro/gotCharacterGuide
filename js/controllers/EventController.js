//Event Controllers

'use strict';

eventsApp.controller('EventController', function EventController($scope){


$scope.sortorder = 'name'; 
$scope.event = {
	name: 'GoT Character Vote List',
	lastName: '',
	description: 'This is a GoT character list that to keep your mind ordered while exploring the vast land of the seven kindoms & the free cities.',
	imageUrl: 'img/Logo_Game_of_Thrones.png',
	sessions:[
			{
				name: 'Jon Snow', 
				family: "Stark", 
				duration: "2hs",
				upVoteCount: 0
			},
			{
				name: 'Tyrion Lannister', 
				family: "Lannister", 
				duration: "3hs",
				upVoteCount: 0
			},
			{
				name: 'Daenarys Targaryen', 
				family: "Targaryen", 
				duration: "1hs",
				upVoteCount: 0
			},
			{
				name: 'Cersei Lannister', 
				family: "Lannister", 
				duration: "1hs",
				upVoteCount: 0
			},
			{
				name: 'Jamie Lannister', 
				family: "Lannister", 
				duration: "1hs",
				upVoteCount: 0
			},
			{
				name: 'Sansa Stark', 
				family: "Stark", 
				duration: "1hs",
				upVoteCount: 0
			},

		]
	
	}

$scope.upVoteSession = function(session){
	session.upVoteCount ++;
};

$scope.downVoteSession = function(session){
	session.upVoteCount --; 
}; 



});