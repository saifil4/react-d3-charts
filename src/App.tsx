import { useState } from "react";
import sectionList from "sections/section-list";
import ChartSection from "layouts/ChartSection";
import GettingStarted from "sections/GettingStarted";
import SideBar from "layouts/SideBar";
import NavBar from "layouts/NavBar";
import SideBarMobile from "layouts/SideBarMobile";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const [selectedSection, setSelectedSection] =
    useState<string>("getting-started");

  const changeSection = (section: string) => setSelectedSection(section);

  const changeSectionMobile = (section: string) => {
    changeSection(section);
    setIsSideBarOpen(false);
  }

  const toggleSideBar = () => setIsSideBarOpen(!isSideBarOpen);

  return (
    <div className="h-full">
      <div className="h-16">
        <NavBar toggleSideBar={toggleSideBar} isSideBarOpen={isSideBarOpen} />
      </div>
      <div className="h-[calc(100%-64px)] overflow-auto">
        <div className="grid sm:grid-cols-[225px_auto] h-full">
          <div className="overflow-auto hidden sm:block">
            <SideBar
              selectedSection={selectedSection}
              changeSection={changeSection}
            />
          </div>
          <div className="overflow-auto absolute w-3/4 bg-white shadow">
            <SideBarMobile
              isSideBarOpen={isSideBarOpen}
              selectedSection={selectedSection}
              changeSection={changeSectionMobile}
            />
          </div>

          <main className="min-w-0 overflow-auto">
            {selectedSection === "getting-started" && (
              <div className="sm:p-10 p-5">
                <GettingStarted />
              </div>
            )}
            {sectionList.map(
              ({ heading, component, files, status }) =>
                selectedSection === heading && (
                  <div className="sm:p-10 p-5">
                    <ChartSection
                      isInProgress={status === "in-progress"}
                      heading={heading}
                      chart={component}
                      files={files}
                    />
                  </div>
                )
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
