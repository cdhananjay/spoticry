import RoastMeBtn from "@/components/RoastMeBtn";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
export default function Page() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black font-sans text-gray-800 dark:text-gray-200 w-full flex flex-col justify-between">
            <Header />
            <main className="relative flex-1 flex items-center justify-center text-center w-full">
                <div className="relative flex flex-col items-center justify-center py-10 sm:py-16 px-4 max-w-5xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight max-w-4xl">
                        Your Spotify Wrapped was a participation trophy. This is the{" "}
                        <span className="text-emerald-600 dark:text-emerald-400">Truth</span>{""}.
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                        Let’s take an honest look at the audio landfill you call a library.
                    </p>
                    <RoastMeBtn />
                </div>
            </main>
            <Testimonials />
            < Footer />
        </div>)
}
