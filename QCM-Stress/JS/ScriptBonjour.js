document.addEventListener("click", Clique, false);

function Clique()
{
	window.open('./QCM-Stress-Question_1.html',"_self");
}

function recuperationNomDuJoueur()
{
	var url = window.location.href
	var nomDuJoueur=url.split('?')[1];
	console.log(nomDuJoueur);
	var nomAffiche=document.getElementById('nomDuJoueur');
	nomAffiche.innerHTML=nomDuJoueur;
}

recuperationNomDuJoueur();