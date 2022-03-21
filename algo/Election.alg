<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="DEBUT_ALGORITHME"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="pourcentageA EST_DU_TYPE NOMBRE" code="1#NOMBRE#pourcentageA" />
        <item algoitem="pourcentageB EST_DU_TYPE NOMBRE" code="1#NOMBRE#pourcentageB" />
        <item algoitem="pourcentageC EST_DU_TYPE NOMBRE" code="1#NOMBRE#pourcentageC" />
        <item algoitem="pourcentageD EST_DU_TYPE NOMBRE" code="1#NOMBRE#pourcentageD" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="AFFICHER &quot;pourcentage de voix obtenue par candidat A&quot;" code="4#pourcentage de voix obtenue par candidat A#0" />
        <item algoitem="LIRE pourcentageA" code="2#pourcentageA#pasliste" />
        <item algoitem="SI (pourcentageA &gt; 50) ALORS" code="6#pourcentageA &gt; 50">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="AFFICHER &quot;Candidat A est elu !&quot;" code="4#Candidat A est elu !#0" />
            <item algoitem="FIN_SI" code="8#finsi" />
            <item algoitem="SINON" code="9#sinon" >
                <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                <item algoitem="SI (pourcentageA &lt; 12.5) ALORS" code="6#pourcentageA &lt; 12.5">
                    <item algoitem="DEBUT_SI" code="7#debutsi" />
                    <item algoitem="AFFICHER &quot;candidat A est battu !&quot;" code="4#candidat A est battu !#0" />
                    <item algoitem="FIN_SI" code="8#finsi" />
                    <item algoitem="SINON" code="9#sinon" >
                        <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                        <item algoitem="AFFICHER &quot;pourcentage de voix obtenue par candidat B&quot;" code="4#pourcentage de voix obtenue par candidat B#0" />
                        <item algoitem="LIRE pourcentageB" code="2#pourcentageB#pasliste" />
                        <item algoitem="AFFICHER &quot;pourcentage de voix obtenue par candidat C&quot;" code="4#pourcentage de voix obtenue par candidat C#0" />
                        <item algoitem="LIRE pourcentageC" code="2#pourcentageC#pasliste" />
                        <item algoitem="AFFICHER &quot;pourcentage de voix obtenue par candidat D&quot;" code="4#pourcentage de voix obtenue par candidat D#0" />
                        <item algoitem="LIRE pourcentageD" code="2#pourcentageD#pasliste" />
                        <item algoitem="SI (pourcentageA &gt; pourcentageB ET pourcentageA &gt; pourcentageC ET pourcentageA &gt; pourcentageD) ALORS" code="6#pourcentageA &gt; pourcentageB ET pourcentageA &gt; pourcentageC ET pourcentageA &gt; pourcentageD">
                            <item algoitem="DEBUT_SI" code="7#debutsi" />
                            <item algoitem="AFFICHER &quot;le candidat A est en tete !&quot;" code="4#le candidat A est en tete !#0" />
                            <item algoitem="FIN_SI" code="8#finsi" />
                            <item algoitem="SINON" code="9#sinon" >
                                <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                                <item algoitem="AFFICHER &quot;le candidat A n'est pas en tete !&quot;" code="4#le candidat A n'est pas en tete !#0" />
                                <item algoitem="FIN_SINON" code="11#finsinon" />
                            </item>
                        </item>
                        <item algoitem="FIN_SINON" code="11#finsinon" />
                    </item>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon" />
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>