import { Router } from "express";
import { getPaisesByNamePart } from "../controllers/c_paises.js";

const rPaises = Router();

//[GET]
rPaises.get("/paises", getPaisesByNamePart);


export default rPaises;