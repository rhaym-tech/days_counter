"use client";
import BaseModal from "@/compontents/BaseModal";
import { useState, useEffect } from "react";

export default function Home() {
  const banDurationDays = 120; // 4 months
  const banDate = new Date(2025, 6, 9); // July is month 6 (0-indexed)
  const currentDate = new Date();

  const [days, setDays] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const getUnbanDate = () => {
    const unbanDate = new Date(banDate);
    unbanDate.setDate(banDate.getDate() + banDurationDays);

    return unbanDate;
  }

  const calculateDaysLeft = () => {
    const difference = currentDate.getTime() - banDate.getTime();
    return banDurationDays - Math.max(0, Math.ceil(difference / (1000 * 3600 * 24)));
  };

  useEffect(() => {
    setDays(calculateDaysLeft());
    const timer = setInterval(() => setDays(calculateDaysLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <h1 className="text-4xl font-bold">
          How many days left until <span style={{color: "red"}}>Riot Vanguard</span> lifts the ban on us 🎮
        </h1>
        
        <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-pulse">
          {days}
        </div>

        <div className="space-y-4">
          <p className="text-xl">
            {days > 0 ? "Until Freedom Day!" : "Akram is Unbanned! 🎉"}
          </p>
          <p className="text-sm opacity-75">
            Unban Date: {getUnbanDate().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div 
          className="mt-8 p-4 border rounded-lg bg-black/[.05] dark:bg-white/[.06] cursor-pointer hover:bg-black/[.10] dark:hover:bg-white/[.10] transition-colors"
          onClick={() => setShowModal(true)}
        >
          <p className="text-sm font-[family-name:var(--font-geist-mono)]">
            Learn more
          </p>
        </div>

        {showModal && (
          <BaseModal>
            <h2 className="text-2xl font-bold mb-4">The Ban Saga 🛡️</h2>
            <div className="text-left">
              <p className="mb-4">
                <span className="font-bold text-red-500">Akram</span>, an <span className="font-bold text-lime-600">Ascendant-tier</span> player, 
                was using a <span className="underline">skinchanger</span> to enjoy custom cosmetics in his alt account with no limits, it was basically a huge amount of dopamine. 
              </p>
              <p className="mb-4">
                During an unrated match which we were playing together, his <span className="text-green-500">superior gameplay</span> against 
                Bronze opponents led to false <span className="text-red-400">cheating accusations</span>, like using a triggerbot.<br/>
                Multiple reports triggered a <span className="font-bold">manual Vanguard review</span>.
              </p>
              <p className="mb-4">
                Riot's investigation found the <span className="underline">unauthorized skinchanger</span>, 
                resulting in:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>🔒 Permanent account suspension</li>
                  <li>🖥️ 4-month HWID ban (to avoid future false bans)</li>
                </ul>
            </div>
            <button
                onClick={() => setShowModal(false)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Close
            </button>
          </BaseModal>
        )}
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="text-sm opacity-50">
          Made with ❤️ by Rhaym
        </div>
      </footer>
    </div>
  );
}