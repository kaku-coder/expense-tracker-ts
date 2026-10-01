import React, { useState } from 'react'
import Intialbalance from './subComponents/Intialbalance'

const MobileView = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        /* Outer Phone Device Container with Hardware Buttons & Shadow */
        <div className='relative group'>
            {/* Physical Side Buttons */}
            {/* Volume Up Button (Left Side) */}
            <div className='absolute -left-[6px] top-28 w-[6px] h-10 bg-zinc-700 rounded-l-md border-y border-l border-zinc-600 shadow-md' />
            {/* Volume Down Button (Left Side) */}
            <div className='absolute -left-[6px] top-42 w-[6px] h-10 bg-zinc-700 rounded-l-md border-y border-l border-zinc-600 shadow-md' />
            {/* Power Button (Right Side) */}
            <div className='absolute -right-[6px] top-32 w-[6px] h-14 bg-zinc-700 rounded-r-md border-y border-r border-zinc-600 shadow-md' />

            {/* Realistic Phone Screen Body with Box Shadow */}
            <div className='relative w-[360px] h-[660px] bg-black border-[4px] border-zinc-800 rounded-[48px] p-5 text-white flex flex-col gap-4 overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(16,185,129,0.12)] ring-1 ring-zinc-700/60'>
                
                {/* Dynamic Notch / Camera Pill at Top */}
                <div className='absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-zinc-950 rounded-full z-40 border border-zinc-800/80 flex items-center justify-between px-3 shadow-inner'>
                    <div className='w-2.5 h-2.5 rounded-full bg-zinc-900 ring-1 ring-zinc-800/80' />
                    <div className='w-1.5 h-1.5 rounded-full bg-blue-900/60' />
                </div>

                {/* Top Navbar (with top padding for camera notch) */}
                <nav className='w-full flex items-center justify-between pt-4 px-1 z-20 relative'>
                    {/* Left: Avatar + Title */}
                    <div className='flex items-center gap-3'>
                        {/* Profile Image Circle */}
                        <div className='w-11 h-11 rounded-full border border-zinc-700/80 overflow-hidden shrink-0 flex items-center justify-center shadow-md'>
                            <img 
                                className='w-full h-full object-cover' 
                                src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt="Profile" 
                            />
                        </div>
                        {/* Expense Tracker Text */}
                        <h1 className='text-lg font-bold text-white tracking-tight'>
                            Expense <span className='text-emerald-500'>Tracker</span>
                        </h1>
                    </div>

                    {/* Right: Bell & Menu Icons */}
                    <div className='flex items-center gap-2.5'>
                        {/* Notification Bell */}
                        <button className='relative w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center text-white hover:bg-zinc-700 transition active:scale-95 border border-zinc-700/50'>
                            <span className='absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-black' />
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>

                        {/* Animated Hamburger Menu Button */}
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center text-white transition-all duration-300 active:scale-95 border ${isMenuOpen ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50 rotate-90' : 'border-zinc-700/50 hover:bg-zinc-700'}`}
                        >
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>

                {/* Animated Slide-Down Menu Overlay */}
                <div 
                    className={`absolute inset-x-4 top-24 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-3xl p-5 z-30 transition-all duration-300 ease-in-out ${
                        isMenuOpen 
                            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto shadow-2xl' 
                            : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
                    }`}
                >
                    <div className='flex flex-col gap-3'>
                        <div className='text-xs font-semibold text-zinc-500 uppercase tracking-wider px-2'>Navigation</div>
                        
                        <button className='flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20 transition hover:bg-emerald-500/20'>
                            <span className='text-lg'>📊</span>
                            <span>Dashboard</span>
                        </button>

                        <button className='flex items-center gap-3 px-4 py-3 rounded-2xl bg-zinc-800/50 text-zinc-300 font-medium hover:bg-zinc-800 hover:text-white transition'>
                            <span className='text-lg'>💳</span>
                            <span>Transactions</span>
                        </button>

                        <button className='flex items-center gap-3 px-4 py-3 rounded-2xl bg-zinc-800/50 text-zinc-300 font-medium hover:bg-zinc-800 hover:text-white transition'>
                            <span className='text-lg'>🎯</span>
                            <span>Monthly Budget</span>
                        </button>

                        <button className='flex items-center gap-3 px-4 py-3 rounded-2xl bg-zinc-800/50 text-zinc-300 font-medium hover:bg-zinc-800 hover:text-white transition'>
                            <span className='text-lg'>⚙️</span>
                            <span>Settings</span>
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className='mt-2 bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-5 flex-1 flex flex-col justify-between shadow-inner'>
                    <Intialbalance/>
                </div>

                {/* Bottom Home Bar Indicator */}
                <div className='w-32 h-1 bg-zinc-600/70 rounded-full mx-auto mb-1 shrink-0' />
            </div>
        </div>
    )
}

export default MobileView