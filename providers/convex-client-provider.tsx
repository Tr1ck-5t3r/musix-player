"use client";

import { Navbar } from "@/components/navbar";
import { Loading } from "@/components/auth/loading"
import { ClerkProvider, useAuth} from '@clerk/nextjs';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { AuthLoading, Authenticated, ConvexReactClient, Unauthenticated } from 'convex/react';

interface ConvexClientProviderProps {
    children: React.ReactNode;
}

const convexurl = process.env.NEXT_PUBLIC_CONVEX_URL;

const convex = new ConvexReactClient(convexurl);

export const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                <AuthLoading>
                    <Loading />
                </AuthLoading>
                <Authenticated>
                    <Navbar />
                    {children}
                </Authenticated>
                <Unauthenticated>
                    <Navbar />
                    <main className="flex h-full">
                        <div className="  ">
                            Please sign in to continue!.
                        </div>
                    </main>
                </Unauthenticated>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );  
}