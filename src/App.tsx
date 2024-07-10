import { useState } from "react";
import sectionList from "sections/section-list";
import ChartSection from "layouts/ChartSection";
import GettingStarted from "sections/GettingStarted";
import SideBar from "layouts/SideBar";
import NavBar from "layouts/NavBar";

function App() {
  const [selectedPanel, setSelectedPanel] = useState<string>("getting-started");

  const handleClick = (panel: string) => setSelectedPanel(panel);

  return (
    <div className="h-full">
      <div className="h-16">
        <NavBar />
      </div>
      <div className="h-calc(100% - 64px)">
        <div className="grid grid-cols-[200px_auto] h-full">
          <div className="xs:hidden">
            <SideBar handleClick={handleClick} />
          </div>
          <main className="min-w-0 overflow-auto">
            {selectedPanel === "getting-started" && (
              <div className="p-10">
                <GettingStarted />
              </div>
            )}
            {sectionList.map(
              ({ heading, component, files, status }) =>
                selectedPanel === heading && (
                  <div className="p-10">
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
