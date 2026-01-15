import { betterAuth } from "better-auth";
import {MongoClient} from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db();
export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client,
    }),
    socialProviders: {
        spotify: {
            clientId: process.env.SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
            scope : ["user-top-read"]
        },
    }
});