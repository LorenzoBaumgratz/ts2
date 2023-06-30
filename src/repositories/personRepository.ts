import { db } from "../db/db";
import { Person } from "../protocols/personProtocol";

export async function getPersonRep(id:Number){
    const result=await db.query<Person>(`select * from people where id=$1;`,[id]);
    return result.rows[0]
}
export async function getQnt(){
    const result= await db.query(`select count(*) from people;`);
    return result.rows[0].count
}