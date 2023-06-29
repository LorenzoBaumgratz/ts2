import { db } from "../db/db";
import { Person } from "../protocols/personProtocol";

export async function getPersonRep(id){
    return db.query<Person>(`select * from people where id=$1;`,[id]);
}
export async function getQnt(){
    return db.query(`select count(*) from people;`);
}