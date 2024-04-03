import { TabList, Tab, Heading } from '@chakra-ui/react';
import { PanelData } from '../../panel-data';

export function SideBar() {

    return (
        <TabList
            as="nav" 
            display="flex" 
            flexDirection="column" w='100%' h='100%' bg='gray.100' p="7">
            <Heading as="h1" fontSize="30px">Reactive Charts</Heading>
            <br />
            <Tab justifyContent="left" key="about">About</Tab>
            <Tab justifyContent="left" key="getting-started">Getting Started</Tab>
            {
                PanelData.map((group) => (
                    <>
                        <br />
                        {group.name && <Heading textTransform="uppercase" textColor="navy" fontSize="small" mb="2" pl="4" as="h2">{group.name}</Heading>}
                        {
                            group.panels.map((panel) => (
                                <Tab justifyContent="left" key={panel.heading}>{panel.heading}</Tab>
                            ))

                        }
                    </>
                ))
            }
        </TabList>
    )
}