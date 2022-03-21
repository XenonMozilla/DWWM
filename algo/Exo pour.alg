<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="DEBUT_ALGORITHME"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i" />
        <item algoitem="entier EST_DU_TYPE NOMBRE" code="1#NOMBRE#entier" />
        <item algoitem="entierBis EST_DU_TYPE NOMBRE" code="1#NOMBRE#entierBis" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="AFFICHER &quot;choisir un chiffre&quot;" code="4#choisir un chiffre#0" />
        <item algoitem="LIRE entier" code="2#entier#pasliste" />
        <item algoitem="entierBis PREND_LA_VALEUR 1" code="5#entierBis#1#pasliste" />
        <item algoitem="POUR i ALLANT_DE 1 A entier" code="12#i#1#entier">
            <item algoitem="DEBUT_POUR" code="13#debutpour" />
            <item algoitem="entierBis PREND_LA_VALEUR entierBis * i" code="5#entierBis#entierBis * i#pasliste" />
            <item algoitem="FIN_POUR" code="14#finpour" />
        </item>
        <item algoitem="AFFICHER &quot;le produit est de &quot; + entierBi&quot;" code="4#le produit est de &quot; + entierBi#0" />
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>