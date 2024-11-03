import e from "express";
import dotenv from "dotenv";
import cors from "cors";
import connection from "./db.js"
import userRoutes from "./routes/userRoutes.js";
const PORT = process.env.PORT || 5000
const app = e();
dotenv.config();

// middleware
app.use(e.json());
app.use(cors());

//routes
app.use("/api/auth", userRoutes);

app.listen(PORT , ()=> {
    try {
        connection();
        console.log(`Listening on port ${PORT}`);    
    } catch (error) {
        console.log("Failed to connect with the server!");
        
        
    }
    
    
})



