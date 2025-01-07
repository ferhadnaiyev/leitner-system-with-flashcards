import sql from 'better-sqlite3';
const db = sql('cards.db');


export async function getCards() {

    return db.prepare('SELECT * FROM cards').all();
}


export async function getByBoxID(boxID) {


    return db.prepare('SELECT * FROM cards WHERE boxID=?').all(boxID);
}







