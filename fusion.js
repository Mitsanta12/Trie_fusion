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



function tri(tab){

    if (tab.length < 2) {
        return tab;
    }

    /**La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x.

 */
     let mid = Math.floor(tab.length / 2),
     tab_right = tab.slice(mid),
     tab_left = tab.slice(0, mid),
     array = triage(tri(tab_left), tri(tab_right));

     /**La méthode unshift() ajoute un ou plusieurs éléments au début d'un
      tableau et renvoie la nouvelle longueur du tableau. */
      array.unshift(0, tab.length);
      /*La méthode apply() appelle une fonction en lui passant une valeur this et des arguments sous forme d'un tableau*/
      tab.splice.apply(tab, array);
      return tab;
  }
  
  var tab = [11,16,20,4,35,1,8,5,3,66,2];
  tri(tab);
  console.log(tab);

     
    
