var app = angular.module("app01", []);

	app.controller("controlleur01", function controlleur01($scope){
		$scope.operateur = "+";
		$scope.display(function(){
			switch(operateur){
				case "+" :
					operateur = "+";
					break;
				case "-" :
					operateur = "-";
					break;
				case "x" :
					operateur = "*";
					break;
				case "/" :
					operateur = "/";
					break;
			}
			return operateur;
		});
		$('input#nombre1').keyUp(function(){
			$scope.nombre1 = $(this).text;
			console.log($scope.nombre1);
		});
	});