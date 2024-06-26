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
            overflow="auto"
            w='100%'
            h='100%'
            py="7"
            px="4"
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
                                textColor="brand.blue.500"
                                fontSize="smaller"
                                fontWeight="bolder"
                                mb="3"
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
            fontWeight="500"
            fontSize="15px"
            textColor="gray.700"
            _selected={{ backgroundColor: "brand.blue.100", color: "brand.blue.700", fontWeight: "700" }}
            key={key}>{name}</Tab>
    )
}