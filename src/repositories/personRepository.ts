import { db } from "../db/db";
import { Person } from "../protocols/personProtocol";

export async function getPersonRep(){
    return db.query<Person>(`select * from people;`);
}