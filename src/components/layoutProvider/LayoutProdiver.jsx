"use client"

import { usePathname } from "next/navigation";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const LayoutProdiver = ({children}) => {
    const pathname = usePathname();
    return (
        <div>
            {pathname && "/login" && pathname && "/signup" && pathname && <Navbar/>}
            {children}
            {pathname && "/login" && pathname && "/signup" && pathname && <Footer/>}
        </div>
    );
};

export default LayoutProdiver;