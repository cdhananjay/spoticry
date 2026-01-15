import {Linkedin} from "lucide-react"
import Link from "next/link"
const Footer = () => {
    return (
        <footer className="mt-4 sm:mt-20 w-full ">
            <div className="px-4 sm:px-10 py-7 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      ©{" "}
                        <Link href=""
                           className="hover:text-emerald-600 dark:hover:text-emerald-400"> spoticry </Link>{" "}2026, No rights deserved.</span>
                            <div className="hidden sm:block flex mt-4 space-x-4 sm:justify-center lg:mt-0">
                                <a href='#'
                                   className="w-9 h-9 flex justify-center items-center hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-colors duration-300"
                                >
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>
        </footer>
    );
};

export default Footer;