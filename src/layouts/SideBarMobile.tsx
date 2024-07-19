import SideBar from "./SideBar";

type TSideBarMobileProps = {
  changeSection: (sectionName: string) => void;
  selectedSection: string;
  isSideBarOpen: boolean;
};

const SideBarMobile: React.FC<TSideBarMobileProps> = ({
  isSideBarOpen,
  changeSection,
  selectedSection,
}) => {
  if (!isSideBarOpen) return null;
  return (
    <SideBar changeSection={changeSection} selectedSection={selectedSection} />
  );
};

export default SideBarMobile;
