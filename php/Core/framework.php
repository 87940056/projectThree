<?php
namespace Core;
class frameWork{
    public $arr;
    public function session($k,$v){
        session_start();
        $_SESSION[$k]=$v;
    }
    public function redirect($url){
        header('Location:/index.php'.$url);
    }
    public function assign($k,$v){
        $this->arr[$k]=$v;
    }
    public function display($mark){
        $file=VIEW.$mark.'.html';
        if (file_exists($file)) {
            if ($this->arr) {
                extract($this->arr);
            }
            include $file;
        } else {
            include VIEW . '404.html';
        }
    }
    public function json($value){
        header('content-Type:text/json');
        echo json_encode($value);
    }
    public function page($page,$num,$url,$theme_id){
        //  上一页
        $prev=($page -1 <1)?'javascript:void(0)' : ($url .'?theme_id='.$theme_id.'&page=' . ($page - 1));
        $html='<nav><ul class="pagination"><li><a href=" ' . $prev . ' "><span aria-hidden="true">&laquo;</span></a>';
        //  页数
        for($i=1;$i<=$num;$i++){
            if($i==$page){
                $html .="<li class='active'><a href='{$url}?theme_id={$theme_id}&page={$i}' style='text-align: center'>{$i}</a>";
            }else{
                $html .="<li><a href='{$url}?theme_id={$theme_id}&page={$i}' style='text-align: center'>{$i}</a>";
            }
        }
        //  下一页
        $next=($page +1 >$num)?'javascript:void(0)' : ($url .'?theme_id='.$theme_id.'&page=' .($page + 1));
        $html.='<li><a href="' . $next . ' "><span aria-hidden="true">&raquo;</span></a></ul>
        </nav>';
        return $html;
    }
    public static function start(){
        $url=$_SERVER['REQUEST_URI']!='/'?$_SERVER['REQUEST_URI']:'index.php';
        $route=explode('/',explode('?',$url)[0]);
        $c=isset($route[2])?$route[2].'Controller':"indexController";
        $m=isset($route[3])?$route[3]:'index';
        $classFile=CONTROLLER."{$c}.php";
        if(file_exists($classFile)){
            require $classFile;
            $t='\\App\\controller\\'.$c;
            if(class_exists($t)&&method_exists($t,$m)){
                $o=new $t();
                $o->$m();
            }else{
                include VIEW.'404.html';
            }
        }else{
            include VIEW.'404.html';
        }
    }
}