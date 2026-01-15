import {auth} from "@/lib/auth";
import {headers} from "next/headers";

export default async function RoastPage(){
    let topTracks;
    let topArtists;
    try {
        const {accessToken} = await auth.api.getAccessToken({
            body: {
                providerId: "spotify",
            },
            headers: await headers()
        });
        if (!accessToken) console.log("did not get access token")

        async function spotifyFetch(url: string) {
            return await fetch(url, {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            })
                .then(async (data) => await data.json());
        }

        async function getTop(url: string): Promise<string[]> {
            const top : string[] = []
            const data = await spotifyFetch(url);
            data.items.forEach( (item : { name: string }) => top.push(item.name))
            return top;
        }

        topArtists = await getTop("https://api.spotify.com/v1/me/top/artists");
        topTracks = await getTop("https://api.spotify.com/v1/me/top/tracks");
    }
    catch (error: unknown) {
        console.log(error);
        if (error instanceof Error) console.log(`error in fetching data: `, error.message);
    }
    return <>
        <div className="flex justify-between" >
            <ul>
                {topTracks && topTracks.map((track, index) => (
                    <li key={index}>{track}</li>
                ))}
            </ul>
            <ul>
                {topArtists && topArtists.map((track, index) => (
                    <li key={index}>{track}</li>
                ))}
            </ul>

        </div>
    </>
}