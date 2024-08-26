<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\User;

class userController extends Controller
{
    public function index()
    {
        return response()->json(User::latest()->get());

    }

    public function store(Request $request){
            User::create([
                'name'=> $request->name,
                'email'=> $request->email,
                'password'=> bcrypt($request->password),
            ]);

            return response()->json('successfully create');
    }

    

    public function edit($Id)
    {
        return response()->json(User::whereId($Id)->first());
    }

    public function update(Request $request,$id)
    {
          User::where('id',$id)->update([
            'name'=> $request->name,
            'email'=> $request->email
          ]);

        //   $user = User::whereId($id)->first();

        //   $user->update([
        //     'name'=> $request->name,
        //     'email'=> $request->email
        //   ]);

          return response()->json('success');

    }
    public function show(){

    }

    public function destroy($id)
    {
        User::whereId($id)->first()->delete();
        
        return response()->json('success');
    }

    
};
