<?php
include 'config.php';
$chauffeur = $_POST['chauffeur'];
$date = $_POST['date'];
$meteo = $_POST['meteo'];
$req = $pdo->prepare("INSERT INTO covoiturages(chauffeur,date,meteo) VALUES (?,?,?)");
$req->execute([$chauffeur,$date,$meteo]);
header('Location: covoiturages.php');
?>