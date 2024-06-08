import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

interface ChatLayoutProps {
    children: React.ReactNode;
}

export default function ChatLayout({ children }: ChatLayoutProps) {
    return (
        <div className="bg-slate-950">
            <main className="flex h-full">
                <div className="h-full w-full">
                    {children}
                </div>
            </main>
            
        </div>
    );
};