'use client';

import Image from "next/image";
import {useTheme} from "next-themes";

function useLogo() {
    const { resolvedTheme } = useTheme();

    if (resolvedTheme == "light") {
        return (
            <Image
                src="https://cdn.kioydiolabs.org/logo_black_nm.png"
                alt="The KioydioLabs Logo"
                width='150'
                height='100'
            />
        );
    } else if (resolvedTheme == "dark") {
        return (
            <Image
                src="https://cdn.kioydiolabs.org/logo_white_nm.png"
                alt="The KioydioLabs Logo"
                width='150'
                height='100'
            />
        );
    }
}

const Navbar = () => {
    return (
        <div className="flex flex-row items-center justify-between navbar-glass px-10 py-3 w-[40%] rounded-xl my-10">

            {useLogo()}

        </div>
    );
};

export default Navbar;