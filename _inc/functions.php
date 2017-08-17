<?php
switch ( $_SERVER['SERVER_ADDR'] ) {
    case '127.0.0.1':
        $env = 'development';
        $templateURL = '/';
        break;
    default:
        $env = 'production';
        $templateURL = '/bulma/';
        break;
}
