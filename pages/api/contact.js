import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if(req.method === 'POST') {
    const { email, name, message } = JSON.parse(req.body);

    if(
      !email ||
      !email.includes('@') ||
      !name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input'});
      return;
    }

    const newMessage = {
      email,
      name,
      message
    }

    let client;

    try {
      client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ejjn0.mongodb.net/my-site?retryWrites=true&w=majority`);
    } catch(error) {
      res.status(500).json({ message: 'Could not connect'});
      return
    }

    const db = client.db('my-site');

    try{
      const result = db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId;
    }catch(error) {
      client.close();
      res.status(500).json({ message: 'Storing failed'});
      return
    }

    client.close();

    res.status(200).json({ message: 'Successfully stored', messageObject: newMessage});
  }
}

export default handler;
