import mongoose from 'mongoose';

const connectDb = async() => {
    try {
        const dbInstance = await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log(`Db is connected!! Host :${dbInstance.connection.host}, databaseName :${dbInstance.connection.db.databaseName}`)
    } catch (error) {
        console.log('db not Connected', error)
    }
}

export default connectDb;