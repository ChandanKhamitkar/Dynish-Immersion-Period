'use client';

import { Poppins } from "next/font/google";
import Top from "@/components/Top";
import Bottom from "@/components/Bottom";
import { useState, createContext, useEffect } from "react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

export enum TabTypes {
  New = "New",
  Cooking = "Cooking",
  Ready = "Ready",
}

interface TabContextType {
  tabSelected: TabTypes;
  setTabSelected: (tab: TabTypes) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const TabContext = createContext<TabContextType>({
  tabSelected: TabTypes.New, 
  setTabSelected: () => { },
  searchQuery: "",
  setSearchQuery: () => {}
});

export default function Home() {
  const [tabSelected, setTabSelected] = useState<TabTypes>(TabTypes.New);
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className={`bg-[#F3F4F6] w-full h-screen flex justify-center items-start ${poppins.className}`}>
      <div className="w-[30%] h-full flex flex-col space-y-8">
        <TabContext.Provider value={{ tabSelected, setTabSelected, searchQuery, setSearchQuery }}>
          <Top />
          <Bottom />
        </TabContext.Provider>
      </div>
    </div>
  );
}
