import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function RoastPage(){
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
                        Spotify data access failed because your account isn’t on the app’s approved user list. See the <Link href="https://github.com/cdhananjay/spoticry" className="text-blue-500 underline">Github README</Link> for more information.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    </>;
}
