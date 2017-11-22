var Personne = {
	nom: "",
	prenom: "",
	taille: 0,
	date_naissance: [1,1,1997],
	init : function(nom, prenom, date_naissance, taille){
		this.nom = nom;
		this.prenom = prenom;
		this.date_naissance = date_naissance;
		this.taille = taille;
	},
	direAge : function(){
		var date_day = new Date();
		jour_day = date_day.getDate();
		mois_day = date_day.getMonth()+1;
		annee_day = date_day.getFullYear();
	
		//calcul age
		var ans; var mois; var age="";
		
		if(mois_day >= date_naissance[1]){
			ans = annee_day - date_naissance[2];
			mois = mois_day - date_naissance[1];
		}else{
			ans =  (annee_day - date_naissance[2]) -1;
			mois = mois_day + (12 - date_naissance[1]);
		}
		if(jour_day < date_naissance[0]){	
			mois = mois -1;
			if(mois_day < date_naissance[1]){
			   ans =  ans -1;
			}	
		}
		
		if(ans >0 && ans <=1) age += ans+' an ';
		if(ans >1) age += ans+' ans ';
		if(mois >0) age +=mois+' mois ';
		 // on affiche le résultat
		console.log(age);
	}
};

var Professeur = Object.create(Personne);
Professeur.email = "";
Professeur.initProfesseur = function(nom, prenom, date_naissance, taille, email){
	this.init(nom, prenom, date_naissance, taille);
	this.email = email;
	this.presenter = function(){
		console.log("Je suis " + this.prenom + " " + this.nom + ", je suis né le " + this.date_naissance[0]+"/"+this.date_naissance[1]+"/"+this.date_naissance[2]+" et je mesure "+this.taille+"mètres. Mon adresse email est : "+this.email+".");
		
	};
};

function lancement(){
	var prof1 = Object.create(Professeur);
	prof1.initProfesseur("CARRASCO", "Vincent", [8,8,1997], 1.8,  "carrascovincent8@gmail.com");
	prof1.presenter();
	var prof2 = Object.create(Professeur);
	prof2.initProfesseur("DE ALMEIDA", "Florian", [20,09,1996], 1.8, "sonadrmail@gmail.com");
	prof2.presenter();
}