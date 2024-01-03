"use client"

import Link from "next/link";
const SideNavigation = () => {
    return (
        <>
            <section className="flex gap-8 justify-center mt-32">
             <Link href="documents/journal"><div className="w-36 h-14 bg-black text-white rounded-xl text-center flex items-center justify-center cursor-pointer">Write Journal</div></Link>
                <div className="w-36 h-14 bg-black text-white rounded-xl text-center flex items-center justify-center cursor-pointer">Add Tasks </div>
                <div className="w-36 h-14 bg-black text-white rounded-xl text-center flex items-center justify-center cursor-pointer">Study Time</div>
            </section>
            {/* heatmap */}
        </>
    );
}

export default SideNavigation;