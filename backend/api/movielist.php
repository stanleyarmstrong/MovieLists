<?php
$app->get('/api/lists', function(){
    require_once('dbconnect.php');
    $query = 'select * from movielists order by id';
    $result = $mysqli -> query($query);
    while($row = $result -> fetch_assoc()) {
        $data[] = $row;
    }
    if(isset($data)){
        header('Content-Type: application/json');
        echo json_encode($data);
    }
    
});