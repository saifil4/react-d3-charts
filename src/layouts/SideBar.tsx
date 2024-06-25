import { TabList, Tab, Heading } from '@chakra-ui/react';
import { chartList } from 'react-d3/charts/chart-list';

type SideBarProps = {
    handleClick: (sectionName: string) => void
}

const SideBar: React.FC<SideBarProps> = ({ handleClick }) => {

    return (
        <TabList
            as="nav"
            display="flex"
            flexDirection="column"
            w='100%'
            h='100%'
            p="7"
        >
            <Heading as="h1" fontSize="30px">Reactive Charts</Heading>
            <br />
            <Tab justifyContent="left" key="getting-started">Getting Started</Tab>
            {
                chartList.map((group) => (
                    <>
                        <br />
                        {group.name &&
                            <Heading
                                textTransform="uppercase"
                                textColor="navy"
                                fontSize="small"
                                mb="2"
                                pl="4"
                                as="h2">{group.name}</Heading>}
                        {
                            group.sections.map((section) => (
                                <Tab
                                    onClick={() => handleClick(section.heading)}
                                    justifyContent="left"
                                    key={section.heading}>{section.heading}</Tab>
                            ))

                        }
                    </>
                ))
            }
        </TabList>
    )
}

export default SideBar