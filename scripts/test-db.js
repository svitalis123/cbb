// scripts/test-db.js
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function test() {
  const client = new MongoClient(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB successfully!');

    const db = client.db("blogDatabase");
    
    // Test database ping
    await db.command({ ping: 1 });
    console.log('✅ Database ping successful!');
    
    // Create collections
    await db.createCollection("posts");
    console.log('✅ Posts collection created/verified');
    
    // Create indexes
    await db.collection("posts").createIndexes([
      { key: { title_id: 1 }, unique: true },
      { key: { createdAt: -1 } }
    ]);
    console.log('✅ Indexes created successfully');

    const collections = await db.listCollections().toArray();
    console.log('\n📁 Available collections:');
    collections.forEach(coll => console.log(`- ${coll.name}`));

  } catch (error) {
    console.error('❌ Database connection error:', error);
    process.exit(1);
  } finally {
    await client.close();
    console.log('\n👋 Connection closed');
    process.exit(0);
  }
}

test().catch(console.error);