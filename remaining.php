<?php 
// loop
// for($i=0 ; $i<5 ; $i++ ){
//     echo $i . "<br>";
// }

$m=0;
while($m<10){
    echo $m . "<br>";
    $m++;
}

$n=0;
do{
    echo $n . "<br>";
    $n++;
}while($n<6);



$fruits = ['apple', 'banana','pear','strawberry', 'orange'];
echo var_dump($fruits);
echo "<br>";
foreach($fruits as $fruit){
    echo $fruit ."<br>";
}



function add($a , $b){
    echo $a+$b ;
}
add(6,7);

?>