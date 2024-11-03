import mongoose from "mongoose";

const conn = () => {
 
  try {
    mongoose.connect(process.env.DB);
    console.log("Connected to database successfully.");
    
  } catch (error) {
    console.log("Failed to connect to the database!");
    
  }
};

export default conn;
