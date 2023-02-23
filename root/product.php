<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles/product.css">
    <link rel="icon" href="images/colosmini.ico">
    <title>COLOS</title>
</head>
<body>
    
<?php
// Maak verbinding met de database
$conn = mysqli_connect("localhost", "root", "usbw", "gip");

// Haal de ID op uit de link
$productId = $_GET["id"];

// Haal de gegevens van het product op uit de database
$sql = "SELECT * FROM producten WHERE ReferentieNummer = $productId";
$result = mysqli_query($conn, $sql);

// Controleer of er een product is gevonden
if (mysqli_num_rows($result) > 0) {
    // Haal de gegevens van het product op
    $product = mysqli_fetch_assoc($result);
    
    // Toon de gegevens van het product
    echo "<h1>" . $product["Naam"] . "</h1>";
    echo "<p>Color: " . $product["Kleur"] . "</p>";
    echo "<p>Price: " . $product["Prijs"] . "</p>";
    echo "<p>Description: " . $product["Beschrijving"] . "</p>";
    
} else {
    // Geef een foutmelding als er geen product is gevonden
    echo "<h1>Error 404.<h1>";
}

// Sluit de databaseverbinding
mysqli_close($conn);
?>


</body>
</html>