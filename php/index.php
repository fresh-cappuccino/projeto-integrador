<?php
try {
$hostname = "localhost";
$dbname = "EXPRESSO_API";
$username = "expressoapi";
$pw = "expressoapi";
$pdo = new PDO ("mssql:host=$hostname;dbname=$dbname","$username","$pw");
} catch (PDOException $e) {
echo "Erro de Conexão " . $e->getMessage() . "\n";
exit;
}
$query = $pdo->prepare("select Name FROM API");
$query->execute();

for($i=0; $row = $query->fetch(); $i++){
echo $i." – ".$row['Coluna']."<br/>";
}

unset($pdo);
unset($query);
?>