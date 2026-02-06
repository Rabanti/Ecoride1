<?php
include 'config.php';
include 'header.php';
$id = $_GET['id'];
$req = $pdo->prepare("SELECT * FROM covoiturages WHERE id=?");
$req->execute([$id]);
$c = $req->fetch();
?>
<h2>Détails du covoiturage</h2>
<p>Chauffeur : <?= $c['chauffeur'] ?></p>
<p>Date : <?= $c['date'] ?></p>
<p>Météo : <?= $c['meteo'] ?></p>
<?php include 'footer.php'; ?>