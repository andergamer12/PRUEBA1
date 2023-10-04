<!DOCTYPE html>
<html>
<head>
    <title>Página Principal</title>
</head>
<body>
    <h1>Bienvenido</h1>
    <?php
        session_start();
        if (isset($_SESSION['nombre'])) {
            echo "<p>Hola, " . $_SESSION['nombre'] . ".</p>";
            echo "<p><a href='index.php'>Cerrar Sesión</a></p>";
        } else {
            header("Location: index.php");
        }
    ?>
</body>
</html>
