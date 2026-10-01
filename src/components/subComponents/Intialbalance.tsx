import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Intialbalance = () => {
    const [Balance, setBalance] = useState<string>('')
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBalance(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit} className='h-full w-full flex flex-col items-center justify-between py-2 text-white gap-4'>
            {/* Wallet Setup Icon & Header */}
            <div className='flex flex-col items-center text-center gap-2 mt-1'>
                <div className='w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-2xl shadow-inner'>
                    👛
                </div>
                <h1 className='capitalize text-lg font-extrabold text-white tracking-tight'>
                    Let's set up your wallet
                </h1>
                <p className='text-xs text-zinc-400 font-medium max-w-[240px]'>
                    Enter your starting balance to begin tracking expenses.
                </p>
            </div>

            {/* Input Field Section */}
            <div className='w-full flex flex-col gap-3 my-auto'>
                <p className='text-xs font-semibold text-zinc-400 uppercase tracking-wider text-center'>
                    What is your current balance?
                </p>

                {/* Input Container */}
                <div className='relative w-full flex items-center bg-zinc-950/80 border border-zinc-700/80 rounded-2xl px-4 py-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all shadow-inner'>
                    <span className='text-xl font-bold text-emerald-500 mr-2'>$</span>
                    <input 
                        className='w-full bg-transparent text-xl font-bold text-white placeholder-zinc-600 focus:outline-none tracking-wide' 
                        onChange={handleChange} 
                        type="number" 
                        value={Balance} 
                        placeholder='0.00' 
                    />
                </div>

                {/* Live Balance Preview */}
                <div className='flex items-center justify-center gap-1.5 text-xs text-zinc-400 bg-zinc-900/90 border border-zinc-800 py-1.5 px-3 rounded-full mx-auto mt-1'>
                    <span>This will be your starting balance:</span>
                    <span className='font-bold text-emerald-400'>
                        ${Balance ? Number(Balance).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'}
                    </span>
                </div>
            </div>

            {/* CTA Button */}
            <button type="submit" className='w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3.5 px-4 rounded-2xl transition-all duration-200 shadow-lg shadow-emerald-500/25 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer mt-auto'>
                Continue →
            </button>
        </form>
    )
}

export default Intialbalance