import sectionList from "sections/section-list";
import { TChartSection } from "types";

type TSideBarProps = {
  handleClick: (sectionName: string) => void;
  selectedPanel: string;
};

const SideBar: React.FC<TSideBarProps> = ({ handleClick, selectedPanel }) => {
  const groups = ["line-chart", "bar-chart", "pie-chart", "other-chart"];

  return (
    <nav className="flex flex-col w-full py-5 px-4">
      <ChartLink
        isSelected={selectedPanel === "getting-started"}
        key="getting-started"
        name="Getting Started"
        handleClick={() => handleClick("getting-started")}
      />
      {groups.map((group) => (
        <ChartGroup
          selectedPanel={selectedPanel}
          key={group}
          name={group}
          sections={sectionList.filter(
            (sl) => sl.group === group && sl.status === "available"
          )}
          handleClick={handleClick}
        />
      ))}
      <ChartGroup
        selectedPanel={selectedPanel}
        key="Coming Soon"
        name="Coming soon"
        sections={sectionList.filter((sl) => sl.status === "in-progress")}
        handleClick={handleClick}
      />
    </nav>
  );
};

export default SideBar;

const ChartGroup = ({
  name,
  sections,
  handleClick,
  selectedPanel,
}: {
  name: string;
  sections: TChartSection[];
  handleClick: (sectionName: string) => void;
  selectedPanel: string;
}) => {
  return (
    <>
      <br />
      <h2 className="text-sm font-bold text-blue-500 uppercase mb-2 pl-4">
        {name}
      </h2>
      {sections.map((section) => (
        <ChartLink
          isSelected={section.heading === selectedPanel}
          key={section.heading}
          name={section.heading}
          handleClick={() => handleClick(section.heading)}
        />
      ))}
    </>
  );
};

type TChartLinkProps = {
  key: string;
  name: string;
  handleClick: (key: string) => void;
  isSelected: boolean;
};

const ChartLink: React.FC<TChartLinkProps> = ({
  key,
  name,
  handleClick,
  isSelected,
}) => {
  return (
    <a
      onClick={() => handleClick(key)}
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
