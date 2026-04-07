<?php
echo "hello  we are learning PHP";

echo "<br>";
echo "<hr>";
$firstName = "Ahmad";
$lastName = "Ghori";
$fullName =$firstName." ".$lastName;
echo "the first name of the student is $firstName  and the last name is $lastName";
echo "<br>";
echo "<br>";
$a = 56 ;
$b = 79 ;
$sum = $a+$b;
echo $sum;
echo "<br>";

$obtMarks = 190;
$totalMarks = 200;
$percentage = ($obtMarks/$totalMarks)*100;
echo "the percentage of the student is  $percentage";

echo "<br>";
$userLogin = true;
if($userLogin){
    echo "u are already login.welcome";
}
else{
    echo "u are not login";
}

$personDetail = [
    "name" => "Ali Jammal",
    "age" => 45,
    "country" => "pakistan"
];

echo "<br>";
echo "the name of the person is $personDetail[name]";
echo "<br>";
echo "the age of the person is $personDetail[age]";
echo "<br>";
?>