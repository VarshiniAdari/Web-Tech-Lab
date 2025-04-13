<?php
include("db_config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $product = $_POST['product'];

    $query = "INSERT INTO purchases (product_name) VALUES ('$product')";
    if (mysqli_query($conn, $query)) {
        echo "<h2>Thank you for choosing to buy $product!</h2><a href='index.html'>Back</a>";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>
