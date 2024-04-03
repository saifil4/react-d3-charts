import './App.css';
import { SideBar } from './layouts/sidebar';
import { Tabs, TabPanels, TabPanel } from '@chakra-ui/react';
import { PanelData } from './panel-data';
import ChartCodeViewer from './panels/ChartCodeViewer';
import About from './panels/About';
import GettingStarted from './panels/GettingStarted';

function App() {

  return (
    <Tabs variant='soft-rounded' display="grid" gridTemplateColumns="350px auto" height="100%">
      <SideBar />
      <TabPanels as="main" minW="0" overflow="auto">
        <TabPanel key="about">
          <About />
        </TabPanel>
        <TabPanel key="getting-started">
          <GettingStarted />
        </TabPanel>
        {
          PanelData.map((group) => (
            group.panels.map(({ heading, component, code }) => (
              <TabPanel key={heading} p="10">
                <ChartCodeViewer heading={heading} code={code} chart={component} />
              </TabPanel>
            ))
          ))
        }
      </TabPanels>
    </Tabs>
  )
}

export default App

