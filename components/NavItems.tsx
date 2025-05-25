"use client";

import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'Companions', href: '/companions'},
    {label:"My Journey", href: "/my-journey"}
]

const NavItems = () => {
    const pathname = usePathname();
    return (
        <nav className={"flex items-center gap-4"}>
            {navItems.map(({label, href}) => (
                <Link key={label} href={href}
                      className={cn(pathname === href && "text-primary font-semibold")}
                >
                    {label}
                </Link>
            ))}
            <div className="ml-4 flex items-center gap-2">
                <SignedOut>
                    <SignInButton>
                        <button className={"btn-signin"}>Sign In</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default NavItems;
