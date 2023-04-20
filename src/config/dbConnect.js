import mongoose from "mongoose"
import * as dotenv from "dotenv"

dotenv.config();

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ac-jganhwy-shard-00-00.nno3yxm.mongodb.net:27017,ac-jganhwy-shard-00-01.nno3yxm.mongodb.net:27017,ac-jganhwy-shard-00-02.nno3yxm.mongodb.net:27017/?ssl=true&replicaSet=atlas-siix6z-shard-0&authSource=admin&retryWrites=true&w=majority`);

const db = mongoose.connection;

export default db;