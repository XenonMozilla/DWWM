<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="DEBUT_ALGORITHME"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="evaluation EST_DU_TYPE NOMBRE" code="1#NOMBRE#evaluation" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="evaluation PREND_LA_VALEUR 0" code="5#evaluation#0#pasliste" />
        <item algoitem="TANT_QUE (evaluation &lt;1 OU evaluation &gt; 5) FAIRE" code="15#evaluation &lt;1 OU evaluation &gt; 5">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque" />
            <item algoitem="AFFICHER &quot;veuiller saisir un chiffre entre 1 et 5&quot;" code="4#veuiller saisir un chiffre entre 1 et 5#0" />
            <item algoitem="LIRE evaluation" code="2#evaluation#pasliste" />
            <item algoitem="FIN_TANT_QUE" code="17#fintantque" />
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>