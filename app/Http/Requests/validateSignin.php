<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class validateSignin extends FormRequest
{
   
    protected $redirect = '/';

    public function authorize(){
        return true;
    }

    
    public function rules(){
        return [
            "sign_nickname" => "required|max:50",
            "sign_userid" => "required|max:25",
            "sign_password" => "required",
            "sing_email" => "required|max:100"
        ];
    }


    public function messages(){
        return [
            "sign_nickname.required" => "El Nickname es obligatorio.",
            "Sign_nickname.max" => "El máximo de caracteres permitido son 50 caracteres.",
            "sign_userid.required" => "El Usuario es obligatorio.",
            "sign_userid.max" => "El máximo de caracteres permitido son 25 caracteres.",
            "sign_password.required" => "La Contraseña es obligatoria.",
            "sing_email.required" => "El Correo Electrónico es obligatorio.",
            "sing_email.max" => "El máximo de caracteres permitidos son 100 caracteres." 
        ];
    }


    public function response(array $errors){
        return redirect($this->redirect)
                    ->withErrors($errors, 'signin')
                    ->withInput();
    }
}
