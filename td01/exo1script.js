function lancement(){
	var Etudiant = {
		nom: "CARRASCO",
		prenom: "Vincent",
		num_etu: "1563156Z",
		date_naissance: [8, 8, 1997],
		presenter: function(){
			console.log("Je suis " + this.prenom + " " + this.nom + " et je suis né le " + this.date_naissance[0]+"/"+this.date_naissance[1]+"/"+this.date_naissance[2]+".");
		}
	};
	Etudiant.presenter();	
}