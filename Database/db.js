import mongoose from "mongoose";

const DatabaseConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Database: ${conn.connection.name}`);
    } catch (e) {
        console.log('Database connection error:', e);
        process.exit(1);
    }
}; 

export default DatabaseConnection;
