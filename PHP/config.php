<?php
$host = 'localhost';
$db = 'ecoride';
$user = 'root';
$pass = '';
$options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
try {
$pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass, $options);
} catch (Exception $e) {
die('Erreur : ' . $e->getMessage());
}
?>