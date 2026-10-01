import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='flex flex-col gap-4 text-white h-full justify-between'>
            {/* Balance Overview Card */}
            <div className='bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-5 shadow-xl relative overflow-hidden'>
                <div className='absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl' />
                
                <p className='text-xs text-zinc-400 font-medium uppercase tracking-wider'>Total Balance</p>
                <h2 className='text-3xl font-extrabold text-white mt-1'>$4,520.00</h2>
                
                {/* Income vs Expense Pill */}
                <div className='grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-zinc-800/80'>
                    <div className='flex items-center gap-2.5'>
                        <div className='w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400 text-sm font-bold'>
                            ↓
                        </div>
                        <div>
                            <p className='text-[10px] text-zinc-400 uppercase font-semibold'>Income</p>
                            <p className='text-sm font-bold text-emerald-400'>+$5,200</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-2.5'>
                        <div className='w-8 h-8 rounded-full bg-red-500/15 flex items-center justify-center text-red-400 text-sm font-bold'>
                            ↑
                        </div>
                        <div>
                            <p className='text-[10px] text-zinc-400 uppercase font-semibold'>Expenses</p>
                            <p className='text-sm font-bold text-red-400'>-$680.00</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className='flex items-center gap-3'>
                <Link to="/add" className='flex-1 bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 rounded-2xl flex items-center justify-center gap-2 transition active:scale-95 shadow-md shadow-emerald-500/20'>
                    <span>+ Add New</span>
                </Link>
                <Link to="/setup" className='bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 hover:text-white font-semibold py-3 px-4 rounded-2xl transition active:scale-95 border border-zinc-700/60 text-xs'>
                    <span>Wallet Setup</span>
                </Link>
            </div>

            {/* Recent Transactions List */}
            <div className='flex-1 flex flex-col gap-2.5 min-h-0'>
                <div className='flex items-center justify-between px-1'>
                    <h3 className='text-sm font-bold text-white'>Recent Activity</h3>
                    <Link to="/transactions" className='text-xs text-emerald-400 hover:underline font-medium'>
                        View All
                    </Link>
                </div>

                <div className='flex flex-col gap-2 overflow-y-auto pr-1 flex-1 max-h-[200px] scrollbar-thin scrollbar-thumb-zinc-800'>
                    <div className='flex items-center justify-between p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/70 hover:bg-zinc-900 transition'>
                        <div className='flex items-center gap-3'>
                            <div className='w-9 h-9 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center text-base'>
                                🛒
                            </div>
                            <div>
                                <p className='text-xs font-bold text-white'>Grocery Shopping</p>
                                <p className='text-[10px] text-zinc-500'>Today, 2:30 PM</p>
                            </div>
                        </div>
                        <span className='text-xs font-bold text-red-400'>-$124.50</span>
                    </div>

                    <div className='flex items-center justify-between p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/70 hover:bg-zinc-900 transition'>
                        <div className='flex items-center gap-3'>
                            <div className='w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-base'>
                                💼
                            </div>
                            <div>
                                <p className='text-xs font-bold text-white'>Freelance Pay</p>
                                <p className='text-[10px] text-zinc-500'>Yesterday</p>
                            </div>
                        </div>
                        <span className='text-xs font-bold text-emerald-400'>+$850.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
