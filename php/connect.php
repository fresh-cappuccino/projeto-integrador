<?php

    $hostname = "localhost";
    $user = "root";
    $password = "";
    $database = "";
    
    $conn = mysqli_connect ($hostname, $user, $password, $database);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully";
    mysqli_close($conn);
    
    $stmt = $conn->prepare("SELECT password FROM Client WHERE IdClient = ?");
    $stmt->bind_param("s", $idClient);

    $result = $stmt->execute;
    if($result==$password){
        echo Usuário Valido;
    }
    else{
        echo Usuário invalido
    }
    
?>