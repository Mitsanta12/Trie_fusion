/*Tri par Fusion est un algorithme récursif utilisé pour la fusion qui repose sur la technique Diviser
 pour Régner. Un tableau d'éléments est divisé en deux sous tableaux plus petits. Une fois ces deux 
 tableaux libérés indépendamment, ils sont en mesure de produire le tableau trié.*/
function triage(tab_left, tab_right){
	
    let tab = [];
    let left = 0;
    let right = 0;

    while (left < tab_left.length && right < tab_right.length){
        /**
         * SI l'élément du tab_left et inferieur a celui du tab_right => le nouveau tab == tab.push(pour ajouter 
         * un nouvel element dans le tableau) 
         */
        if (tab_left[left] < tab_right[right]){
            tab.push(tab_left[left++]);
            /*
            Sinon on ajoute 1 dans le right
            */
        } else {
            tab.push(tab_right[right++]);
        }
    }
    /*
    La méthode concat() est utilisée afin de fusionner deux ou plusieurs tableaux 
    en les concaténant. Cette méthode ne modifie pas les tableaux existants, elle 
    renvoie un nouveau tableau qui est le résultat de l'opération.
    */
    return tab.concat(tab_left.slice(left)).concat(tab_right.slice(right));
}

/*mbola tsy vita hatramine'ny farany 