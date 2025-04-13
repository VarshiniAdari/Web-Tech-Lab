<?php
include 'db_config.php';

$name = $_POST['name'];
$email = $_POST['email'];
$preference = $_POST['preference'];

$sql = "INSERT INTO enrollments (name, email, preference) VALUES ('$name', '$email', '$preference')";
if ($conn->query($sql) === TRUE) {
    echo "<h2>Thank you for enrolling!</h2><a href='index.html'>Back to course</a>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
