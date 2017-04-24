<?php

namespace App\model;

use Core\dbPdo;

class musicModel extends dbPdo
{
    public function __construct(){
        parent::__construct();
    }
    public function getAllAlbum()
    {
        return $this->fetchAll('select * from album');
    }
    public function deleteAlbumById($id)
    {
        $where=Array(
            'id'=>$id
        );
        return $this->delete('album',$where);
    }
    public function addAlbum($data)
    {
        return $this->insert('album',$data);
    }
}
