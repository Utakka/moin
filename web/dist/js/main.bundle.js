"use strict";function initMainScripts(){}requirejs.config({paths:{jqueryBundle:"/_vendor/jquery-foundation.bundle",swiper:"/_vendor/swiper/dist/js/swiper.min"}}),requirejs(["jqueryBundle"],function(i){$(function(){$(document).foundation(),initMainScripts()})});