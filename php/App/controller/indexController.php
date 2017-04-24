<?php
namespace App\controller;

use App\model\musicModel;
use Core\frameWork;

class indexController extends frameWork
{
    function index()
    {
        $this->display('index');
    }

    function x()
    {
        $m = new musicModel();
        $this->json($m->getAllAlbum());
    }

    function y()
    {
        $id = $_GET['id'];
        $m = new musicModel();
        $this->json($m->deleteAlbumById($id));
    }

    function z()
    {
//        c($_POST);
        $m = new musicModel();
        $this->json($m->addAlbum($_POST));
    }
}