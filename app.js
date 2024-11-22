<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Formulaire</title>
</head>
<body>
  <div class="form-container">
    <h1>Fiche Vertige enfants</h1>
    <form id="dynamicForm" method="POST" action="https://script.google.com/macros/s/AKfycbwTkoNy_daZSaQWWw-GjACbT9si_e9nS9kWwntyxkDKze7Nz214w4c4lTo0DWprJVyA/exec">
      <div class="form-group" id="nom_prenom">
        <label class="label" for="nom prenom">Nom Prénom</label>
        <input type="text" id="nom_prenom" name="nom prenom" placeholder="nom prénom">
      </div>
      <div class="form-group" id="tel">
        <label class="label" for="tel">Num Téléphone</label>
        <input type="text" id="tel" name="tel" placeholder="12345678" pattern="\d{8}" maxlength="8" minlength="8" title="Please enter exactly 8 digits.">
      </div>
      <div class="form-group" id="num_dossier">
        <label class="label" for="num_dossier">N° Dossier</label>
        <input type="number" id="num_dossier" name="num dossier">
      </div>
      <div class="form-group" id="age">
        <label class="label" for="age">Age</label>
        <input type="number" id="age" name="age">
      </div>
      <div class="form-group">
        <label class="label" for="intervalle_age">intervalle d'age</label>
        <select id="intervalle_age" name="intervalle d'age">
          <option value="" disabled selected></option>
          <option value="1-2">1-2</option>
          <option value="3-6">3-6</option>
          <option value="7-10">7-10</option>
          <option value="11-14">11-14</option>
          <option value="15-18">15-18</option>
        </select>
      </div>
      <div class="form-group">
        <label class="label" for="sexe">Sexe</label>
        <div>
          <label><input type="radio" name="sexe" value="M">M</label>
          <label><input type="radio" name="sexe" value="F">F</label>
        </div>
      </div>
      <div class="form-group" id="origine">
        <label class="label" for="origine">Origine</label>
        <input type="text" id="origine" name="origine">
      </div>
      <div class="form-group" id="délégation">
        <label class="label" for="délégation">Délégation</label>
        <input type="text" id="délégation" name="délégation">
      </div>
      
      <div class="form-group">
        <label class="label" >ATCD</label>
        <div>
          <label><input type="checkbox"name="ATCD" value="Anémie">Anémie</label>
          <label><input type="checkbox"name="ATCD" value="visuel">visuel</label>
          <label><input type="checkbox"name="ATCD" value="cardiaques">cardiaques</label>
          <label><input type="checkbox"name="ATCD" value="neurologiques">neurologiques</label>
          <label ><input type="checkbox" class="other_check" data-target="ATCD" id="autre_choice" name="ATCD" value="autre">autre</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="ATCD">
        <label class="label">Autre:</label>
        <input type="text" oninput="updateMainChoice(this.value,'autre_choice')">
      </div>

      <div class="form-group">
        <label class="label" >1er Diagnostic</label>
        <div>
          <label><input type="checkbox"name="1er Diagnostic" value="Migraine">Migraine</label>
          <label><input type="checkbox"name="1er Diagnostic" value="vertige positionnel de l enfant">vertige positionnel de l enfant</label>
          <label><input type="checkbox"name="1er Diagnostic" value="névrite">névrite</label>
          <label><input type="checkbox"name="1er Diagnostic" value="Areflexie">Areflexie</label>
          <label><input type="checkbox"name="1er Diagnostic" value="3ème fenêtre">3ème fenêtre </label>
          <label><input type="checkbox"name="1er Diagnostic" value="VPPB">VPPB</label>
          <label><input type="checkbox"name="1er Diagnostic" value="Pressionnel">Pressionnel</label>
          <label><input type="checkbox"name="1er Diagnostic" value="central">central</label>
          <label ><input type="checkbox" class="other_check" data-target="1er_Diagnostic" id="autre_diagnostic" name="1er Diagnostic" value="autre">autre</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="1er_Diagnostic">
        <label class="label">Autre:</label>
        <input type="text" oninput="updateMainChoice(this.value,'autre_diagnostic')">
      </div>
      <div class="form-group">
        <label class="label" for="coté">coté</label>
        <div>
          <label><input type="radio" name="coté" value="Droite">Droite</label>
          <label><input type="radio" name="coté" value="Gauche">Gauche</label>
          <label><input type="radio" name="coté" value="Les deux">Les deux</label>
        </div>
      </div>
      <div class="form-group">
        <label class="label" >Circonstance de découverte</label>
        <div>
          <label><input type="checkbox"name="Circonstance de découverte" value="vertige symptôme">vertige symptôme</label>
          <label><input type="checkbox"name="Circonstance de découverte" value="forme syndromique">forme syndromique</label>
          <label><input type="checkbox"name="Circonstance de découverte" value="symptômes atypiques">symptômes atypiques</label>
          <label><input type="checkbox"name="Circonstance de découverte" value="bilan d implant cochléaire">bilan d implant cochléaire</label>
          <label ><input type="checkbox" class="other_check" data-target="Circonstance_découverte" id="autre_Circonstance_découverte" name="Circonstance de découverte" value="autre">autre</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="Circonstance_découverte">
        <label class="label">Autre:</label>
        <input type="text" oninput="updateMainChoice(this.value,'autre_Circonstance_découverte')">
      </div>
      <div class="form-group">
        <label class="label" for="moi_de_consultation">mois de consultation</label>
        <select id="moi_de_consultation" name="mois de consultation">
          <option value="" disabled selected>mois</option>
          <option value="Janvier">Janvier</option>
          <option value="Février">Février</option>
          <option value="Mars">Mars</option>
          <option value="Avril">Avril</option>
          <option value="Mai">Mai</option>
          <option value="Juin">Juin</option>
          <option value="Juillet">Juillet</option>
          <option value="Aout">Aout</option>
          <option value="Septembre">Septembre</option>
          <option value="Octobre">Octobre</option>
          <option value="Novembre">Novembre</option>
          <option value="Décembre">Décembre</option>
        </select>
      </div>
      <div class="form-group">
        <label class="label" for="S1C1">S1C1</label>
        <select id="S1C1" name="S1C1">
          <option value="" disabled selected>S1C1</option>
          <option value="< 1 jour">< 1 jour</option>
          <option value="2 – 5 j">2 – 5 j </option>
          <option value="6 – 15 j">6 – 15 j </option>
          <option value="16 j – 1 mois">16 j – 1 mois</option>
          <option value="2 – 6 mois">2 – 6 mois</option>
          <option value="7 – 12 mois">7 – 12 mois</option>
          <option value="2 – 3 ans">2 – 3 ans</option>
          <option value="> 4ans">> 4ans</option>
        </select>
      </div>
      <div class="form-group">
        <label class="label" >Type de symptômes</label>
        <div>
          <label><input type="checkbox"name="Type de symptômes" value="rotatoire">rotatoire</label>
          <label><input type="checkbox"name="Type de symptômes" value="instabilités">instabilités</label>
          <label><input type="checkbox"name="Type de symptômes" value="tangage">tangage</label>
          <label><input type="checkbox"name="Type de symptômes" value="étourdissements">étourdissements</label>
          <label><input type="checkbox"name="Type de symptômes" value="tourne dans sa tête">tourne dans sa tête</label>
          <label><input type="checkbox"name="Type de symptômes" value="chutes">chutes</label>
          <label><input type="checkbox"name="Type de symptômes" value="maladresse">maladresse</label>
          <label ><input type="checkbox" class="other_check" data-target="type_de_symptomes" id="autre_type_de_symptomes" name="Type de symptômes" value="autre">autre</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="type_de_symptomes">
        <label class="label">Autre:</label>
        <input type="text" oninput="updateMainChoice(this.value,'autre_type_de_symptomes')">
      </div>
      <div class="form-group">
        <label class="label" >Durée vertige</label>
        <div>
          <label><input type="checkbox"name="Durée vertige" value="secondes à 5 minutes">secondes à 5 minutes</label>
          <label><input type="checkbox"name="Durée vertige" value="10 – 30 m">10 – 30 m</label>
          <label><input type="checkbox"name="Durée vertige" value="1 – 6 heures">1 – 6 heures</label>
          <label><input type="checkbox"name="Durée vertige" value="1/2 – 1 jour">1/2 – 1 jour</label>
          <label><input type="checkbox"name="Durée vertige" value="2 – 6 jours">2 – 6 jours</label>
          <label ><input type="checkbox" class="other_check" data-target="durée_vertige" id="autre_durée_vertige" name="Durée vertige" value="autre">autre</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="durée_vertige">
        <label class="label">Autre:</label>
        <input type="text" oninput="updateMainChoice(this.value,'autre_durée_vertige')">
      </div>
      <div class="form-group">
        <label class="label" >Facteur déclenchant</label>
        <div>
          <label><input type="checkbox"name="Facteur déclenchant" value="spontané">spontané</label>
          <label><input type="checkbox"name="Facteur déclenchant" value="décubitus">décubitus</label>
          <label><input type="checkbox"name="Facteur déclenchant" value="latérocubitus Dt">latérocubitus Dt</label>
          <label><input type="checkbox"name="Facteur déclenchant" value="latérocubitus Gche">latérocubitus Gche</label>
          <label><input type="checkbox"name="Facteur déclenchant" value="relever">relever</label>
          <label><input type="checkbox"name="Facteur déclenchant" value="penché extension tête">penché extension tête</label>
          <label><input type="checkbox"name="Facteur déclenchant" value="orthostatisme">orthostatisme</label>
          <label ><input type="checkbox" class="other_check" data-target="facteur_déclenchant" id="autre_facteur_déclenchant" name="Facteur déclenchant" value="autre">autre</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="facteur_déclenchant">
        <label class="label">Autre:</label>
        <input type="text" oninput="updateMainChoice(this.value,'autre_facteur_déclenchant')">
      </div>
      <div class="form-group">
        <label class="label" for="Horaire du vertige">Horaire du vertige</label>
        <select name="Horaire du vertige">
          <option value="" disabled selected>Horaire</option>
          <option value="indéterminé">indéterminé</option>
          <option value="matinée">matinée </option>
          <option value="après midi">après midi </option>
          <option value="soir">soir</option>
          <option value="permanent">permanent</option>
        </select>
      </div>
      <div class="form-group">
        <label class="label" >Contexte</label>
        <div>
          <label><input type="radio"name="Contexte" value="traumatique">traumatique</label>
          <label><input type="radio"name="Contexte" value="CMV">CMV</label>
          <label><input type="radio"name="Contexte" value="Maladie métabolique">Maladie métabolique</label>
          <label><input type="radio"name="Contexte" value="malformation : non connue">malformation : non connue</label>
          <label ><input type="radio" class="other_check" data-target="Contexte" id="autre_Contexte" name="Contexte" value="oui">oui</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="Contexte">
        <label class="label">Types :</label>
        <input type="text" oninput="updateMainChoice(this.value,'autre_Contexte')">
      </div>
      <label class="label" for="Sévérité">Sévérité</label>
      <input type="range" id="Sévérité" name="Sévérité" min="1" max="6" step="1" value="3" oninput="this.nextElementSibling.value = this.value">
      <output>3</output>
      <div class="form-group">
        <label class="label" >Signes associés</label>
        <div>
          <label><input type="checkbox"name="Signes associés" value="acouphène">acouphène</label>
          <label><input type="checkbox"name="Signes associés" value="céphalées">céphalées</label>
          <label><input type="checkbox"name="Signes associés" value="tête lourde">tête lourde</label>
          <label><input type="checkbox"name="Signes associés" value="autophonie">autophonie</label>
          <label><input type="checkbox"name="Signes associés" value="déficit neurologique">déficit neurologique</label>
          <label><input type="checkbox"name="Signes associés" value="Tullio">Tullio</label>
          <label ><input type="checkbox" class="other_check" data-target="signes_associés" id="autre_signes_associés" name="Signes associés" value="autre">autre</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="signes_associés">
        <label class="label">Autre:</label>
        <input type="text" oninput="updateMainChoice(this.value,'autre_signes_associés')">
      </div>
      <div class="form-group">
        <label class="label" for="Démarche">Démarche</label>
        <div>
          <label><input type="radio" name="Démarche" value="Normale">Normale</label>
          <label><input type="radio" name="Démarche" value="difficile">difficile</label>
          <label><input type="radio" name="Démarche" value="impossible">impossible</label>
        </div>
      </div>
      <div class="form-group">
        <label class="label" for="Ataxie">Ataxie</label>
        <div>
          <label><input type="radio" name="Ataxie" value="Non">Non</label>
          <label><input type="radio" name="Ataxie" value="Oui">Oui</label>
        </div>
      </div>
      <div class="form-group">
        <label class="label" >Déficit moteur</label>
        <div>
          <label><input type="radio"name="Déficit moteur" value="Non">Non</label>
          <label ><input type="radio" class="other_check" data-target="Déficit_moteur" id="autre_Déficit_moteur" name="Déficit moteur" value="Oui">Oui</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="Déficit_moteur">
        <label class="label">Territoire :</label>
        <input type="text" oninput="updateMainChoice(this.value,'autre_Déficit_moteur')">
      </div>
      <div class="form-group">
        <label class="label" >Déficit sensitif</label>
        <div>
          <label><input type="radio"name="Déficit sensitif" value="Non">Non</label>
          <label ><input type="radio" class="other_check" data-target="Déficit_sensitif" id="autre_Déficit_sensitif" name="Déficit sensitif" value="Oui">Oui</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="Déficit_sensitif">
        <label class="label">Territoire :</label>
        <input type="text" oninput="updateMainChoice(this.value,'autre_Déficit_sensitif')">
      </div>
      <div class="form-group">
        <label class="label" >Otoscopie</label>
        <div>
          <label ><input type="checkbox" name="Otoscopie" value="normale">normale</label>
          <label ><input type="checkbox" class="other_check" data-target="OSM" id="autre_OSM" name="Otoscopie" value="OSM">OSM</label>
          <label ><input type="checkbox" class="other_check" data-target="OSM_simple" id="autre_OSM_simple" name="Otoscopie" value="OMC simple">OMC simple</label>
          <label ><input type="checkbox" class="other_check" data-target="Cholestéatome" id="autre_Cholestéatome" name="Otoscopie" value="Cholestéatome">Cholestéatome</label>
          <label ><input type="checkbox" class="other_check" data-target="Otoscopie" id="autre_Otoscopie" name="Otoscopie" value="autre">autre</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="OSM">
        <label class="label">Coté du OSM</label>
        <div>
          <label><input type="radio" name="coté OSM" value="Droite">Droite</label>
          <label><input type="radio" name="coté OSM" value="Gauche">Gauche</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="OSM_simple">
        <label class="label">Coté du OSM simple</label>
        <div>
          <label><input type="radio" name="coté OSM simple" value="Droite">Droite</label>
          <label><input type="radio" name="coté OSM simple" value="Gauche">Gauche</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="Cholestéatome">
        <label class="label">Coté du Cholestéatome</label>
        <div>
          <label><input type="radio" name="coté Cholestéatome" value="Droite">Droite</label>
          <label><input type="radio" name="coté Cholestéatome" value="Gauche">Gauche</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="Otoscopie">
        <label class="label">Autre :</label>
        <input type="text" oninput="updateMainChoice(this.value,'autre_Otoscopie')">
        <label class="label">Coté</label>
        <div>
          <label><input type="radio" name="coté autre" value="Droite">Droite</label>
          <label><input type="radio" name="coté autre" value="Gauche">Gauche</label>
        </div>
      </div>

      <div class="form-group">
        <label class="label" >Romberg</label>
        <div>
          <label ><input type="checkbox" name="Romberg" value="impossible">impossible</label>
          <label ><input type="checkbox" name="Romberg" value="normal">normal</label>
          <label ><input type="checkbox" class="other_check" data-target="pathologique" id="autre_pathologique" name="Romberg" value="pathologique">pathologique</label>
        </div>
        <div class="form-group hidden question-group" id="pathologique">
          <label class="label">Coté du pathologique</label>
          <div>
            <label><input type="radio" name="coté pathologique" value="Droite">Droite</label>
            <label><input type="radio" name="coté pathologique" value="Gauche">Gauche</label>
          </div>
        </div>
        <div class="form-group">
          <label class="label" >Fukuda</label>
          <div>
            <label ><input type="checkbox" name="Fukuda" value="normal">normal</label>
            <label ><input type="checkbox" class="other_check" data-target="dévié" id="autre_dévié" name="Fukuda" value="dévié">dévié</label>
          </div>
          <div class="form-group hidden question-group" id="dévié">
            <label class="label">Coté du Fukuda</label>
            <div>
              <label><input type="radio" name="coté Fukuda" value="Droite">Droite</label>
              <label><input type="radio" name="coté Fukuda" value="Gauche">Gauche</label>
            </div>
          </div>
          <div class="form-group">
            <label class="label" for="Skew">Skew</label>
            <div>
              <label><input type="radio" name="Skew" value="non">non</label>
              <label><input type="radio" name="Skew" value="oui">oui</label>
            </div>
          </div>

          <div class="form-group">
            <label class="label" >Nystagmus spontané</label>
            <div>
              <label ><input type="radio" name="Nystagmus spontané" value="non">non</label>
              <label ><input type="radio" class="other_check" data-target="oui" id="autre_oui" name="Nystagmus spontané" value="oui">oui</label>
            </div>
          </div>
          <div class="form-group hidden question-group" id="oui">
            <label class="label">Degré du Nystagmus spontané</label>
            <div>
              <label><input type="radio" name="Degré du Nystagmus spontané" value="1er">1er</label>
              <label><input type="radio" name="Degré du Nystagmus spontané" value="2er">2er</label>
              <label><input type="radio" name="Degré du Nystagmus spontané" value="3er">3er</label>
            </div>
            <label class="label">sens du Nystagmus spontané</label>
            <div>
              <label><input type="radio" name="sens du Nystagmus spontané" value="droit">droit</label>
              <label><input type="radio" name="sens du Nystagmus spontané" value="gauche">gauche</label>
              <label><input type="radio" name="sens du Nystagmus spontané" value="sup">sup</label>
              <label><input type="radio" name="sens du Nystagmus spontané" value="inf">inf</label>
              <label><input type="radio" name="sens du Nystagmus spontané" value="torsionnel horaire">torsionnel horaire</label>
              <label><input type="radio" name="sens du Nystagmus spontané" value="antihoraire">antihoraire</label>
            </div>
          </div>
          <label class="label">Poursuite lente </label>
          <div class="form-group">
            <label class="label" for="vitesse_poursuite_lente">Vitesse (°/s)</label>
            <input type="number" step="0.01" id="vitesse_poursuite_lente" name="vitesse poursuite lente">
            <label class="label" for="latence_poursuite_lente">Latence (ms)</label>
            <input type="number" step="0.01" id="latence_poursuite_lente" name="latence poursuite lente">
            <label class="label" for="précision_poursuite_lente">Précision (%)</label>
            <input type="number" step="0.01" id="précision_poursuite_lente" name="précision poursuite lente">
          </div>

          <div class="form-group">
            <label class="label" >Poursuite saccadique</label>
            <div>
              <label ><input type="radio" name="Poursuite saccadique" value="harmonieuse">harmonieuse</label>
              <label ><input type="radio" name="Poursuite saccadique" value="disharmonieuse">disharmonieuse</label>
              <label ><input type="radio" class="other_check" data-target="gain_droite" name="Poursuite saccadique" value="gain à droite">gain à droite</label>
              <label ><input type="radio" class="other_check" data-target="gain_gauche" name="Poursuite saccadique" value="gain à gauche">gain à gauche</label>
            </div>
          </div>
          <div class="form-group hidden question-group" id="gain_droite">
            <label class="label" for="gain_droite">Gain à droite (%)</label>
            <input type="number" step="0.01" id="gain_droite" name="gain à droite">
          </div>
          <div class="form-group hidden question-group" id="gain_gauche">
            <label class="label" for="gain_gauche">Gain à gauche (%)</label>
            <input type="number" step="0.01" id="gain_gauche" name="gain à gauche">
          </div>
          <div class="form-group">
            <label class="label" for="Gaze">Gaze</label>
            <div>
              <label><input type="radio" name="Gaze" value="non">non</label>
              <label><input type="radio" name="Gaze" value="oui">oui</label>
            </div>
          </div>
          <div class="form-group">
            <label class="label" for="ERI">ERI</label>
            <div>
              <label><input type="radio" name="ERI" value="Nle">Nle</label>
              <label><input type="radio" name="ERI" value="prévalence Dte">prévalence Dte</label>
              <label><input type="radio" name="ERI" value="prévalence Gche">prévalence Gche</label>
            </div>
          </div>
          <label class="label" >Bow</label>
            <div>
              <label ><input type="radio" name="Bow" value="0">0</label>
              <label ><input type="radio" class="other_check" data-target="Bow" id="autre_bow" name="Bow" value="Nystagmus">Nystagmus</label>
            </div>
          <div class="form-group hidden question-group" id="Bow">
            <label class="label" for="Nystagmus">Nystagmus</label>
            <div>
              <label><input type="radio" name="Nystagmus" value="droite">droite</label>
              <label><input type="radio" name="Nystagmus" value="gauche">gauche</label>
              <label><input type="radio" name="Nystagmus" value="sup">sup</label>
              <label><input type="radio" name="Nystagmus" value="inf">inf</label>
              <label><input type="radio" name="Nystagmus" value="torsionnel horaire">torsionnel horaire</label>
              <label><input type="radio" name="Nystagmus" value="antihoraire">antihoraire</label>
            </div>
          </div>
          <label class="label" for="Retour de Bow">Retour de Bow</label>
          <div>
            <label><input type="radio" name="Retour de Bow" value="0">0</label>
            <label><input type="radio" class="other_check" data-target="inversion_oui" name="Retour de Bow" value="inversion">inversion</label>
          </div>
        <div class="form-group hidden question-group" id="inversion_oui">
          <label class="label" for="inversion_oui">vitesse (°/s)</label>
          <input type="number" step="0.01" id="inversion_oui" name="vitesse Bow">
        </div>

        <label class="label" >RALP</label>
        <div>
          <label ><input type="radio" name="RALP" value="0">0</label>
          <label ><input type="radio" name="RALP" value="Nystagmus">Nystagmus</label>
          <label><input type="radio" name="RALP" value="droite">droite</label>
          <label><input type="radio" name="RALP" value="gauche">gauche</label>
          <label><input type="radio" name="RALP" value="sup">sup</label>
          <label><input type="radio" name="RALP" value="inf">inf</label>
          <label><input type="radio" name="RALP" value="torsionnel horaire">torsionnel horaire</label>
          <label><input type="radio" name="RALP" value="antihoraire">antihoraire</label>
          <label><input type="radio" name="RALP" value="latence">latence</label>
          <label ><input type="radio" class="other_check" data-target="vitesse_RALP" id="autre_vitesse_RALP" name="RALP" value="vitesse">vitesse</label>
        </div>
        <div class="form-group hidden question-group" id="vitesse_RALP">
          <label class="label">vitesse</label>
          <input type="number" step="0.01" oninput="updateMainChoice(this.value,'autre_vitesse_RALP')">
        </div>
        <label class="label" for="Retour de RALP">Retour de RALP</label>
        <div>
          <label><input type="radio" name="Retour de RALP" value="0">0</label>
          <label><input type="radio" name="Retour de RALP" value="inversion">inversion</label>
        </div>

      <label class="label" >LARP</label>
      <div>
        <label ><input type="radio" name="LARP" value="0">0</label>
        <label ><input type="radio" name="LARP" value="Nystagmus">Nystagmus</label>
        <label><input type="radio" name="LARP" value="droite">droite</label>
        <label><input type="radio" name="LARP" value="gauche">gauche</label>
        <label><input type="radio" name="LARP" value="sup">sup</label>
        <label><input type="radio" name="LARP" value="inf">inf</label>
        <label><input type="radio" name="LARP" value="torsionnel horaire">torsionnel horaire</label>
        <label><input type="radio" name="LARP" value="antihoraire">antihoraire</label>
        <label><input type="radio" name="LARP" value="latence">latence</label>
        <label ><input type="radio" class="other_check" data-target="vitesse_LARP" id="autre_vitesse_LARP" name="LARP" value="vitesse">vitesse</label>
      </div>
      <div class="form-group hidden question-group" id="vitesse_LARP">
        <label class="label">vitesse</label>
        <input type="number" step="0.01" oninput="updateMainChoice(this.value,'autre_vitesse_LARP')">
      </div>
      <label class="label" for="Retour de LARP">Retour de LARP</label>
      <div>
        <label><input type="radio" name="Retour de LARP" value="0">0</label>
        <label><input type="radio" name="Retour de LARP" value="inversion">inversion</label>
      </div>

      <label class="label" >ROSE</label>
      <div>
        <label ><input type="radio" name="ROSE" value="0">0</label>
        <label ><input type="radio" name="ROSE" value="Nystagmus">Nystagmus</label>
        <label><input type="radio" name="ROSE" value="droite">droite</label>
        <label><input type="radio" name="ROSE" value="gauche">gauche</label>
        <label><input type="radio" name="ROSE" value="sup">sup</label>
        <label><input type="radio" name="ROSE" value="inf">inf</label>
        <label><input type="radio" name="ROSE" value="torsionnel horaire">torsionnel horaire</label>
        <label><input type="radio" name="ROSE" value="antihoraire">antihoraire</label>
        <label><input type="radio" name="ROSE" value="latence">latence</label>
        <label ><input type="radio" class="other_check" data-target="vitesse_ROSE" id="autre_vitesse_ROSE" name="ROSE" value="vitesse">vitesse</label>
      </div>
      <div class="form-group hidden question-group" id="vitesse_ROSE">
        <label class="label">vitesse</label>
        <input type="number" step="0.01" oninput="updateMainChoice(this.value,'autre_vitesse_ROSE')">
      </div>
      <label class="label" for="Lever ROSE">Lever ROSE</label>
      <div>
        <label><input type="radio" name="Lever ROSE" value="0">0</label>
        <label><input type="radio" name="Lever ROSE" value="inversion">inversion</label>
      </div>

      <label class="label" >HPK droite</label>
      <div>
        <label ><input type="radio" name="HPK droite" value="0">0</label>
        <label ><input type="radio" class="other_check" data-target="HPK_droite" id="autre_HPK_droite" name="HPK droite" value="Nystagmus">Nystagmus</label>
      </div>
       <div class="form-group hidden question-group" id="HPK_droite">
        <label class="label">HPK droite : Nystagmus</label>
        <div>
          <label><input type="radio" name="HPK droite : Nystagmus" value="droite">droite</label>
          <label><input type="radio" name="HPK droite : Nystagmus" value="gauche">gauche</label>
          <label><input type="radio" name="HPK droite : Nystagmus" value="sup">sup</label>
          <label><input type="radio" name="HPK droite : Nystagmus" value="inf">inf</label>
          <label><input type="radio" name="HPK droite : Nystagmus" value="torsionnel horaire apogéotropique">torsionnel horaire apogéotropique</label>
          <label><input type="radio" name="HPK droite : Nystagmus" value="antihoraire géotropique">antihoraire géotropique</label>
          <label ><input type="radio" class="other_check" data-target="durée_HPK_droite" id="autre_durée_HPK_droite" name="HPK droite : Nystagmus" value="durée">durée (secondes)</label>          
          <label ><input type="radio" class="other_check" data-target="latence_HPK_droite" id="autre_latence_HPK_droite" name="HPK droite : Nystagmus" value="latence">latence (secondes)</label>
          <label ><input type="radio" class="other_check" data-target="vitesse_HPK_droite" id="autre_vitesse_HPK_droite" name="HPK droite : Nystagmus" value="vitesse">vitesse</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="durée_HPK_droite">
        <label class="label">durée (secondes)</label>
        <input type="number" step="0.01" oninput="updateMainChoice(this.value,'autre_durée_HPK_droite')">
      </div>
      <div class="form-group hidden question-group" id="latence_HPK_droite">
        <label class="label">latence (secondes)</label>
        <input type="number" step="0.01" oninput="updateMainChoice(this.value,'autre_latence_HPK_droite')">
      </div>
      <div class="form-group hidden question-group" id="vitesse_HPK_droite">
        <label class="label">vitesse</label>
        <input type="number" step="0.01" oninput="updateMainChoice(this.value,'autre_vitesse_HPK_droite')">
      </div>
      <label class="label" for="Lever HPK droite">Lever HPK droite</label>
      <div>
        <label><input type="radio" name="Lever HPK droite" value="0">0</label>
        <label><input type="radio" name="Lever HPK droite" value="inversion">inversion</label>
      </div>

      <label class="label" >HPK gauche</label>
      <div>
        <label ><input type="radio" name="HPK gauche" value="0">0</label>
        <label ><input type="radio" class="other_check" data-target="HPK_gauche" id="autre_HPK_gauche" name="HPK gauche" value="Nystagmus">Nystagmus</label>
      </div>
       <div class="form-group hidden question-group" id="HPK_gauche">
        <label class="label">HPK gauche : Nystagmus</label>
        <div>
          <label><input type="radio" name="HPK gauche : Nystagmus" value="droite">droite</label>
          <label><input type="radio" name="HPK gauche : Nystagmus" value="gauche">gauche</label>
          <label><input type="radio" name="HPK gauche : Nystagmus" value="sup">sup</label>
          <label><input type="radio" name="HPK gauche : Nystagmus" value="inf">inf</label>
          <label><input type="radio" name="HPK gauche : Nystagmus" value="torsionnel horaire apogéotropique">torsionnel horaire apogéotropique</label>
          <label><input type="radio" name="HPK gauche : Nystagmus" value="antihoraire géotropique">antihoraire géotropique</label>
          <label ><input type="radio" class="other_check" data-target="durée_HPK_gauche" id="autre_durée_HPK_gauche" name="HPK gauche : Nystagmus" value="durée">durée (secondes)</label>
          <label ><input type="radio" class="other_check" data-target="latence_HPK_gauche" id="autre_latence_HPK_gauche" name="HPK gauche : Nystagmus" value="latence">latence (secondes)</label>
          <label ><input type="radio" class="other_check" data-target="vitesse_HPK_gauche" id="autre_vitesse_HPK_gauche" name="HPK gauche : Nystagmus" value="vitesse">vitesse</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="durée_HPK_gauche">
        <label class="label">durée (secondes)</label>
        <input type="number" step="0.01" oninput="updateMainChoice(this.value,'autre_durée_HPK_gauche')">
      </div>
      <div class="form-group hidden question-group" id="latence_HPK_gauche">
        <label class="label">latence (secondes)</label>
        <input type="number" step="0.01" oninput="updateMainChoice(this.value,'autre_latence_HPK_gauche')">
      </div>
      <div class="form-group hidden question-group" id="vitesse_HPK_gauche">
        <label class="label">vitesse</label>
        <input type="number" step="0.01" oninput="updateMainChoice(this.value,'autre_vitesse_HPK_gauche')">
      </div>
      <label class="label" for="Lever HPK gauche">Lever HPK gauche</label>
      <div>
        <label><input type="radio" name="Lever HPK gauche" value="0">0</label>
        <label><input type="radio" name="Lever HPK gauche" value="inversion">inversion</label>
      </div>

      <label class="label" >latérocubitus droite</label>
      <div>
        <label ><input type="radio" name="latérocubitus droite" value="0">0</label>
        <label ><input type="radio" class="other_check" data-target="latérocubitus_droite" id="autre_latérocubitus_droite" name="latérocubitus droite" value="Nystagmus">Nystagmus</label>
      </div>
       <div class="form-group hidden question-group" id="latérocubitus_droite">
        <label class="label">latérocubitus droite : Nystagmus</label>
        <div>
          <label><input type="radio" name="latérocubitus droite : Nystagmus" value="droite">droite</label>
          <label><input type="radio" name="latérocubitus droite : Nystagmus" value="gauche">gauche</label>
          <label><input type="radio" name="latérocubitus droite : Nystagmus" value="sup">sup</label>
          <label><input type="radio" name="latérocubitus droite : Nystagmus" value="inf">inf</label>
          <label><input type="radio" name="latérocubitus droite : Nystagmus" value="torsionnel horaire apogéotropique">torsionnel horaire apogéotropique</label>
          <label><input type="radio" name="latérocubitus droite : Nystagmus" value="antihoraire géotropique">antihoraire géotropique</label>
          <label ><input type="radio" class="other_check" data-target="durée_latérocubitus_droite" id="autre_durée_latérocubitus_droite" name="latérocubitus droite : Nystagmus" value="durée">durée (secondes)</label>
          <label ><input type="radio" class="other_check" data-target="latence_latérocubitus_droite" id="autre_latence_latérocubitus_droite" name="latérocubitus droite : Nystagmus" value="latence">latence (secondes)</label>
          <label ><input type="radio" class="other_check" data-target="vitesse_latérocubitus_droite" id="autre_vitesse_latérocubitus_droite" name="latérocubitus droite : Nystagmus" value="vitesse">vitesse</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="durée_latérocubitus_droite">
        <label class="label">durée (secondes)</label>
        <input type="number" step="0.01" oninput="updateMainChoice(this.value,'autre_durée_latérocubitus_droite')">
      </div>
      <div class="form-group hidden question-group" id="latence_latérocubitus_droite">
        <label class="label">latence (secondes)</label>
        <input type="number" step="0.01" oninput="updateMainChoice(this.value,'autre_latence_latérocubitus_droite')">
      </div>
      <div class="form-group hidden question-group" id="vitesse_latérocubitus_droite">
        <label class="label">vitesse</label>
        <input type="number" step="0.01" oninput="updateMainChoice(this.value,'autre_vitesse_latérocubitus_droite')">
      </div>
      <label class="label" for="Retour en position assise droite">Retour en position  droite</label>
      <div>
        <label><input type="radio" name="Retour en position assise droite" value="0">0</label>
        <label><input type="radio" name="Retour en position assise droite" value="inversion">inversion</label>
      </div>

      <label class="label" >latérocubitus gauche</label>
      <div>
        <label ><input type="radio" name="latérocubitus gauche" value="0">0</label>
        <label ><input type="radio" class="other_check" data-target="latérocubitus_gauche" id="autre_latérocubitus_gauche" name="latérocubitus gauche" value="Nystagmus">Nystagmus</label>
      </div>
       <div class="form-group hidden question-group" id="latérocubitus_gauche">
        <label class="label">latérocubitus gauche : Nystagmus</label>
        <div>
          <label><input type="radio" name="latérocubitus gauche : Nystagmus" value="droite">droite</label>
          <label><input type="radio" name="latérocubitus gauche : Nystagmus" value="gauche">gauche</label>
          <label><input type="radio" name="latérocubitus gauche : Nystagmus" value="sup">sup</label>
          <label><input type="radio" name="latérocubitus gauche : Nystagmus" value="inf">inf</label>
          <label><input type="radio" name="latérocubitus gauche : Nystagmus" value="torsionnel horaire apogéotropique">torsionnel horaire apogéotropique</label>
          <label><input type="radio" name="latérocubitus gauche : Nystagmus" value="antihoraire géotropique">antihoraire géotropique</label>
          <label ><input type="radio" class="other_check" data-target="durée_latérocubitus_gauche" id="autre_durée_latérocubitus_gauche" name="latérocubitus gauche : Nystagmus" value="durée">durée (secondes)</label>
          <label ><input type="radio" class="other_check" data-target="latence_latérocubitus_gauche" id="autre_latence_latérocubitus_gauche" name="latérocubitus gauche : Nystagmus" value="latence">latence (secondes)</label>
          <label ><input type="radio" class="other_check" data-target="vitesse_latérocubitus_gauche" id="autre_vitesse_latérocubitus_gauche" name="latérocubitus gauche : Nystagmus" value="vitesse">vitesse</label>
        </div>
      </div>
      <div class="form-group hidden question-group" id="durée_latérocubitus_gauche">
        <label class="label">durée (secondes)</label>
        <input type="number" step="0.01" oninput="updateMainChoice(this.value,'autre_durée_latérocubitus_gauche')">
      </div>
      <div class="form-group hidden question-group" id="latence_latérocubitus_gauche">
        <label class="label">latence (secondes)</label>
        <input type="number" step="0.01" oninput="updateMainChoice(this.value,'autre_latence_latérocubitus_gauche')">
      </div>
      <div class="form-group hidden question-group" id="vitesse_latérocubitus_gauche">
        <label class="label">vitesse</label>
        <input type="number" step="0.01" oninput="updateMainChoice(this.value,'autre_vitesse_latérocubitus_gauche')">
      </div>
      <label class="label" for="Retour en position assise gauche">Retour en position assise</label>
      <div>
        <label><input type="radio" name="Retour en position assise gauche" value="0">0</label>
        <label><input type="radio" name="Retour en position assise gauche" value="inversion">inversion</label>
      </div>

      <div class="form-group" id="Calorique">
        <h3 class="label" >Calorique :</h3>
        <label class="label" for="chaud droite °/s">chaud droite °/s</label>
        <input type="number" step="0.01" name="chaud droite °/s">
        <label class="label" for="chaud gauche °/s">chaud gauche °/s</label>
        <input type="number" step="0.01" name="chaud gauche °/s">
        <label class="label" for="froid droite °/s">froid droite °/s</label>
        <input type="number" step="0.01" name="froid droite °/s">
        <label class="label" for="froid gauche °/s">froid gauche °/s</label>
        <input type="number" step="0.01" name="froid gauche °/s">
      </div>
      <div class="form-group">
        <label class="label" for="déficite">déficite</label>
        <select id="déficite" name="déficite">
          <option value="" disabled selected>.. (%)</option>
          <option value="< 20%">< 20%</option>
          <option value="21 – 30%">21 – 30%</option>
          <option value="31 – 40%">31 – 40%</option>
          <option value="41 – 50%">41 – 50%</option>
          <option value="51 – 60%">51 – 60%</option>
          <option value="61 – 70%">61 – 70%</option>
          <option value="71 – 80%">71 – 80%</option>
          <option value="81 – 90%">81 – 90%</option>
          <option value="91 – 100%">91 – 100%</option>
        </select>
      </div>
      <div class="form-group">
        <label class="label" for="coté_Calorique">coté</label>
        <div>
          <label><input type="radio" name="coté Calorique" value="Droite">Droite</label>
          <label><input type="radio" name="coté Calorique" value="Gauche">Gauche</label>
        </div>
      </div>
      <div class="form-group">
        <label class="label" for="Prépondérance absolue">Prépondérance absolue</label>
        <select id="Prépondérance_absolue" name="Prépondérance absolue">
          <option value="" disabled selected>.. (°/s)</option>
          <option value="0 – 1">0 – 1</option>
          <option value="1.1 – 2">1.1 – 2</option>
          <option value="2.1 – 3">2.1 – 3</option>
          <option value="3.1- 4">3.1- 4</option>
          <option value="4.1 – 5">4.1 – 5</option>
          <option value="> 5">> 5</option>
        </select>
      </div>
      <div class="form-group">
        <label class="label" for="type">type</label>
        <div>
          <label><input type="radio" name="type Calorique" value="homolat">homolat</label>
          <label><input type="radio" name="type Calorique" value="controlat">controlat</label>
        </div>
      </div>
      <div class="form-group">
        <label class="label" for="HST">HST</label>
        <div>
          <label><input type="radio" name="HST" value="0">0</label>
          <label><input type="radio" name="HST" value="majoration">majoration</label>
          <label><input type="radio" name="HST" value="inhibition">inhibition</label>
          <label><input type="radio" name="HST" value="inversion">inversion</label>
          <label><input type="radio" name="HST" value="perversion">perversion</label>
        </div>
      </div>
      <div class="form-group">
        <label class="label" for="vibrateur">vibrateur</label>
        <div>
          <label><input type="radio" name="vibrateur" value="0">0</label>
          <label><input type="radio" name="vibrateur" value="majoration">majoration</label>
          <label><input type="radio" name="vibrateur" value="inhibition">inhibition</label>
          <label><input type="radio" name="vibrateur" value="inversion">inversion</label>
          <label><input type="radio" name="vibrateur" value="perversion">perversion</label>
        </div>
      </div>
      <div class="form-group">
      <h3 class="label">Test d’hyperventilation :</h3>
      <label class="label" for="VHIT">VHIT</label>
      <div>
        <label><input type="radio" name="VHIT" value="Normale">Normale</label>
        <label><input type="radio" name="VHIT" value="Pathologique">Pathologique</label>
      </div>
      <div style="margin-top:20px;margin-bottom: 20px;" class="table-container">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Ant_DT</th>
            <th>Lat_Dt</th>
            <th>Post_DT</th>
            <th>Ant_Gche</th>
            <th>Lat_Gche</th>
            <th>Post_Gche</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gain</td>
            <td><input type="number" step="0.01" name="gain_ant_dt"></td>
            <td><input type="number" step="0.01" name="gain_lat_dt"></td>
            <td><input type="number" step="0.01" name="gain_post_dt"></td>
            <td><input type="number" step="0.01" name="gain_ant_gche"></td>
            <td><input type="number" step="0.01" name="gain_lat_gche"></td>
            <td><input type="number" step="0.01" name="gain_post_gche"></td>
          </tr>
          <tr>
            <td>Overt saccades</td>
            <td><input type="number" step="0.01" name="overt_ant_dt"></td>
            <td><input type="number" step="0.01" name="overt_lat_dt"></td>
            <td><input type="number" step="0.01" name="overt_post_dt"></td>
            <td><input type="number" step="0.01" name="overt_ant_gche"></td>
            <td><input type="number" step="0.01" name="overt_lat_gche"></td>
            <td><input type="number" step="0.01" name="overt_post_gche"></td>
          </tr>
          <tr>
            <td>Covert saccades</td>
            <td><input type="number" step="0.01" name="covert_ant_dt"></td>
            <td><input type="number" step="0.01" name="covert_lat_dt"></td>
            <td><input type="number" step="0.01" name="covert_post_dt"></td>
            <td><input type="number" step="0.01" name="covert_ant_gche"></td>
            <td><input type="number" step="0.01" name="covert_lat_gche"></td>
            <td><input type="number" step="0.01" name="covert_post_gche"></td>
          </tr>
          <tr>
            <td>Latences ms</td>
            <td><input type="number" step="0.01" name="latence_ant_dt"></td>
            <td><input type="number" step="0.01" name="latence_lat_dt"></td>
            <td><input type="number" step="0.01" name="latence_post_dt"></td>
            <td><input type="number" step="0.01" name="latence_ant_gche"></td>
            <td><input type="number" step="0.01" name="latence_lat_gche"></td>
            <td><input type="number" step="0.01" name="latence_post_gche"></td>
          </tr>
          <tr>
            <td>Ecart type</td>
            <td><input type="number" step="0.01" name="ecart_ant_dt"></td>
            <td><input type="number" step="0.01" name="ecart_lat_dt"></td>
            <td><input type="number" step="0.01" name="ecart_post_dt"></td>
            <td><input type="number" step="0.01" name="ecart_ant_gche"></td>
            <td><input type="number" step="0.01" name="ecart_lat_gche"></td>
            <td><input type="number" step="0.01" name="ecart_post_gche"></td>
          </tr>
        </tbody>
      </table>
      </div>
      <label class="label" >Audiométrie tonale</label>
      <div>
        <label ><input type="radio" name="Audiométrie tonale" value="non faite">non faite</label>
        <label ><input type="radio" name="Audiométrie tonale" value="nulle">nulle</label>
        <label ><input type="radio" class="other_check" data-target="Audiométrie_tonale" id="autre_Audiométrie_tonale" name="Audiométrie tonale" value="surdité">surdité</label>
      </div>
      <div class="form-group hidden question-group" id="Audiométrie_tonale">
        <label class="label">Transmission : Rinne</label>
        <input type="number" step="0.01" placeholder="Rinne" oninput="updateMainChoice(this.value,'autre_Audiométrie_tonale')">
        <label class="label">Perception  : PAM</label>
        <input type="number" step="0.01" placeholder="PAM" oninput="updateMainChoice(this.value,'autre_Audiométrie_tonale')">
        <label class="label" >Courbe</label>
        <div>
          <label ><input type="radio" name="Courbe" value="ascendante">ascendante</label>
          <label ><input type="radio" name="Courbe" value="en plateau">en plateau</label>
          <label ><input type="radio" name="Courbe" value="descendante">descendante</label>
        </div>
      </div>
      <label class="label" >BER</label>
      <div>
        <label ><input type="radio" name="BER" value="non fait">non fait</label>
        <label ><input type="radio" class="other_check" data-target="BER" id="autre_BER" name="BER" value="seuil (dB)">seuil (dB)</label>
      </div>
      <div class="form-group hidden question-group" id="BER">
        <label class="label">seuil (dB)</label>
        <input type="number" step="0.01" placeholder="..(dB)" oninput="updateMainChoice(this.value,'autre_BER')">
      </div>

      <label class="label" >IRM cérébrale</label>
      <div>
        <label ><input type="radio" name="IRM cérébrale" value="nulle">nulle</label>
        <label ><input type="radio" class="other_check" data-target="AVC_ischémique" id="autre_AVC_ischémique" name="IRM cérébrale" value="AVC ischémique">AVC ischémique</label>
        <label ><input type="radio" class="other_check" data-target="AVC_hémorragique" id="autre_AVC_hémorragique" name="IRM cérébrale" value="AVC hémorragique">AVC hémorragique</label>
        <label ><input type="radio" class="other_check" data-target="Tumorale" id="autre_Tumorale" name="IRM cérébrale" value="Tumorale">Tumorale</label>
        <label ><input type="radio" class="other_check" data-target="Pathologie_inflammatoire" id="autre_Pathologie_inflammatoire" name="IRM cérébrale" value="Pathologie inflammatoire">Pathologie inflammatoire</label>
        <label ><input type="radio" class="other_check" data-target="Malformation" id="autre_Malformation" name="IRM cérébrale" value="Malformation">Malformation</label>
        <label ><input type="radio" class="other_check" data-target="autre" id="autre_autre" name="IRM cérébrale" value="autre">autre</label>
      </div>
      <div class="form-group hidden question-group" id="AVC_ischémique">
        <label class="label">AVC ischémique</label>
        <input type="number" step="0.01" placeholder="Territoire" oninput="updateMainChoice(this.value,'autre_AVC_ischémique')">
      </div>
      <div class="form-group hidden question-group" id="AVC_hémorragique">
        <label class="label">AVC hémorragique</label>
        <input type="number" step="0.01" placeholder="Territoire" oninput="updateMainChoice(this.value,'autre_AVC_hémorragique')">
      </div>
      <div class="form-group hidden question-group" id="Tumorale">
        <label class="label" for="Tumorale">Tumorale</label>
        <label ><input type="radio" name="Tumorale" value="oui">oui</label>
        <label ><input type="radio" name="Tumorale" value="non">non</label>
        <label class="label" for="sièrge">sièrge :</label>
        <input type="text" id="sièrge" name="sièrge">
        <label class="label" for="taille">taille (mm)</label>
        <input type="number" step="0.01" id="taille" placeholder="..(mm)" name="taille (mm)">
      </div>
      <div class="form-group hidden question-group" id="Pathologie_inflammatoire">
        <label class="label">Pathologie inflammatoire</label>
        <input type="number" step="0.01" placeholder="Territoire" oninput="updateMainChoice(this.value,'autre_Pathologie_inflammatoire')">
      </div>
      <div class="form-group hidden question-group" id="Malformation">
        <label class="label">Malformation</label>
        <input type="text" oninput="updateMainChoice(this.value,'autre_Malformation')">
      </div>
      <div class="form-group hidden question-group" id="autre">
        <label class="label">autre</label>
        <input type="text" oninput="updateMainChoice(this.value,'autre_autre')">
      </div>

      <label class="label" >IRM hydrops</label>
      <div>
        <label ><input type="radio" name="IRM hydrops" value="nulle">nulle</label>
        <label ><input type="radio" class="other_check" data-target="Pathologique" id="autre_Pathologique" name="IRM hydrops" value="Pathologique">Pathologique</label>
      </div>
      <div class="form-group hidden question-group" id="Pathologique">
        <label class="label" for="Pathologique">Pathologique</label>
        <label ><input type="radio" name="Pathologique" value="saccule">saccule</label>
        <label ><input type="radio" name="Pathologique" value="Utricule">Utricule</label>
        <label ><input type="radio" name="Pathologique" value="canaux">canaux</label>
        <label ><input type="radio" name="Pathologique" value="cochlée">cochlée</label>
      </div>
     
      <label class="label" >Manœuvre libératoire</label>
      <div>
        <label ><input type="radio" name="Manœuvre libératoire" value="Semont">Semont</label>
        <label ><input type="radio" name="Manœuvre libératoire" value="Epley">Epley</label>
        <label ><input type="radio" name="Manœuvre libératoire" value="Gufoni">Gufoni</label>
        <label ><input type="radio" name="Manœuvre libératoire" value="Barbecue">Barbecue</label>
        <label ><input type="radio" class="other_check" data-target="maneuvre" id="autre_maneuvre" name="Manœuvre libératoire" value="Autres">Autres</label>
      </div>
      <div class="form-group hidden question-group" id="maneuvre">
        <label class="label">Autres</label>
        <input type="text" oninput="updateMainChoice(this.value,'autre_maneuvre')">
      </div>
      <div class="form-group">
        <label class="label">Evolution</label>
        <input type="text" name="Evolution">
      </div>



      <button type="submit" style="margin-top: 20px;">Submit</button>
    </form>
  </div>
  <script src="app.js"></script>

</body>
</html>
