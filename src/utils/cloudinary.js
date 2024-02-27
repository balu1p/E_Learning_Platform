import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
})


const uploadClodinary = async(localFilePath) => {
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath,
      {resource_type: "auto"})
      console.log(response);
      fs.unlinkSync(localFilePath);
      return response
    } catch (error) {
        fs.unlinkSync(localFilePath);
        console.log("File not uploaded in cloudinary", error)
    }
}

export {uploadClodinary}