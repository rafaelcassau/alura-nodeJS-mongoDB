import mongoose from "mongoose";

const db_user = process.env.DATABASE_USER || '';
const db_password = process.env.DATABASE_PASSWORD || '';
const db_name = process.env.DATABASE_NAME || '';

const uri = `mongodb+srv://${db_user}:${db_password}@alura.z52q4yk.mongodb.net/${db_name}`;

mongoose.connect(uri);

let db = mongoose.connection;

export default db;