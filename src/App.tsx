import { useState } from "react";
import sectionList from "sections/section-list";
import ChartSection from "layouts/ChartSection";
import GettingStarted from "sections/GettingStarted";
import SideBar from "layouts/SideBar";
import NavBar from "layouts/NavBar";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const [selectedPanel, setSelectedPanel] = useState<string>("getting-started");

  const handleClick = (panel: string) => setSelectedPanel(panel);
  const toggleSideBar = () => setIsSideBarOpen(!isSideBarOpen);

  return (
    <div className="h-full">
      <div className="h-16">
        <NavBar toggleSideBar={toggleSideBar} />
      </div>
      <div className="h-[calc(100%-64px)] overflow-auto">
        <div className="grid sm:grid-cols-[225px_auto] h-full">
          <div className="hidden sm:block overflow-auto">
            <SideBar selectedPanel={selectedPanel} handleClick={handleClick} />
          </div>
          {isSideBarOpen && (
            <div className="overflow-auto absolute">
              <SideBar
                selectedPanel={selectedPanel}
                handleClick={handleClick}
              />
            </div>
          )}

          <main className="min-w-0 overflow-auto">
            {selectedPanel === "getting-started" && (
              <div className="sm:p-10 p-5">
                <GettingStarted />
              </div>
            )}
            {sectionList.map(
              ({ heading, component, files, status }) =>
                selectedPanel === heading && (
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
