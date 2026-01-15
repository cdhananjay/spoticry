import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import generatePrompt from "@/lib/generatePrompt";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export default async function RoastPage(){
    let response;
    try {
        const {accessToken} = await auth.api.getAccessToken({
            body: {
                providerId: "spotify",
            },
            headers: await headers()
        });
        async function spotifyFetch(url: string) {
            return await fetch(url, {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            }).then(async (data) => await data.json());
        }
        async function getTop(url: string) {
            try {
                const top : string[] = []
                const data = await spotifyFetch(url);
                data.items.forEach( (item : { name: string }) => top.push(item.name))
                return top;
            }catch (err){
                return null;
            }
        }

        const topArtists = await getTop("https://api.spotify.com/v1/me/top/artists");
        const topTracks = await getTop("https://api.spotify.com/v1/me/top/tracks");

        const prompt = generatePrompt(topArtists, topTracks)
        response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
        });
        console.log(response.text);
    }
    catch (error: unknown) {
        console.log(error);
        if (error instanceof Error) console.log(`err: `, error.message);
    }

    return <>
        <div className="w-full min-h-screen flex flex-col justify-between">
            <Header/>
            <div className="w-full flex px-10 sm:px-20 justify-center items-center ">
                <div className="max-w-4xl w-full
                                bg-neutral-900
                                border border-neutral-800
                                rounded-2xl
                                shadow-lg shadow-black/30
                                p-6 sm:p-10
                                text-center">
                    <p className="text-xl sm:text-3xl md:text-4xl
                                  leading-relaxed
                                  text-neutral-100
                                  font-medium" >
                    {!response && "Your music taste soo bad the code refused to display it. Try again, if it still fails, I'm broke and out of API tokens."}
                    {response && response.text }
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    </>;
}
