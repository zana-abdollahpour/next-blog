import { MongoClient } from "mongodb";

import emailChecker from "../../lib/email-checker";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !emailChecker(email) ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({
        message: "Invalid Input",
      });
      return;
    }

    // Store in a DB
    const newMessage = {
      email,
      name,
      message,
    };

    try {
      const client = await MongoClient.connect(
        process.env.MONGODB_CONNECTION_STRING.replace(
          "<USERNAME>:<PASSWORD>",
          process.env.MONGODB_USERNAME_PASSWORD
        )
      );
    } catch (error) {
      res.status(500).json({
        message: "Could not connect to database!",
      });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({
        message: "Storing message failed!",
      });
      return;
    }

    client.close();

    res.status(201).json({
      message: "Successfully stored message!",
    });
  }
}

export default handler;
