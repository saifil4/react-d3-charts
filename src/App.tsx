import './App.css';
import { LinePlot } from './charts/linechart';
import { BarChart } from './charts/barchart';
import { SideBar } from './layouts/sidebar';
import { Tabs, TabPanels, TabPanel } from '@chakra-ui/react';
import { PanelData } from './panel-data';

function App() {

  return (
    <Tabs variant='soft-rounded' display="grid" gridTemplateColumns="350px auto" height="100%">
      <SideBar />
      <TabPanels as="main" minW="0" overflow="auto">
        {
          PanelData.map((group) => (
            group.panels.map(({ name, component: Panel }) => (
              <TabPanel key={name} p="10">
                <Panel />
              </TabPanel>
            ))
          ))
        }
      </TabPanels>
    </Tabs>
  )
}

export default App

