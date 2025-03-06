import { createContext } from "react";
import { TabTypes } from "@/utils/tabTypes";

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