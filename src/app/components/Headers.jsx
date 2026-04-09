import Link from 'next/link'

export default function Headers() {
    return (
        <div className='flex flex-row justify-around h-20 items-center bg-black'>
            <div className='flex cols-3 text-white'>
                <h1> Nature </h1>
            </div>

            <div className='flex cols-9 text-white justify-between gap-5'>
                <Link href="/">Home</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/dashboard/settings">Setting</Link>
                <Link href="/about">About</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    )
}