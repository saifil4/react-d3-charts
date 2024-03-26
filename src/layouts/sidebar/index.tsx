import { TabList, Tab, Heading } from '@chakra-ui/react';
import { PanelData } from '../../panel-data';

export function SideBar() {

    return (
        <TabList as="nav" display="flex" flexDirection="column" w='100%' h='100%' bg='gray.100' p="7" maxW="350px">
            <Heading as="h1">React Charts</Heading>
            {
                PanelData.map((group) => (
                    <>
                        <br />
                        {group.name && <Heading textTransform="uppercase" textColor="navy" fontSize="small" mb="2" pl="4" as="h2">{group.name}</Heading>}
                        {
                            group.panels.map((panel) => (
                                <Tab justifyContent="left" key={panel.name}>{panel.name}</Tab>
                            ))

                        }
                    </>
                ))
            }
        </TabList>
    )
}