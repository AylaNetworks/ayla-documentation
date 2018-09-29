<?php

function generateRandomString($length = 10) {
  $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  $charactersLength = strlen($characters);
  $randomString = '';
  for ($i = 0; $i < $length; $i++) {
      $randomString .= $characters[rand(0, $charactersLength - 1)];
  }
  return $randomString;
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dss";

$datapointId = generateRandomString();
$userId = '40e45b84-690c-11e8-acf3-12f911dcfe40';
$creationDate = '2018-09-29T11:03:35Z';
$dsn = 'AC000W000340779';
$propertyName = 'log';
$propertyType = 'string';
$propertyValue = 'Lorem ipsum dolor sit amet';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO datapoint (datapointId, userId, creationDate, dsn, propertyName, propertyType, propertyValue) VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param('sssssss', $datapointId, $userId, $creationDate, $dsn, $propertyName, $propertyType, $propertyValue);

if ($stmt->execute() === TRUE) {
  echo 'Success';
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$stmt->close();
$conn->close();
?>
