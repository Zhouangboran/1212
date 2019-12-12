<?php
include("db_conn.php");
data_default_timezone_set('Asis/Taipei');
header("Content-Type:text/html; charset=utf-8");
header("Access-Control-Allow-Origin: *");
if(isset($_POST)){
    $userID = $_POST['userName'];
    $userPassword = sha1($_POST['userPassword']);

    $sql = "SELECT * FROM `user` WHERE `email` =' $userID' AND  `passwd` = '$userPassword'";
    $result = mysqli_query($link, $sql);
    $row = mysqli_fetch_assoc($result);
    $val = $result->num_rows;
    if( $val==1){
        $outData = array("status" => "success");    
    }else{
        $outData = array("status"=>"noAccount");
    }
}else{
    $outData = array("status"=>"fail");
}
echo json_encode($outData, JSON_UNESCAPED_UNICODE);