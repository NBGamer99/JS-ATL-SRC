var app = angular.module('myApp', []);
app.controller('LoginController', function() {
  var vm = this;
  vm.email = '';
  vm.password = '';
  vm.errorMessage = '';
  vm.login = function() {
	vm.errorMessage = '';
	// TODO: Implement login logic
	if (vm.email === 'nabouzi@gmail.com' && vm.password === 'password') {
	  alert('Login successful');
	  // Add your logic for form submission here
	} else {
	  vm.errorMessage = 'Invalid email or password';
	}
  };
});