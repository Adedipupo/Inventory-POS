import mongoose from 'mongoose'

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`Connected to MongoDB Successfully` );
        console.log('  ▀▄   ▄▀');
        console.log(' ▄█▀███▀█▄');
        console.log('█▀███████▀█');
        console.log('█ █▀▀▀▀▀█ █');
        console.log('   ▀▀ ▀▀');
        console.log('Hello Adventurer,a good to remind you Cristiano Ronaldo still remains the GOAT !!!!');
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB;