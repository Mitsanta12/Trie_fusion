# Trie_fusion
En informatique, le tri fusion est un algorithme de tri par comparaison stable(un tri est dit stable s'il préserve l'ordonnancement initial des éléments que l'ordre considère comme égaux).
Sa complexité temporelle pour une entrée de taille n est de l'ordre de n log n, ce qui est asymptotiquement optimal.
Ce tri est basé sur la technique algorithmique diviser pour régner. 
L'opération principale de l'algorithme est la fusion, qui consiste à réunir deux listes triées en une seule. 
L'efficacité de l'algorithme vient du fait que deux listes triées peuvent être fusionnées en temps linéaire.

Le tri fusion se décrit naturellement sur des listes et c'est sur de telles structures qu'il est à la fois le plus simple et le plus rapide.
Cependant, il fonctionne aussi sur des tableaux. La version la plus simple du tri fusion sur les tableaux a une efficacité comparable au tri rapide,
mais elle n'opère pas en place : une zone temporaire de données supplémentaire de taille égale à celle de l'entrée est nécessaire
(des versions plus complexes peuvent être effectuées sur place mais sont moins rapides). Sur les listes, sa complexité est optimale,
il s'implémente très simplement et ne requiert pas de copie en mémoire temporaire .

  Comment marche le tri fusion ?
Le principe du tri fusion en est le suivant :
    - On divise en deux moitiés la liste à trier (en prenant par exemple, un élément sur deux pour chacune des listes). 
    - On trie chacune d'entre elles.
    - On fusionne les deux moitiés obtenues pour reconstituer la liste triée.
