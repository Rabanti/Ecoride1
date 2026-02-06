<?php include 'header.php'; ?>
<h2>Ajouter un covoiturage</h2>
<form method="POST" action="traitement_ajout.php">
<label>Chauffeur :</label><input name="chauffeur" required><br>
<label>Date :</label><input type="date" name="date" required><br>
<label>Météo :</label><input name="meteo" required><br>
<button type="submit">Ajouter</button>
</form>
<?php include 'footer.php'; ?>