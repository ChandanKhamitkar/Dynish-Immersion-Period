'use client';

import { Poppins } from "next/font/google";
import Top from "@/components/Top";
import Bottom from "@/components/Bottom";
import { useState, } from "react";
import { TabContext } from "@/context/TabContext";
import { TabTypes } from "@/utils/tabTypes";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

export default function Home() {
  const [tabSelected, setTabSelected] = useState<TabTypes>(TabTypes.New);
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className={`bg-[#F3F4F6] w-full h-screen flex justify-center items-start ${poppins.className}`}>
      <div className="w-[90%] sm:w-[450px] h-full flex flex-col space-y-8">
        <TabContext.Provider value={{ tabSelected, setTabSelected, searchQuery, setSearchQuery }}>
          <Top />
          <Bottom />
        </TabContext.Provider>
      </div>
    </div>
  );
}
