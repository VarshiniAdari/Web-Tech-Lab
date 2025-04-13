<?php
include 'db_config.php';

$name = $_POST['name'];
$email = $_POST['email'];
$type = $_POST['event_type'];

$sql = "INSERT INTO registrations (name, email, event_type) VALUES ('$name', '$email', '$type')";
if ($conn->query($sql) === TRUE) {
    header("Location: thanks.php");
    exit();
} else {
    echo "Error: " . $conn->error;
}
$conn->close();
?>
