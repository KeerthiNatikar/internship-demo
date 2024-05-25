<?php
//printing in php
echo "hello </br>";



//declaring a variable
$a=30;
echo "$a </br>";


//concatenation
echo "hi </br>".$a;

//indexed array
$fruits=array("apple","mango","pineapple");
print_r($fruits);

//accessing array value
echo "$fruits[0] </br>";
//indexed array print using var
var_dump($fruits);
print_r($fruits);

//associative array
$details=array("name"=>"kirthi","age"=>21,"height"=>175);
echo $details["age"];
//for each loop
foreach($details as $detail)
{
    echo $detail."</br>";
}

//if condition
if("age"<=18){
   echo "not allowed to drive";
}else if("age">=18){
    echo "allowed to drive";
}














































?>