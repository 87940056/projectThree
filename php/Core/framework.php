<?php
namespace  Core;

class Framework
{
    public $arr;
    public function session($k,$v){
        session_start();
        $_SESSION[$k]=$v;
    }
    public function redirec($url){
        header("Location:".$url);
    }
    public function assign($k,$v){
        $this->arr[$k]=$v;
    }
    public function json($v){
        header("Content-Type:text/json");
        echo json_encode($v);
    }
    public function display($file){
        $file = VIEW.$file;
        if(file_exists($file)){
            if($this->arr){
                extract($this->arr);
            }
            include $file;
        }else{
            include VIEW."404.html";
        }
    }
    public static function start(){
        $tmp = explode("/",explode("?",$_SERVER['REQUEST_URI'])[0]);
        if(empty($tmp[1])){
            $c ='indexcontorller';
        }else{
            $c = $tmp[1]."contorller";
        }
        $m = isset($tmp[2])?$tmp[2]:'index';
        $class_file = CONTORLLER.$c.".php";
        if(file_exists($class_file)){
            require $class_file;
            $file = '\\App\\contorller\\'.$c;
            if(class_exists($file)&&method_exists($file,$m)){
                $page = new $file();
                $page->$m();
            }else{
                include VIEW."404.html";
            }
        }else{
            include VIEW."404.html";
        }
    }
}