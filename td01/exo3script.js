var Personne = {
	nom: "",
	prenom: "",
	date_naissance: [1,1,1997],
	init : function(nom, prenom, date_naissance){
		this.nom = nom;
		this.prenom = prenom;
		this.date_naissance = date_naissance;
	}
};

var Professeur = Object.create(Personne);
Professeur.email = "";
Professeur.initProfesseur = function(nom, prenom, date_naissance, email){
	this.init(nom, prenom, date_naissance);
	this.email = email;
	this.presenter = function(){
		console.log("Je suis " + this.prenom + " " + this.nom + " et je suis né le " + this.date_naissance[0]+"/"+this.date_naissance[1]+"/"+this.date_naissance[2]+". Mon adresse email est : "+this.email+".");
		
	};
};

function lancement(){
	var prof1 = Object.create(Professeur);
	prof1.initProfesseur("CARRASCO", "Vincent", [8,8,1997], "carrascovincent8@gmail.com");
	prof1.presenter();
	var prof2 = Object.create(Professeur);
	prof2.initProfesseur("DE ALMEIDA", "Florian", [20,09,1996], "sonadrmail@gmail.com");
	prof2.presenter();
}