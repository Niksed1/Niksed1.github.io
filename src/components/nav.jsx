"use client";
import { useState } from 'react'
import Link from "next/link";

export default function Nav()
{

    return(  
    <div className="navbar fixed top-0 left-0 w-full z-50">
        <div className="flex-none menu menu-lg menu-horizontal px-5 text-base-content text-lg font-mont space-x-6 ">
            <Link href = "/#top">
                <span className = "p-2 md:p-4 rounded-lg hover:bg-gray-900 hover:cursor-pointer">
                    Top
                </span> 
            </Link>
            <Link href = "/#projects">
                <span className = "p-2 md:p-4 rounded-lg hover:bg-gray-900 hover:cursor-pointer">
                    Projects
                </span> 
            </Link>
            <Link href = "/#about">
                <span className = "p-2 md:p-4 rounded-lg hover:bg-gray-900 hover:cursor-pointer">
                    About
                </span>
            </Link>
        </div>
    </div>
    );
}

