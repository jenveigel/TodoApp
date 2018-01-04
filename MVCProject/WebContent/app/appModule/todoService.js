angular.module('appModule')
.factory('todoService', function(){
	var service = {};
	
	var todos = [
		{
			id : 1,
			task : 'Make appt for Sam',
			description : '',
			completed : false
		},
		{
			id : 2,
			task : 'Find tutor',
			description : 'Math & Euro Hist',
			completed : false
		},
		{
			id : 3,
			task : 'Book trip',
			description : 'Peru',
			completed : false
		}
	]
	
	service.index = function(){
		return todos;
	}
	
	var genId = function() {
		  return todos[todos.length-1].id + 1;
	}
	
	service.create = function(todo){
		var copy = angular.copy(todo);
		copy.id = genId();
		copy.description = '';
		copy.completed=false;
		todos.push(todo);
	}
	
	service.update = function(edittedTodo){
		todos.forEach(function(todo, idx, arr) {
			if (todo.id === edittedTodo.id) {
				arr.splice(idx, 1, edittedTodo);
			}
	});
	}
	
	service.destroy = function(id){
		todos.forEach(function(todo, idx, arr) {
			if (todo.id === id) {
				arr.splice(idx, 1);
			}
				
		});
	}
	
	return service;
});