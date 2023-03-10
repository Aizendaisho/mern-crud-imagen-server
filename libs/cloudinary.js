const { v2 } = require("cloudinary");

v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const imageUploader = async (filePath) => {
  return await v2.uploader.upload(filePath, {
    folder: "posts",
  });
};

const deleteImage = async (id) => {
  return await v2.uploader.destroy(id);
};

module.exports = { imageUploader, deleteImage };
