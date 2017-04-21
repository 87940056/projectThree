<?php
define("VIEW","App/views/");
define("CONTORLLER","App/contorller/");
define("MODEL","App/model/");

define("CSS_PATH","/Static/css/");
define("JS_PATH","/Static/js/");
define("IMG_PATH","/Static/imgs/");
define("FONT_PATH","/Static/font/");
define("MUSIC_PATH","/Static/music/");

require 'Core/common.php';
require 'Core/framework.php';
require 'Core/dbpdo.php';

\Core\Framework::start();