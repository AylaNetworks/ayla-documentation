<?php
$servername = "localhost";
$username = "root";
$password = "dfu74ebeofyC";
$dbname = "ayla_documentation";

$firstname = $_POST['first-name'];
$lastname = $_POST['last-name'];
$email = $_POST['email'];
$company = $_POST['company'];
$page = $_POST['page'];
$description = $_POST['description'];

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO feedback (firstName, lastName, email, company, page, description) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param('ssssss', $firstname, $lastname, $email, $company, $page, $description);

if ($stmt->execute() === TRUE) {
  echo readfile("thank-you/index.html");
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$stmt->close();
$conn->close();
?>
