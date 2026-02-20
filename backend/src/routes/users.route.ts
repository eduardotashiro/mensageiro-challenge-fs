import { Router } from "express";
import { testUserRoute } from "../controllers/users.controller.js";


const router = Router();


router.get("/users", testUserRoute); 

//get
//get
//post
//put
//delete
//...


export default router;