import sectionList from "sections/section-list";
import { TChartSection } from "types";

type TSideBarProps = {
  changeSection: (sectionName: string) => void;
  selectedSection: string;
};

const SideBar: React.FC<TSideBarProps> = ({
  changeSection,
  selectedSection,
}) => {
  const groups = ["line-chart", "bar-chart", "pie-chart", "other-chart"];

  return (
    <nav className="flex flex-col w-full py-5 px-4">
      <ChartLink
        isSelected={selectedSection === "getting-started"}
        key="getting-started"
        name="Getting Started"
        changeSection={() => changeSection("getting-started")}
      />
      {groups.map((group) => (
        <ChartGroup
          selectedSection={selectedSection}
          key={group}
          name={group}
          sections={sectionList.filter(
            (sl) => sl.group === group && sl.status === "available"
          )}
          changeSection={changeSection}
        />
      ))}
    </nav>
  );
};

export default SideBar;

const ChartGroup = ({
  name,
  sections,
  changeSection,
  selectedSection,
}: {
  name: string;
  sections: TChartSection[];
  changeSection: (sectionName: string) => void;
  selectedSection: string;
}) => {
  return (
    <>
      <br />
      <h2 className="text-sm font-bold text-blue-500 uppercase mb-2 pl-4">
        {name}
      </h2>
      {sections.map((section) => (
        <ChartLink
          isSelected={section.heading === selectedSection}
          key={section.heading}
          name={section.heading}
          changeSection={() => changeSection(section.heading)}
        />
      ))}
    </>
  );
};

type TChartLinkProps = {
  key: string;
  name: string;
  changeSection: (key: string) => void;
  isSelected: boolean;
};

const ChartLink: React.FC<TChartLinkProps> = ({
  key,
  name,
  changeSection,
  isSelected,
}) => {
  return (
    <a
      onClick={() => changeSection(key)}
      href={"#" + name.replace(" ", "-")}
      className={`py-2 px-4 text-sm font-medium cursor-pointer rounded-full ${
        isSelected
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-transparent text-gray-800 hover:bg-gray-100"
      }`}
    >
      {name}
    </a>
  );
};
