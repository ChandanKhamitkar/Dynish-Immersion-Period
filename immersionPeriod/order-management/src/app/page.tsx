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
}

export const TabContext = createContext<TabContextType>({
  tabSelected: TabTypes.New, setTabSelected: () => { },
});

export default function Home() {
  const [tabSelected, setTabSelected] = useState<TabTypes>(TabTypes.New);
  return (
    <div className={`bg-[#F3F4F6] w-full h-screen flex justify-center items-start ${poppins.className}`}>
      <div className="w-[30%] h-full flex flex-col space-y-8">
        <TabContext.Provider value={{ tabSelected, setTabSelected }}>
          <Top />
          <Bottom />
        </TabContext.Provider>
      </div>
    </div>
  );
}
