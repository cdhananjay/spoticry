const Testimonials = () => {
    return (
        <div className="flex flex-col sm:flex-row sm:px-15 md:px-15 lg:px-40 sm:gap-5 px-15 gap-4 w-full">

            <div className="bg-white/80 dark:bg-black/50 p-6 rounded-xl flex flex-col justify-between border border-gray-200 dark:border-gray-800 backdrop-blur-sm shadow-md">
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
                    I listen to Divine and Seedhe Maut once and suddenly I think I’m from the streets. This roast reminded me I’m actually from a gated community in Gurgaon.</p>
                <div className="flex items-center">
                    <img
                        src="https://i.pinimg.com/1200x/dd/54/80/dd548067626577760c74ce9f02cac387.jpg"
                        className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">Hardik</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Wannabe Gully Boy</p>
                    </div>
                </div>
            </div>

            <div className="sm:hidden md:block bg-white/80 dark:bg-black/50 p-6 rounded-xl flex flex-col justify-between border border-gray-200 dark:border-gray-800 backdrop-blur-sm shadow-md">
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
                    It told me that listening to Arijit doesn’t count as a personality trait and asked if my therapist knows about my 'Sad Boi Hours' playlist. I feel targeted.</p>
                <div className="flex items-center">
                    <img
                        src="https://i.pinimg.com/736x/d3/9e/aa/d39eaade516bf43eb86e111f94eebf50.jpg"
                        className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">Kabir</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Professional Heartbreak Simulator</p>
                    </div>
                </div>
            </div>

            <div className="bg-white/80 dark:bg-black/50 p-6 rounded-xl flex flex-col justify-between border border-gray-200 dark:border-gray-800 backdrop-blur-sm shadow-md">
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
                    It told me that listening to 60s classics doesn’t make me 'refined,' it just means I’m a boring roommate who complains about 'noise' at parties. My soul is hurt. </p>
                <div className="flex items-center">
                    <img
                        src="https://i.pinimg.com/736x/44/26/d7/4426d7284f033215559eedb5a12cefd2.jpg"
                        className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">Aditi</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">The 'Purane Gaane' Police</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;