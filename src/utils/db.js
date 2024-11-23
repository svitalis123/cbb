// utils/db.ts
// Helper function to create initial admin user
import { hash } from "bcryptjs";
import clientPromise from "@/lib/mongodb";

export async function createInitialAdmin() {
  const client = await clientPromise;
  const db = client.db("blogDatabase");
  const adminCollection = db.collection("admins");

  // Check if admin already exists
  const adminExists = await adminCollection.findOne({ 
    email: process.env.INITIAL_ADMIN_EMAIL 
  });

  if (!adminExists) {
    const hashedPassword = await hash(
      process.env.INITIAL_ADMIN_PASSWORD || 'admin123',
      12
    );

    await adminCollection.insertOne({
      email: process.env.INITIAL_ADMIN_EMAIL || 'admin@example.com',
      password: hashedPassword,
      name: 'Admin',
      createdAt: new Date(),
    });
  }
}