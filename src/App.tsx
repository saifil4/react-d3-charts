import { useState } from 'react';
import { Tabs, TabPanels, TabPanel } from '@chakra-ui/react';
import { SectionData } from './sections/section-data';
import ChartCodeViewer from 'components/ChartCodeViewer';
import GettingStarted from 'sections/GettingStarted';
import SideBar from 'layouts/sidebar';

function App() {

  const [selectedPanel, setSelectedPanel] = useState<string>('getting-started');

  const handleClick = (panel: string) => {
    setSelectedPanel(panel);
  }

  return (
    <Tabs variant='soft-rounded' display="grid" gridTemplateColumns="300px auto" height="100%">
      <SideBar handleClick={handleClick} />
      <TabPanels as="main" minW="0" overflow="auto">
        <TabPanel p="10" key="getting-started">
          <GettingStarted />
        </TabPanel>
        {
          SectionData.map((group) => (
            group.panels.map(({ heading, component, files }) => (
              <TabPanel key={heading} p="10">
                {selectedPanel === heading &&
                  <ChartCodeViewer heading={heading} chart={component} files={files} />}
              </TabPanel>
            ))
          ))
        }
      </TabPanels>
    </Tabs>
  )
}

export default App

