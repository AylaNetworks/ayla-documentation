<?php
$servername = "localhost";
$username = "root";
$password = "dfu74ebeofyC";
$dbname = "ayla_documentation";

// Create connection

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO feedback (firstName, lastName, email, company, page, description)
VALUES ('Sarah', 'Smiles', 'ss@acme.com', 'Acme', '/devices/ayla-linux-agent/guide/introduction/', 'This is a description.')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
