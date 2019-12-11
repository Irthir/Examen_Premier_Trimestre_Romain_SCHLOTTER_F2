document.addEventListener("keydown", toucheEntree, false);
/*Quand une touche est pressée, si la touche est la touche Entrée e.keycode==13, le booléen passe à vrai.*/
function toucheEntree(e)
{
  	if((e.keyCode == 13)||(e.keyCode == 13))
 	{
		var nomDuJoueur = document.getElementById("EntreeJoueur").value;
		if (nomDuJoueur!="")
		{
			window.open('./QCM-Stress-Bonjour.html?'+nomDuJoueur,"_self");
		}
 	}
}

document.addEventListener("click", clique, false);
/*Quand l'écran est touché, si un nom est renseigné on continue.*/
function clique()
{
	if(e.keyCode == 13)
	{
		var nomDuJoueur = document.getElementById("EntreeJoueur").value;
		if (nomDuJoueur!="")
		{
			window.open('./QCM-Stress-Bonjour.html?'+nomDuJoueur,"_self");
		}
	}
}