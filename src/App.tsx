import './App.css';
import { LinePlot } from './charts/linechart';
import { BarChart } from './charts/barchart';
import { SideBar } from './layouts/sidebar';
import { Tabs, TabPanels, TabPanel } from '@chakra-ui/react';
import { PanelData } from './panel-data';

function App() {

  return (
    <Tabs variant='soft-rounded' display="flex" h="100%">
      <SideBar />
      <TabPanels as="main" w='100%' h='100%'>
        {
          PanelData.map((group) => (
            group.panels.map(({ name, component: Component }) => (
              <TabPanel key={name}>
                <Component />
              </TabPanel>
            ))
          ))
        }
      </TabPanels>
    </Tabs>
  )
}

export default App

