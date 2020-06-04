<?php

use Illuminate\Support\Facades\Route;

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


//모든 url path를   resources/view/spa.blade.php로 되게 
Route::get('{path}', function(){
    return view('spa');
})->where('path', '.*');


/* Route::get('/', 'HomeController@index')->name('home');

//Route::get('/', 'MainController@index')->name('welcome');
/*
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home'); * /
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home'); */