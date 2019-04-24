<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Validator;


class HomeController extends Controller
{

	private $sign_nickname = '';
	private $sign_userid = '';
	private $sign_password = '';
	private $sign_email = '';
	private $log_user = '';
	private $log_password = '';

	public function index(Request $request){

		if($request->isMethod("post") && $request->has(['signin_nickname','signin_username','signin_password','signin_email'])){

			$this->validateSignin($request);

		}

		else if($request->isMethod("get") && $request->has(['log_user','log_password'])){

			$this->validateLogin($request);

		}
		




		return view('index', ["log_user" => $this->log_user, "log_password" => $this->log_password, "sign_nickname" => $this->sign_nickname, "sign_userid" => $this->sign_userid, "sign_password" => $this->sign_password, "sign_email" => $this->sign_email]);
	}
	
	
	private function validateSignin($request){


		$this->sign_nickname = $request->input('signin_nickname');
		$this->sign_userid = $request->input('signin_username');
		$this->sign_password = $request->input('signin_password');
		$this->sign_email = $request->input('signin_email');

	}

	private function validateLogin($request){

		$this->log_user = $request->input('log_user');
		$this->log_password = $request->input('log_password');
	}
	

}
