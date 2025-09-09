// src/components/Footer.jsx
import { useEffect, useState } from "react";
import { incrementVisitors } from "../data/firebase"; // your firebase visitor function

export default function Footer() {
    const [visitors, setVisitors] = useState(0);
    const [time, setTime] = useState("");

    useEffect(() => {
        // Increment visitor count
        incrementVisitors()
            .then((count) => setVisitors(count))
            .catch((err) => console.error(err));

        // Update time
        const updateTime = () => {
            const now = new Date();
            const formatted = now.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
            });
            setTime(formatted);
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="mt-12 text-sm text-gray-600 dark:text-gray-400 py-6 border-t border-gray-300 dark:border-gray-700">
            <div className="max-w-4xl mx-auto flex justify-between items-center flex-wrap">
                {/* Left column */}
                <div className="flex flex-col space-y-1 text-left">
                    <p>Designed & Developed by Janvi</p>
                    <p>2025. All rights reserved.</p>
                </div>

                {/* Right column */}
                <div className="flex flex-col space-y-1 text-right">
                    <p>Visitors #{visitors}</p>
                    <p>Kanpur, {time}</p>
                </div>
            </div>
        </footer>

    );
}
