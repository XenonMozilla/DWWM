<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="DEBUT_ALGORITHME"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="photocopie EST_DU_TYPE NOMBRE" code="1#NOMBRE#photocopie" />
        <item algoitem="prix EST_DU_TYPE NOMBRE" code="1#NOMBRE#prix" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="AFFICHER &quot;choisissez le nombre de copie voulu&quot;" code="4#choisissez le nombre de copie voulu#0" />
        <item algoitem="LIRE photocopie" code="2#photocopie#pasliste" />
        <item algoitem="SI (photocopie&gt;10) ALORS" code="6#photocopie&gt;10">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="SI (photocopie&gt;30) ALORS" code="6#photocopie&gt;30">
                <item algoitem="DEBUT_SI" code="7#debutsi" />
                <item algoitem="photocopie PREND_LA_VALEUR photocopie - 30" code="5#photocopie#photocopie - 30#pasliste" />
                <item algoitem="prix PREND_LA_VALEUR photocopie * 0.08 + 1 + 1.8" code="5#prix#photocopie * 0.08 + 1 + 1.8#pasliste" />
                <item algoitem="AFFICHER &quot;vous allez payer &quot; + pri&quot;" code="4#vous allez payer &quot; + pri#0" />
                <item algoitem="FIN_SI" code="8#finsi" />
                <item algoitem="SINON" code="9#sinon" >
                    <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                    <item algoitem="photocopie PREND_LA_VALEUR photocopie - 10" code="5#photocopie#photocopie - 10#pasliste" />
                    <item algoitem="prix PREND_LA_VALEUR photocopie * 0.09 + 1" code="5#prix#photocopie * 0.09 + 1#pasliste" />
                    <item algoitem="AFFICHER &quot;vous allez payer &quot; + pri&quot;" code="4#vous allez payer &quot; + pri#0" />
                    <item algoitem="FIN_SINON" code="11#finsinon" />
                </item>
            </item>
            <item algoitem="FIN_SI" code="8#finsi" />
            <item algoitem="SINON" code="9#sinon" >
                <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                <item algoitem="prix PREND_LA_VALEUR photocopie * 0.1" code="5#prix#photocopie * 0.1#pasliste" />
                <item algoitem="AFFICHER &quot;vous allez payer &quot; + pri&quot;" code="4#vous allez payer &quot; + pri#0" />
                <item algoitem="FIN_SINON" code="11#finsinon" />
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>