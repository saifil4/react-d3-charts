import { TabList, Tab, Heading } from '@chakra-ui/react';
import sectionList from 'sections/section-list';

type SideBarProps = {
    handleClick: (sectionName: string) => void
}

const SideBar: React.FC<SideBarProps> = ({ handleClick }) => {

    return (
        <TabList
            as="nav"
            display="flex"
            flexDirection="column"
            backgroundColor="#fbfbfb"
            overflow="auto"
            w='100%'
            h='100%'
            p="7"
        >
            <ChartTab key='getting-started' name='Getting Started' handleClick={() => handleClick('getting-started')} />
            {
                sectionList.map((group) => (
                    <>
                        <br />
                        {group.name &&
                            <Heading
                                key={group.name}
                                textTransform="uppercase"
                                textColor="#091E42"
                                fontSize="small"
                                fontWeight="bolder"
                                mb="2"
                                pl="4"
                                as="h2">{group.name}</Heading>}
                        {
                            group.sections.map((section) => (
                                <ChartTab
                                    key={section.heading}
                                    name={section.heading}
                                    handleClick={() => handleClick(section.heading)} />
                            ))

                        }
                    </>
                ))
            }
        </TabList>
    )
}

export default SideBar;

type ChartTabProps = {
    key: string,
    name: string,
    handleClick: (key: string) => void
}

const ChartTab: React.FC<ChartTabProps> = ({ key, name, handleClick }) => {
    return (
        <Tab
            onClick={() => handleClick(key)}
            justifyContent="left"
            fontWeight="600"
            textColor="#626F86"
            _selected={{ backgroundColor: "brand.blue.500", color: "white" }}
            key={key}>{name}</Tab>
    )
}