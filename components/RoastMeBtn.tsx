'use client'
import {authClient} from "@/lib/auth-client";
import {useState} from "react";

const RoastMeBtn = () => {
    const [loading, setLoading] = useState(false)
    async function roast(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setLoading(true);
        try {
            await authClient.signIn.social({
                provider: "spotify",
                callbackURL: "/roast",
                errorCallbackURL: "/",
                disableRedirect: false,
            })
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }
    return (
        <button onClick={(e)=>roast(e)} className="mt-8 flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-md transform hover:scale-105">
            {/*<PlayIcon className="h-6 w-6" />*/}
            <span>{loading ? "Preparing to hurt your feelings..." : "I'm ready to cry" }</span>
        </button>
    );
};

export default RoastMeBtn;