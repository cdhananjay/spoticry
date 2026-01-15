import { Github} from 'lucide-react';
const Header = () => {
    return (
        <header className="py-6 px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between mx-auto">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-2xl text-gray-900 dark:text-white">spoticry</span>
                </div>
                <a
                    href="#"
                    className="flex lg:inline-block bg-emerald-600 dark:bg-emerald-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors shadow-sm"
                > <Github />
                </a>

            </nav>
        </header>
    );
};

export default Header;