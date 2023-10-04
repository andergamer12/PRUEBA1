<?php
session_start();
$servername = "railway";
$username = "root";
$password = "d6vV3vYNfDPVEN4P8F1c";
$dbname = "railway";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if (isset($_POST['email']) && isset($_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM usuarios WHERE email = '$email' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $_SESSION['nombre'] = $row['nombre'];
        echo "success";
    }
}
if (isset($_POST['nombre']) && isset($_POST['dni']) && isset($_POST['email']) && isset($_POST['password'])) {
    $nombre = $_POST['nombre'];
    $dni = $_POST['dni'];
    $email = $_POST['email'];
    $password = $_POST['password'];
 
    $checkSql = "SELECT * FROM usuarios WHERE email = '$email' OR dni = '$dni'";
    $checkResult = $conn->query($checkSql);

    if ($checkResult->num_rows > 0) {
        header("Location: registrarse.php?error=Los datos ya existen en la base de datos.");
    } else {
        $sql = "INSERT INTO usuarios (nombre, dni, email, password) VALUES ('$nombre', '$dni', '$email', '$password')";

        if ($conn->query($sql) === TRUE) {
            $_SESSION['nombre'] = $nombre;
            header("Location: index.php");
            exit();
        } else {
            echo "error: " . $conn->error;
        }
    }
}


$conn->close();
