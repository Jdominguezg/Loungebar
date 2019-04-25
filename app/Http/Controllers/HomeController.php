<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\validateSignin;
use Validator;


class HomeController extends Controller
{
	public function validateSignin(Request $request){
		$nickname = '';
		$userid = '';
		$password = '';
		$email = '';

		$nickname = $request->input('signin_nickname');
		$userid = $request->input('signin_username');
		$password = md5($request->input('signin_password'));
		$email = $request->input('signin_email');

		$insert = DB::table('USERS')->insert(
			array('ID' => $userid, "NICKNAME" => $nickname, "PASSWORD" => $password, "EMAIL" => $email)
		);

		// $conn = DB::connection("mysql");
		// $sql = "INSERT INTO USERS (ID, NICKNAME, PASSWORD, EMAIL) VALUES (?,?,?,?)";

		// $conn->insert($sql, array($userid, $nickname, $password, $email));

		return "Usuario ".$nickname." Registrado con exito.";

		// return view('index', ["log_user" => $this->log_user, "log_password" => $this->log_password, "sign_nickname" => $this->sign_nickname, "sign_userid" => $this->sign_userid, "sign_password" => $this->sign_password, "sign_email" => $this->sign_email]); 

	}

	public function validateLogin(Request $request){

		$log_user = '';
		$log_password = '';

		$log_user = $request->input('log_user');
		$log_password = md5($request->input('log_password'));


		$password = DB::table('users')->select('PASSWORD')->where('ID', $log_user)->orWhere('EMAIL', $log_user)->get()[0]->PASSWORD;
		if($password == $log_password){
			return redirect('addrecipe');
		}else{
			return 'La Contraseña es incorrecta o el usuario no existe';
		}
		


	}
}
