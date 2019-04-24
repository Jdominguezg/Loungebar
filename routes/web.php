<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function(){
	return view('index');
});

Route::get('/addrecipe', function(){
	return view('addrecipe');
});

Route::get('/recipecard', function(){
	return view('recipecard');
});

// Peticiones GET y POST;
Route::post("/validateSignin", "HomeController@validateSignin");
Route::post("/validateLogin", "HomeController@validateLogin");