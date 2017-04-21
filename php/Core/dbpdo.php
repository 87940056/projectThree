<?php
namespace Core;
use PDO;
use PDOException;

class dbpdo
{
    public $pdo;
    public function __construct()
    {
        try{
            $db = array(
                'dsn'=>'mysql:host=localhost;dbname=music;charset=utf8'
            );
            $options = array(
                //默认是PDO::ERRMODE_SILENT, 0, (忽略错误模式)
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                // 默认是PDO::FETCH_BOTH, 4
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            );
            $this->pdo = new PDO($db['dsn'], 'root', '',$options);
        }catch(PDOException $e){
            die('数据库连接失败:' . $e->getMessage());
        };
    }
//    获取 ----查////////////////////////////
    public function fetchall($sql){
        $con = $this->pdo-> prepare($sql);
        try{
            $con -> execute(); //发起请求同时处理请求 回应记录到$con的身上
            return  $con->fetchAll();
        }catch(PDOException $e){
            die('数据库连接失败:'.$e->getMessage());
        }
    }
    ////////////////////////////
    public function fetch($sql){
        $con = $this->pdo-> prepare($sql);
        try{
            $con -> execute(); //发起请求同时处理请求 回应记录到$con的身上
            return  $con->fetch();
        }catch(PDOException $e){
            die('数据库连接失败:'.$e->getMessage());
        }
    }
//    插入 ----增///////////////////////////
    public function insert($table,$tide){
        $sql = "insert into $table (";
        foreach($tide as $k=>$v){
            $sql .= $k.',';
        }
        $sql = substr($sql,0,-1);
        $sql .= ") values (";
        foreach ($tide as $k=>$v){
            $sql .="?,";
        }
        $sql = substr($sql,0,-1);
        $sql.=")";
        $con = $this->pdo->prepare($sql);

        for($i=1;$i<=count($tide);$i++){
            $con->bindValue($i,array_values($tide)[$i - 1]);
        }
        try{
            return $con->execute();
        }catch(PDOException $e){
            die('执行失败:' . $e->getMessage());
        }
    }
//    删除 ----删
    public function delete($table,$where){
//        $sql = "delete from $table where ";
//        $sql .="id={$where['id']}";
//        $con = $this->pdo->prepare($sql);
//        try{
//            return $con->execute();
//        }catch(PDOException $e){
//            die("sql语句执行失败".$e->getMessage());
//        }

            $sql = "delete from {$table} where ";
            foreach ($where as $k => $v) {
                $sql .= $k . ' = ' . $v;
            }
            try {
                return $this->pdo->exec($sql);
            } catch (PDOException $e) {
                die('sql语句执行失败' . $e->getMessage());
            }
    }
//    更改
    public function update($table,$where,$data){
        $sql='update ' .$table .' set ';
        foreach($data as $k=>$v){
            $sql .= $k. '= ? ,';
        };
        $sql=substr($sql,0,-1);
        $sql.=' where ';
        foreach($where as $k=>$v){
            $sql .= $k . '=?';
        }
        $con= $this->pdo->prepare($sql);
        for($i=1;$i<=count($data);$i++){
            $con->bindValue($i,array_values($data)[$i-1]);
        }
        $con->bindValue($i,array_values($where)[0]);
        try{
            return $con->execute();
        }catch(PDOException $e){
            die('数据库连接失败:' . $e->getMessage());
        }
    }
}