import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from '../utils/ApiError.js'
import { User } from "../models/user.model.js";
import {ApiResponse} from '../utils/ApiResponse.js'
import e from "express";

const registerUser = asyncHandler( async(req, res) => {
    
    const {username, email, password, role} = req.body;
    if(!username || !email || !password) {
        throw new ApiError(400, "All fields are compulsory !")
    }
    
    
    let exitedUser = await User.findOne(
        {
            $or :[{username}, {email}]
    }
    );
    if(exitedUser) {
        throw new ApiError(402, "user with username and email exited");
    }
    let user = await User.create({
        username,
        email,
        password,
        role
    })

    const createdUser = await User.findById(user._id).select("-password");

    if(!createdUser) {
        throw new ApiError(400, "Something wrong when registered the user.!")
    }
    return res.status(200).json(new ApiResponse(200, createdUser, "user registered successfully"))
})

export {
    registerUser
}