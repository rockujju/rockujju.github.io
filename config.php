<?php
$connection = mysqli_connect('rds-mysql-rockujju.ckfl83e5z6wb.us-west-1.rds.amazonaws.com:3306', 'mysql_rockujju', 'mysql_ujju7630505!');
if (!$connection){
    die("Database Connection Failed" . mysqli_error($connection));
}
$select_db = mysqli_select_db($connection, 'Test');
if (!$select_db){
    die("Database Selection Failed" . mysqli_error($connection));
}