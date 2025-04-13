<?php
include 'db_config.php';

$name = $_POST['name'];
$email = $_POST['email'];

$sql = "INSERT INTO subscribers (name, email) VALUES ('$name', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "Subscription successful! Thank you for joining.";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
