<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$port = 3306;
$db_name = 'movielists';
$mysqli = new mysqli($host, $user, $pass, $db_name);
$con= mysqli_connect($mysqli);

// Check connection
if (mysqli_connect_errno($con))
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }