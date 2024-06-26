import {
    Box,
    Heading,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface Props {
    children: React.ReactNode
}


const NavLink = (props: Props) => {
    const { children } = props
    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={'#'}>
            {children}
        </Box>
    )
}

export default function WithAction() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box h="100%" px={4} borderBottom="1px solid #f3f4f7">
            <Flex h="100%" alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Box>
                        <HStack>
                            <img src='/logo.svg' alt='logo' width='32px' height='32px' />
                            <Heading textColor="gray.700" fontSize="larger"> React D3 Charts</Heading>
                        </HStack>
                    </Box>
                    {/* <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </HStack> */}
                </HStack>
                <Flex alignItems={'center'}>
                    <Button
                        variant={'solid'}
                        bgColor={'gray.100'}
                        size={'sm'}
                        mr={4}>
                        Github
                    </Button>
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {/* {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))} */}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    )
}