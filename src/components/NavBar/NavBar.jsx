import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationData = [
    {
        name: 'Home',
        path: '/home',
        id: 1
    },
    {
        name: 'About Us',
        path: '/about-us',
        id: 2
    },
    {
        name: 'Services',
        path: '/services',
        id: 3
    },
    {
        name: 'Contact',
        path: '/contact',
        id: 4
    },
    {
        name: 'Blog',
        path: '/blog',
        id: 5
    }
];

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const links = navigationData.map((route) => <Link key={route.id} route={route} />);

    return (
        <nav className="mx-10 mt-4 flex items-center justify-between">
            <div className="relative flex items-center">
                <button
                    type="button"
                    className="md:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X /> : <Menu />}
                </button>

                <ul className={`absolute left-0 top-12 w-48 rounded-md bg-white p-3 shadow-lg md:hidden ${open ? 'block' : 'hidden'}`}>
                    {links}
                </ul>

                <h3 className="ml-4 font-semibold">My Navbar</h3>
            </div>

            <ul className="hidden md:flex">
                {links}
            </ul>

            <button className="rounded bg-slate-800 px-4 py-2 text-white">Sign In</button>
        </nav>
    );
};

export default NavBar;
