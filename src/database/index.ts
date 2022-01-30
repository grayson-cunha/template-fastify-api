import mongoose from 'mongoose';

const connectedStateMongoose = 1;

export async function connect(): Promise<boolean> {
  const dbUrl = process.env.DB_URL as string;

  await mongoose.connect(dbUrl);

  return mongoose.connection.readyState === connectedStateMongoose;
}

export async function disconnect(): Promise<void> {
  await mongoose.disconnect();
}
