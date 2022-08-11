

import { response } from "express";
import user from "../schema/user-schema.js";


export const addUser = async (request, response) => {
    const usr =  request.body;
    const newuser = new user(usr);

    try{
        await newuser.save();
        response.status(201).json(newuser);
    }catch(err){
        response.status(409).json({message: err.message});
    }
}


export const getUsers = async (request, response) => {
    try{
        const users = await user.find({});        
        response.status(200).json(users);
    }catch(err){
        response.status(404).json({message: err.message});
    }
}


export const getUser = async (request, response) => {
    try{
        const user1 = await user.find({ _id: request.params.id });        
        response.status(200).json(user1);
    }catch(err){
        response.status(404).json({message: err.message});
    }
}

export const editUser = async (request, response) => {
    let usr =  request.body;

    const edituser = new user(usr);
    try{
        await user.updateOne({ _id: request.params.id }, edituser);
        response.status(201).json(edituser);
    }catch(err){
        response.status(409).json({message: err.message});
    }
}

export const deleteUser = async (request, response) => {
    try{
        await user.deleteOne({ _id: request.params.id });        
        response.status(201).json({message: 'user deleted'});
    }catch(err){
        response.status(404).json({message: err.message});
    }
}