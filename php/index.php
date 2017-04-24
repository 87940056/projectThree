<?php
ini_set("display_errors", 'on');

define ('VIEW','App/views/');
define ('CONTROLLER','App/controller/');
define ('MODEL','App/model/');

define('CSS_PATH','/Static/css');
define('IMG_PATH','/Static/img');
define('JS_PATH','/Static/js');
define('FONT_PATH','/Static/font');

require 'Core/common.php';
require 'Core/frameWork.php';
require 'Core/dbPdo.php';
require 'App/model/musicModel.php';
\Core\frameWork::start();