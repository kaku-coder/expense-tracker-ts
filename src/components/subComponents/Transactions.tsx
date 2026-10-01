import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const mockTransactions = [
    { id: 1, title: 'Grocery Store', amount: -124.50, type: 'expense', category: 'Food', date: 'Today' },
    { id: 2, title: 'Freelance Design', amount: 850.00, type: 'income', category: 'Salary', date: 'Yesterday' },
    { id: 3, title: 'Electricity Bill', amount: -65.20, type: 'expense', category: 'Bills', date: '28 Sep' },
    { id: 4, title: 'Starbucks Coffee', amount: -12.00, type: 'expense', category: 'Food', date: '26 Sep' },
    { id: 5, title: 'Monthly Salary', amount: 4350.00, type: 'income', category: 'Salary', date: '25 Sep' },
]

const Transactions = () => {
    const [filter, setFilter] = useState<'all' | 'expense' | 'income'>('all')

    const filtered = mockTransactions.filter(item => {
        if (filter === 'all') return true
        return item.type === filter
    })

    return (
        <div className='flex flex-col gap-4 text-white h-full justify-between'>
            {/* Header */}
            <div className='flex items-center justify-between'>
                <h2 className='text-lg font-bold text-white'>Transactions</h2>
                <Link to="/" className='text-xs text-zinc-400 hover:text-white bg-zinc-800/60 px-3 py-1.5 rounded-full border border-zinc-700/60'>
                    ← Back
                </Link>
            </div>

            {/* Filter Pills */}
            <div className='flex items-center gap-2 bg-zinc-950 p-1 border border-zinc-800 rounded-2xl'>
                <button
                    onClick={() => setFilter('all')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition ${filter === 'all' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                    All
                </button>
                <button
                    onClick={() => setFilter('expense')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition ${filter === 'expense' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                    Expenses
                </button>
                <button
                    onClick={() => setFilter('income')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition ${filter === 'income' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                    Income
                </button>
            </div>

            {/* List */}
            <div className='flex-1 overflow-y-auto flex flex-col gap-2 pr-1 max-h-[360px] scrollbar-thin scrollbar-thumb-zinc-800'>
                {filtered.map(item => (
                    <div key={item.id} className='flex items-center justify-between p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/70 hover:bg-zinc-900 transition'>
                        <div className='flex items-center gap-3'>
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-base ${item.type === 'expense' ? 'bg-red-500/15 text-red-400' : 'bg-emerald-500/15 text-emerald-400'}`}>
                                {item.category === 'Food' ? '🍔' : item.category === 'Salary' ? '💰' : '⚡'}
                            </div>
                            <div>
                                <p className='text-xs font-bold text-white'>{item.title}</p>
                                <p className='text-[10px] text-zinc-500'>{item.date} • {item.category}</p>
                            </div>
                        </div>
                        <span className={`text-xs font-bold ${item.type === 'expense' ? 'text-red-400' : 'text-emerald-400'}`}>
                            {item.amount > 0 ? `+$${item.amount.toFixed(2)}` : `-$${Math.abs(item.amount).toFixed(2)}`}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Transactions
