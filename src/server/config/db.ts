import { MongoClient, ServerApiVersion } from 'mongodb';
const client = new MongoClient(
  process.env.MONGO_URI || '127.0.0.1/pixel-pals',
  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  }
);

async function run() {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } catch {
    console.log("there's been an error");
  }
}

run();

const db = () => {
  return client.db('admin');
};

export { run, db };
