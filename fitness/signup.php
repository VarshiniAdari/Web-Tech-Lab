<?php
include 'db_config.php';

$name = $_POST['name'];
$age = $_POST['age'];
$goal = $_POST['goal'];

$sql = "INSERT INTO trial_clients (name, age, goal) VALUES ('$name', '$age', '$goal')";
if ($conn->query($sql) === TRUE) {
    echo "Thank you for signing up for a free trial!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
