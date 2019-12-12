document.addEventListener("click", Clique, false);

function Clique()
{
	window.open('./QCM-Stress-Introduction.html',"_self");
}

function recuperationNomDuJoueur()
{
	var url = window.location.href
	var nomDuJoueur=url.split('?')[1];
	console.log(nomDuJoueur);
	var nomAffiche=document.getElementById('nomDuJoueur');
	if (nomDuJoueur!=undefined)
	{
		nomAffiche.innerHTML=nomDuJoueur;	
	}
	else
	{
		nomAffiche.innerHTML="Joueur"
	}
	
}

recuperationNomDuJoueur();