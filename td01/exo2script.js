function Etudiant(nom, prenom, num_etu, date_naissance){
	this.nom = nom;
	this.prenom = prenom;
	this.num_etu = num_etu;
	this.date_naissance = date_naissance;
	this.presenter = function(){
			console.log("Je suis " + this.prenom + " " + this.nom + " et je suis né le " + this.date_naissance[0]+"/"+this.date_naissance[1]+"/"+this.date_naissance[2]+".");
		};
	this.age = function(){
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
	};
}

function lancement(){
	var etu1 = new Etudiant("CARRASCO", "Vincent", "1655616Z", [8,8,1997]);
	etu1.presenter();
	etu1.age();
	var etu2 = new Etudiant("DE ALMEIDA", "Florian", "1655616Z", [20,09,1996]);
	etu2.presenter();
	etu2.age();
}