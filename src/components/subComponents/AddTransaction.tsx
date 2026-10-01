import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTransaction = () => {
    const navigate = useNavigate()
    const [type, setType] = useState<'expense' | 'income'>('expense')
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('Food')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log({ type, title, amount, category })
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 text-white h-full justify-between'>
            <div className='flex items-center justify-between'>
                <h2 className='text-lg font-bold text-white'>Add Transaction</h2>
                <button 
                    type="button" 
                    onClick={() => navigate('/')} 
                    className='text-xs text-zinc-400 hover:text-white bg-zinc-800/60 px-3 py-1.5 rounded-full border border-zinc-700/60'
                >
                    Cancel
                </button>
            </div>

            {/* Income / Expense Switcher */}
            <div className='grid grid-cols-2 p-1 bg-zinc-950 border border-zinc-800 rounded-2xl'>
                <button
                    type="button"
                    onClick={() => setType('expense')}
                    className={`py-2 text-xs font-bold rounded-xl transition ${type === 'expense' ? 'bg-red-500 text-white shadow-md' : 'text-zinc-400 hover:text-white'}`}
                >
                    Expense
                </button>
                <button
                    type="button"
                    onClick={() => setType('income')}
                    className={`py-2 text-xs font-bold rounded-xl transition ${type === 'income' ? 'bg-emerald-500 text-black shadow-md' : 'text-zinc-400 hover:text-white'}`}
                >
                    Income
                </button>
            </div>

            {/* Title Input */}
            <div className='flex flex-col gap-1.5'>
                <label className='text-xs font-semibold text-zinc-400'>Title / Description</label>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Coffee, Salary, Groceries"
                    className='w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition'
                    required
                />
            </div>

            {/* Amount Input */}
            <div className='flex flex-col gap-1.5'>
                <label className='text-xs font-semibold text-zinc-400'>Amount ($)</label>
                <input 
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className='w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-lg font-bold text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition'
                    required
                />
            </div>

            {/* Category Input */}
            <div className='flex flex-col gap-1.5'>
                <label className='text-xs font-semibold text-zinc-400'>Category</label>
                <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition'
                >
                    <option value="Food">🍔 Food & Dining</option>
                    <option value="Shopping">🛍️ Shopping</option>
                    <option value="Salary">💰 Salary / Income</option>
                    <option value="Bills">⚡ Bills & Utilities</option>
                    <option value="Travel">🚗 Transport / Travel</option>
                </select>
            </div>

            {/* Save Button */}
            <button 
                type="submit"
                className={`w-full py-3.5 rounded-2xl font-bold text-sm transition active:scale-[0.98] ${type === 'expense' ? 'bg-red-500 hover:bg-red-400 text-white shadow-lg shadow-red-500/20' : 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20'}`}
            >
                Save {type === 'expense' ? 'Expense' : 'Income'}
            </button>
        </form>
    )
}

export default AddTransaction
