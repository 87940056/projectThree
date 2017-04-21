<?php
function c($var){
    if(is_bool($var)){
        var_dump($var);
    }else{
        echo "<pre>";
        print_r($var);
        echo "</pre>";
    }
}