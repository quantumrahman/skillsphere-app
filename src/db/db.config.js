import { MongoClient } from 'mongodb';
import 'dotenv/config';

const dbUrl = process.env.DB_URI.replace('<db_password>', process.env.DB_PASS);

const client = new MongoClient(dbUrl);

const db = client.db('skillsphere-auth');

export { client, db };
