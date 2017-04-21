<?php

namespace App\contorller;

use App\model\MusicModel;
use Core\Framework;

require MODEL . "MusicModel.php";

class indexContorller extends Framework
{
    //  // 前台首页
    public function index()
    {
        $this->display('index.html');
    }
//    sleep  延迟 沉睡多久 1
    //      获取专辑
    public function x()
    {
//        $str=Array(
//            0 =>Array(
//                'id'=>1,
//                'name'=>'aaaaa'
//            ),
//            1 =>Array(
//             'id'=>2,
//             'name'=>'aaaaa'
//            )
//        );
        $m = new MusicModel();
        $m->getAllAlbum();
        $this->json($m->getAllAlbum());
    }

    //      删除专辑
    public function y()
    {
        $m = new MusicModel();
        $this->json($m->deleteAlbumId($_GET['id']));
    }

    //      添加专辑
    public function z()
    {
        $m = new MusicModel();
        $this->json($m->addAlbum($_POST));
    }
}