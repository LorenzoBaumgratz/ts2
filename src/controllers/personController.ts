import { Request, Response } from "express"
import { getPersonRep } from "../repositories/personRepository"

export async function getPerson(req:Request,res:Response){
    try {
        const result= await getPersonRep
        
        return res.status(200).send(result)

    } catch (err) {
        res.status(500).send(err.message)
    }
    
}