import React from 'react';
import Link from 'next/link';
import Logo from '../components/global/Logo';
import Header from '../components/home/Header';

export default function Index() {
    return (
        <div className='flex flex-col w-screen h-screen'>
            <Header />
            <h1 className='font-serif text-5xl'>AI smart than us will be our last invention.</h1>
            <div className='flex flex-col items-center justify-center space-y-5'>
                <Logo />
                <p className='text-xs text-gray-600 italic'>Home page is cooking...</p>
                <Link href='/quickstart'>
                    <p className='bg-background text-black py-2 px-4 rounded-lg shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] transition-shadow duration-200 hover:shadow-[inset_0.2rem_0.2rem_0.5rem_rgb(225,226,228),inset_-0.2rem_-0.2rem_0.5rem_rgb(255,255,255)]'>
                        Open Guide
                    </p>
                </Link>
            </div>
        </div>
    );
}
