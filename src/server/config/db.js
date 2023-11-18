import mongoose from 'mongoose';
export const connectdb = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI || '127.0.0.1/pixel-pals'
    );
    console.log(`Mongodb connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit();
  }
};
