<?php
header("Access-Control-Allow-Origin: *");
$link = mysqli_connect(
    "210.70.80.21",
    "s107021006",
    "ab9ahNey"
    "s107021006"
);

if(!$link){
    echo"Error:unble to connect to MySQL." .PHP_EOL;
    echo"Debugging errno:" . mysqli_connect_errno() . PHP_EOL;
    echo"Debugging errno:" . mysqli_connect_errno() . PHP_EOL;
    exit;
}

$link -> set_charset("utf8");
