import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/tasks", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(
      `MongoDB connected : ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`Error:${err}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
