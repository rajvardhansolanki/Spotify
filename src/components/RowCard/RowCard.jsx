import React from 'react';
import one from "../../assets/Images/Thumbnil/one.jpeg";
import two from "../../assets/Images/Thumbnil/two.jpg";
import three from "../../assets/Images/Thumbnil/three.jpg";
import four from "../../assets/Images/Thumbnil/one.jpeg";
import five from "../../assets/Images/Thumbnil/two.jpg";

const RowCard = () => {
    return (
        <>
            <div className="w-full h-auto grid md:grid-cols-3 gap-4 grid-cols-2">
                <div className="h-16 bg-[#536A6A] rounded-[0.4rem] overflow-hidden flex">
                    {/* Image section - fixed width */}
                    <div className="w-16 shrink-0">
                        <img
                            className="h-full w-full object-cover"
                            src={one}
                            alt="thumbnail-image"
                        />
                    </div>

                    {/* Text section - takes remaining space */}
                    <div className="flex-1 bg-[#576666] flex items-center pl-2.5">
                        <p className="text-white truncate">Stay With Me</p>
                    </div>
                </div>
                <div className="h-16 bg-[#536A6A] rounded-[0.4rem] overflow-hidden flex">
                    {/* Image section - fixed width */}
                    <div className="w-16 shrink-0">
                        <img
                            className="h-full w-full object-cover"
                            src={one}
                            alt="thumbnail-image"
                        />
                    </div>

                    {/* Text section - takes remaining space */}
                    <div className="flex-1 bg-[#576666] flex items-center pl-2.5">
                        <p className="text-white truncate">Stay With Me</p>
                    </div>
                </div>
                <div className="h-16 bg-[#536A6A] rounded-[0.4rem] overflow-hidden flex">
                    {/* Image section - fixed width */}
                    <div className="w-16 shrink-0">
                        <img
                            className="h-full w-full object-cover"
                            src={one}
                            alt="thumbnail-image"
                        />
                    </div>

                    {/* Text section - takes remaining space */}
                    <div className="flex-1 bg-[#576666] flex items-center pl-2.5">
                        <p className="text-white truncate">Stay With Me</p>
                    </div>
                </div>
                <div className="h-16 bg-[#536A6A] rounded-[0.4rem] overflow-hidden flex">
                    {/* Image section - fixed width */}
                    <div className="w-16 shrink-0">
                        <img
                            className="h-full w-full object-cover"
                            src={one}
                            alt="thumbnail-image"
                        />
                    </div>

                    {/* Text section - takes remaining space */}
                    <div className="flex-1 bg-[#576666] flex items-center pl-2.5">
                        <p className="text-white truncate">Stay With Me</p>
                    </div>
                </div>
                <div className="h-16 bg-[#536A6A] rounded-[0.4rem] overflow-hidden flex">
                    {/* Image section - fixed width */}
                    <div className="w-16 shrink-0">
                        <img
                            className="h-full w-full object-cover"
                            src={one}
                            alt="thumbnail-image"
                        />
                    </div>

                    {/* Text section - takes remaining space */}
                    <div className="flex-1 bg-[#576666] flex items-center pl-2.5">
                        <p className="text-white truncate">Stay With Me</p>
                    </div>
                </div>
                <div className="h-16 bg-[#536A6A] rounded-[0.4rem] overflow-hidden flex">
                    {/* Image section - fixed width */}
                    <div className="w-16 shrink-0">
                        <img
                            className="h-full w-full object-cover"
                            src={one}
                            alt="thumbnail-image"
                        />
                    </div>

                    {/* Text section - takes remaining space */}
                    <div className="flex-1 bg-[#576666] flex items-center pl-2.5">
                        <p className="text-white truncate">Stay With Me</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default RowCard;
