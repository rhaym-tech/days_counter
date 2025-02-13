"use client";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#d43f3a] text-white text-center relative font-['DinNext  ']">
            <div className="absolute top-[32px] left-6 right-6 border-t border-white"></div>
            <div className="mb-6 flex flex-col items-center max-w-[90%]">
                <img src="/vanguard.svg" alt="Vanguard Logo" className = "mb-12" style={{maxWidth: "130px"}} />
                <h1 className="text-5xl font-['DinNextMedium'] mb-8 tracking-wider">LURKER DETECTED</h1>
                <h2 className="match-terminated">PAGE NOT FOUND</h2>
                <p className="font-['DinNextLight'] text-ulg mb-20">
                    YOUR LURKING ASS HAS BEEN CAUGHT SNEAKING INTO AN NON EXISTING PAGE. THERE'S NOTHING YOU CAN DO ABOUT IT BUT COMING BACK TO WHERE YOU CAME FROM.
                </p>

                <button onClick={() => {window.location.href = "/"}} className="px-10 py-2 bg-[#ffffff2e] text-white border border-[#ffffff4d] text-lg font-['DinNextLight'] tracking-wider hover:bg-[#ffffff4d]">
                    CONTINUE
                </button>
            </div>
            <div className="absolute top-12 right-12 text-xs tracking-widest cursor-pointer">
                <Link href="/">
                    <span className="flex items-center">
                        <img src="/back.svg" alt="back" className="w-10 h-10 mr-2" />
                        BACK
                    </span>
                </Link>
            </div>
            <div className="absolute bottom-10 left-7 right-7 border-t border-[#ffffff7d]"></div>
        </div>
    );
}
