"use client";
import { useState } from 'react'
import Link from "next/link";

export default function Nav()
{

    return(  
    <div className="navbar">
        <div className="flex-none menu menu-lg menu-horizontal px-5 text-base-content text-3l font-mont space-x-6 ">
        <span className = "p-2 md:p-4 rounded-lg hover:bg-gray-900 hover:cursor-pointer">
            <Link href = "/#projects">
                <p className = "">
                    Projects
                </p>
            </Link>
        </span> 
        <span className = "p-2 md:p-4 rounded-lg hover:bg-gray-900 hover:cursor-pointer">
            <Link href = "/#about">
                <p className = "">
                    About
                </p>
            </Link>
        </span>
        </div>
      </div>
      );
}

