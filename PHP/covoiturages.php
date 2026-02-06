<?php
include 'config.php';
include 'header.php';
$req = $pdo->query("SELECT * FROM covoiturages");
?>
<h2>Liste des covoiturages</h2>
<table>
<tr><th>ID</th><th>Chauffeur</th><th>Date</th><th>Météo</th><th>Actions</th></tr>
<?php while($c = $req->fetch()): ?>
<tr>
<td><?= $c['id'] ?></td>
<td><?= $c['chauffeur'] ?></td>
<td><?= $c['date'] ?></td>
<td><?= $c['meteo'] ?></td>
<td><a href="voir.php?id=<?= $c['id'] ?>">Voir</a></td>
</tr>
<?php endwhile; ?>
</table>
<?php include 'footer.php'; ?>