import { Request, Response } from "express"
import { getPersonRep, getQnt } from "../repositories/personRepository"

export async function getPerson(req:Request,res:Response){
    try {
        const qnt=await getQnt()
        const magicNumber:Number=Math.floor(Math.random()*qnt)+1
        console.log("sorte:",magicNumber)
        const result= await getPersonRep(magicNumber)
        return res.status(200).send(result)

    } catch (err) {
        res.status(500).send(err.message)
    }
    
}