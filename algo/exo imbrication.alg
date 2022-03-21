<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="DEBUT_ALGORITHME"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="chiffre EST_DU_TYPE NOMBRE" code="1#NOMBRE#chiffre" />
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i" />
        <item algoitem="j EST_DU_TYPE NOMBRE" code="1#NOMBRE#j" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="TANT_QUE (chiffre &lt; 1 OU chiffre &gt; 9 ) FAIRE" code="15#chiffre &lt; 1 OU chiffre &gt; 9 ">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque" />
            <item algoitem="AFFICHER &quot;veuillez saisir un chiffre en 1 et 9&quot;" code="4#veuillez saisir un chiffre en 1 et 9#0" />
            <item algoitem="LIRE chiffre" code="2#chiffre#pasliste" />
            <item algoitem="FIN_TANT_QUE" code="17#fintantque" />
        </item>
        <item algoitem="POUR i ALLANT_DE 1 A chiffre" code="12#i#1#chiffre">
            <item algoitem="DEBUT_POUR" code="13#debutpour" />
            <item algoitem="POUR j ALLANT_DE 1 A chiffre" code="12#j#1#chiffre">
                <item algoitem="DEBUT_POUR" code="13#debutpour" />
                <item algoitem="AFFICHER j + &quot; &quot;" code="3#j + &quot; &quot;#0#pasliste" />
                <item algoitem="FIN_POUR" code="14#finpour" />
            </item>
            <item algoitem="AFFICHER &quot; &quot;" code="4# #1" />
            <item algoitem="FIN_POUR" code="14#finpour" />
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>