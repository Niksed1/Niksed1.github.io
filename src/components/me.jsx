'use client';
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";
import Head from 'next/head';
export default function Me()
{

    return(
        <div id="top" className="pt-40 flex flex-col items-center">
            <div className="flex flex-col items-center text-6xl text-neutral-content">
                <p>Hello world, I'm <span className="text-pink-200">Alex</span> </p>
                <p>a web developer</p>
            </div>
            <Link href="/#about">
                <div 
                    className="font-mont text-xl text-neutral-content bou px-4 py-2 rounded animate-bounce mt-7">
                    about me ↓
                </div>
            </Link>
        </div>
    );
}