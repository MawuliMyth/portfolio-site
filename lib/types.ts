import { links } from "./data";

export type activeSectionType=(typeof links)[number]["name"];
export type activeSectionContextProps={children:React.ReactNode};
export type activeSectionContextType={
	activeSection:activeSectionType;
	setActiveSection:(section:activeSectionType)=>void;
   navigateTo:(section:activeSectionType)=>void;
}
