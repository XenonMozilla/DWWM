<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="DEBUT_ALGORITHME"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="age EST_DU_TYPE NOMBRE" code="1#NOMBRE#age" />
        <item algoitem="permit EST_DU_TYPE NOMBRE" code="1#NOMBRE#permit" />
        <item algoitem="accident EST_DU_TYPE NOMBRE" code="1#NOMBRE#accident" />
        <item algoitem="anneeAssu EST_DU_TYPE NOMBRE" code="1#NOMBRE#anneeAssu" />
        <item algoitem="keepAge EST_DU_TYPE NOMBRE" code="1#NOMBRE#keepAge" />
        <item algoitem="keepPermit EST_DU_TYPE NOMBRE" code="1#NOMBRE#keepPermit" />
        <item algoitem="keepAccident EST_DU_TYPE NOMBRE" code="1#NOMBRE#keepAccident" />
        <item algoitem="keepAnneeAssu EST_DU_TYPE NOMBRE" code="1#NOMBRE#keepAnneeAssu" />
        <item algoitem="keepTarif EST_DU_TYPE NOMBRE" code="1#NOMBRE#keepTarif" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="AFFICHER &quot;quel age avez vous&quot;" code="4#quel age avez vous#0" />
        <item algoitem="LIRE age" code="2#age#pasliste" />
        <item algoitem="AFFICHER &quot;depuis combien d'année avez vous votre permit&quot;" code="4#depuis combien d'année avez vous votre permit#0" />
        <item algoitem="LIRE permit" code="2#permit#pasliste" />
        <item algoitem="AFFICHER &quot;combien d'accident avez vous eu&quot;" code="4#combien d'accident avez vous eu#0" />
        <item algoitem="LIRE accident" code="2#accident#pasliste" />
        <item algoitem="AFFICHER &quot;depuis combien de temps etes vous dans cette assurance&quot;" code="4#depuis combien de temps etes vous dans cette assurance#0" />
        <item algoitem="LIRE anneeAssu" code="2#anneeAssu#pasliste" />
        <item algoitem="keepAge PREND_LA_VALEUR age&gt;25" code="5#keepAge#age&gt;25#pasliste" />
        <item algoitem="keepPermit PREND_LA_VALEUR permit&gt;2" code="5#keepPermit#permit&gt;2#pasliste" />
        <item algoitem="keepAnneeAssu PREND_LA_VALEUR anneeAssu&gt;5" code="5#keepAnneeAssu#anneeAssu&gt;5#pasliste" />
        <item algoitem="SI (keepAge == true) ALORS" code="6#keepAge == true">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="keepTarif PREND_LA_VALEUR keepTarif +1" code="5#keepTarif#keepTarif +1#pasliste" />
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
        <item algoitem="SI (keepPermit == true) ALORS" code="6#keepPermit == true">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="keepTarif PREND_LA_VALEUR keepTarif +1" code="5#keepTarif#keepTarif +1#pasliste" />
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
        <item algoitem="SI (accident == 1) ALORS" code="6#accident == 1">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="keepTarif PREND_LA_VALEUR keepTarif -1" code="5#keepTarif#keepTarif -1#pasliste" />
            <item algoitem="FIN_SI" code="8#finsi" />
            <item algoitem="SINON" code="9#sinon" >
                <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                <item algoitem="SI (accident == 2) ALORS" code="6#accident == 2">
                    <item algoitem="DEBUT_SI" code="7#debutsi" />
                    <item algoitem="keepTarif PREND_LA_VALEUR keepTarif -2" code="5#keepTarif#keepTarif -2#pasliste" />
                    <item algoitem="FIN_SI" code="8#finsi" />
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon" />
            </item>
        </item>
        <item algoitem="SI (keepTarif &gt;= 0) ALORS" code="6#keepTarif &gt;= 0">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="SI (keepAnneeAssu == true) ALORS" code="6#keepAnneeAssu == true">
                <item algoitem="DEBUT_SI" code="7#debutsi" />
                <item algoitem="keepTarif PREND_LA_VALEUR keepTarif +1" code="5#keepTarif#keepTarif +1#pasliste" />
                <item algoitem="FIN_SI" code="8#finsi" />
            </item>
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
        <item algoitem="SI (keepTarif &lt; 0) ALORS" code="6#keepTarif &lt; 0">
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="AFFICHER &quot;pas d'assurance&quot;" code="4#pas d'assurance#0" />
            <item algoitem="FIN_SI" code="8#finsi" />
            <item algoitem="SINON" code="9#sinon" >
                <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                <item algoitem="SI (keepTarif == 0) ALORS" code="6#keepTarif == 0">
                    <item algoitem="DEBUT_SI" code="7#debutsi" />
                    <item algoitem="AFFICHER &quot;tarif rouge&quot;" code="4#tarif rouge#0" />
                    <item algoitem="FIN_SI" code="8#finsi" />
                    <item algoitem="SINON" code="9#sinon" >
                        <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                        <item algoitem="SI (keepTarif == 1) ALORS" code="6#keepTarif == 1">
                            <item algoitem="DEBUT_SI" code="7#debutsi" />
                            <item algoitem="AFFICHER &quot;tarif orange&quot;" code="4#tarif orange#0" />
                            <item algoitem="FIN_SI" code="8#finsi" />
                            <item algoitem="SINON" code="9#sinon" >
                                <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                                <item algoitem="SI (keepTarif == 2) ALORS" code="6#keepTarif == 2">
                                    <item algoitem="DEBUT_SI" code="7#debutsi" />
                                    <item algoitem="AFFICHER &quot;tarif vert&quot;" code="4#tarif vert#0" />
                                    <item algoitem="FIN_SI" code="8#finsi" />
                                    <item algoitem="SINON" code="9#sinon" >
                                        <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                                        <item algoitem="AFFICHER &quot;tarif bleu&quot;" code="4#tarif bleu#0" />
                                        <item algoitem="FIN_SINON" code="11#finsinon" />
                                    </item>
                                </item>
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