<?php
$servername = "localhost";
$username = "root";
$password = "dfu74ebeofyC";
$dbname = "ayla_documentation";

$firstname = 'mary';
$lastname = 'martin';
$email = 'mmatacmecom';
$company = 'acme';
$page = 'ppp';
$description = 'ddd';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO feedback (firstName, lastName, email, company, page, description) VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

$stmt->bind_param('ssssss', $firstname, $lastname, $email, $company, $page, $description);

$stmt->execute();

$stmt->close();

$conn->close();
?>
