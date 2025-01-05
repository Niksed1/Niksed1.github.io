"use client";
import { useState } from 'react'
import Link from "next/link";

export default function Nav()
{

    return(  
    <div className="navbar fixed top-0 left-0 w-full z-50">
        <div className="flex-none menu menu-lg menu-horizontal px-5 text-base-content text-lg font-mont space-x-6 ">
            <span className = "p-2 md:p-4 rounded-lg hover:bg-gray-900 hover:cursor-pointer">
                <Link href = "/#projects">
                    Projects
                </Link>
            </span> 
            <span className = "p-2 md:p-4 rounded-lg hover:bg-gray-900 hover:cursor-pointer">
                <Link href = "/#about">
                    About
                </Link>
            </span>
        </div>
    </div>
    );
}

