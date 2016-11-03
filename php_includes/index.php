<?php
    $a = 1;
    $b = 5;
    include('includes/data.php');
    $result = $a * $b;
    print("<br>Result is $result");
    $c = 2;
    include('includes/data2.php'); //     $c = $c * 2; $c = 4
    include_once('includes/data2.php');  //   disregards this because it's already been defined in the include expression above
    include('includes/data2.php'); // $c = $c * 2; $c = 8
    $result2 = $c;
    print("<br>Result 2 = $result2");
?>