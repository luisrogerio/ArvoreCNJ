import { Collection, Db, MongoClient } from "mongodb";

export async function connectToDb() : Promise<Db> {
    const port = process.env.MONGO_DB_PORT || 27017;
    const host = process.env.MONGO_DB_HOST || 'localhost';
    const url = `mongodb://${host}:${port}`;

    const dbName = process.env.MONGO_DB_NAME || 'local';

    let client = new MongoClient(url);
    client = await client.connect();
    return client.db(dbName);
}

export async function getCollection(name: string) : Promise<Collection<any>> {
    const db = await connectToDb();
    const collection = db.collection(name);

    return collection;
}