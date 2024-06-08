"use client";
import { UserButton } from "@clerk/clerk-react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { Authenticated, Unauthenticated } from 'convex/react';

import { AddSongModal } from "@/app/(homepage)/_components/add-song-modal";
import { Button } from "./ui/button";

export const Navbar = () => {
    return (
        <nav className="bg-slate-900 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <Link href="/" className="text-white font-bold text-xl">
                    Musix Player
                </Link>
                <div className="flex items-center">
                    <AddSongModal />
                </div>
                <div>
                    <Authenticated>
                        <UserButton />
                    </Authenticated>
                    <Unauthenticated>
                        <button className="text-white bg-slate-800 px-4 py-2 rounded-md">
                            <SignInButton />
                        </button>
                    </Unauthenticated>
                </div>
            </div>
        </nav>
    );
};