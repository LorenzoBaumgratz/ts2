import { getPerson } from "../controllers/personController";
import { Router } from "express";

const person=Router()

person.get("/person", getPerson)

export default person