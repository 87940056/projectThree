<?php
namespace App\model;

use Core\dbpdo;

class MusicModel extends dbpdo {
    public function __construct()
    {
        parent::__construct();
    }
    public function getAllAlbum(){
       return  $this->fetchall('select * from album');
    }
    public function deleteAlbumId($id){
        $where = Array(
            'id'=>$id
        );
        return $this->delete('album',$where);
    }
    public function addAlbum($data){
        return $this->insert("album",$data);
    }
}