<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="DEBUT_ALGORITHME"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="genre EST_DU_TYPE NOMBRE" code="1#NOMBRE#genre" />
        <item algoitem="age EST_DU_TYPE NOMBRE" code="1#NOMBRE#age" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="AFFICHER &quot;etes vous un homme(0) ou une femme (1)&quot;" code="4#etes vous un homme(0) ou une femme (1)#0" />
        <item algoitem="LIRE genre" code="2#genre#pasliste" />
        <item algoitem="AFFICHER &quot;quel age avez vous&quot;" code="4#quel age avez vous#0" />
        <item algoitem="LIRE age" code="2#age#pasliste" />
        <item algoitem="SI (genre == 0) ALORS" code="6#genre == 0">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="SI (age &gt; 20) ALORS" code="6#age &gt; 20">
                <item algoitem="DEBUT_SI" code="7#debutsi" />
                <item algoitem="AFFICHER &quot;vous allez payer&quot;" code="4#vous allez payer#0" />
                <item algoitem="FIN_SI" code="8#finsi" />
                <item algoitem="SINON" code="9#sinon" >
                    <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                    <item algoitem="AFFICHER &quot;vous n'allez pas payer&quot;" code="4#vous n'allez pas payer#0" />
                    <item algoitem="FIN_SINON" code="11#finsinon" />
                </item>
            </item>
            <item algoitem="FIN_SI" code="8#finsi" />
            <item algoitem="SINON" code="9#sinon" >
                <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                <item algoitem="SI (age &gt; 17 ET age &lt; 36) ALORS" code="6#age &gt; 17 ET age &lt; 36">
                    <item algoitem="DEBUT_SI" code="7#debutsi" />
                    <item algoitem="AFFICHER &quot;vous allez payer&quot;" code="4#vous allez payer#0" />
                    <item algoitem="FIN_SI" code="8#finsi" />
                    <item algoitem="SINON" code="9#sinon" >
                        <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                        <item algoitem="AFFICHER &quot;vous allez pas payer&quot;" code="4#vous allez pas payer#0" />
                        <item algoitem="FIN_SINON" code="11#finsinon" />
                    </item>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon" />
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>