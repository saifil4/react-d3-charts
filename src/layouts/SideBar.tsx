import sectionList from "sections/section-list";
import { TChartSection } from "types";

type TSideBarProps = {
  handleClick: (sectionName: string) => void;
};

const SideBar: React.FC<TSideBarProps> = ({ handleClick }) => {
  const groups = ["line-chart", "bar-chart", "pie-chart", "other-chart"];

  return (
    <nav className="flex flex-col overflow-auto w-full h-full py-7 px-4">
      <ChartLink
        key="getting-started"
        name="Getting Started"
        handleClick={() => handleClick("getting-started")}
      />
      {groups.map((group) => (
        <ChartGroup
          key={group}
          name={group}
          sections={sectionList.filter(
            (sl) => sl.group === group && sl.status === "available"
          )}
          handleClick={handleClick}
        />
      ))}
      <ChartGroup
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
}: {
  name: string;
  sections: TChartSection[];
  handleClick: (sectionName: string) => void;
}) => {
  return (
    <>
      <br />
      <h2 className="text-sm font-bold text-blue-500 uppercase mb-2 pl-4">
        {name}
      </h2>
      {sections.map((section) => (
        <ChartLink
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
};

const ChartLink: React.FC<TChartLinkProps> = ({ key, name, handleClick }) => {
  return (
    <a
      onClick={() => handleClick(key)}
      className="py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 cursor-pointer rounded-full"
    >
      {name}
    </a>
  );
};
