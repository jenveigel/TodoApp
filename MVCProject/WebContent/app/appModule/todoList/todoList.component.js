angular.module("appModule")
.component("todoList", {
	templateUrl : "app/appModule/todoList/todoList.component.html",
		controller : function(todoService) {
			var vm = this;
				//create an array [] of objects {}
			
			vm.selected = null;
			
			vm.editTodo = null;
			
	vm.todos = [];
			
			vm.todos = todoService.index();
			
			vm.addTask = function(todo) {	
			todoService.create(todo);
			vm.todos = todoService.index();
			}
			
			vm.updateTodo = function(edittedTodo) {
				todoService.update(edittedTodo);
				vm.todos = todoService.index();
				vm.selected = vm.editTodo;
				vm.editTodo = null;
			}
			
			vm.deleteTodo = function(id){
				todoService.destroy(id);
				vm.todos = todoService.index();
			}
			
			vm.displayTodo = function(todo) {
				vm.selected = angular.copy(todo);
			}
			
			vm.displayTable = function() {
				vm.selected = null;
			}
			
			vm.setEditTodo = function(todo) {
				vm.editTodo = angular.copy(vm.selected);
				
			}
			
			vm.countTasks = function() {
				return vm.todos.length;
			}
			
		},
	controllerAs : 'vm'
});

