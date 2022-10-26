import { Sun, Moon } from "react-feather";

export default function DarkmodeToggle({
    setDarkMode,
    darkMode,
}: {
    setDarkMode: (value: boolean) => void;
    darkMode: boolean;
}) {
    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Dark-mode toggle"
            className="hover:bg-darkSecondary dark:hover:bg-secondary rounded-full p-1 transition-colors group items-center flex justify-center"
        >
            {darkMode ? (
                <Sun className="text-darkPrimary group-hover:text-primary transition-colors w-5 h-5" />
            ) : (
                <Moon className="text-primary group-hover:text-darkPrimary transition-colors w-5 h-5" />
            )}
        </button>
    );
}
