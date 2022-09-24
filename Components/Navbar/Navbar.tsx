import { Box, BoxProps, CloseButton, Drawer, DrawerContent, Flex, FlexProps, IconButton, Link, Switch, Text, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { ReactNode, ReactText } from "react";
import { FiHome } from 'react-icons/fi';

interface LinkItemProps {
    name: String,
}

interface NavbarProps extends BoxProps {
    onClose: () => void;
}

interface NavItemProps extends FlexProps {
    children: ReactNode;
}

interface MobileProps extends FlexProps {
    onOpen: () => void;
}

const LinkItems: Array<LinkItemProps> = [
    { name: 'Home' },
    { name: 'Projects' }

]

const NavItem = ({ children, ...rest }: NavItemProps) => {
    return (
        <Link href='#' style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex align={'center'} p='4' mx='4' role='group' cursor={'pointer'} _hover={{ bg: 'red', color: 'white' }} {...rest}>
                {children}
            </Flex>
        </Link>
    )
}

const NavbarContent = ({ onClose, ...rest }: NavbarProps) => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue('white', 'black')} borderRight='1px' borderRightColor={useColorModeValue('black', 'white')}
            w={{ base: 'full', md: 60 }} pos='fixed' h='full' {...rest}>
            <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
                <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
                    ASSHWIN.M
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={Math.random()}>
                    {link.name}
                </NavItem>
            ))}
            <Flex align={'center'} p='4' mx='4' position={'absolute'} bottom='20'>
                {colorMode === 'light' ? 'Dark' : 'Light'} mode
                <Switch onChange={toggleColorMode} px='3' />
            </Flex>

        </Box>
    )
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex ml={{ base: 0, md: 60 }} px={{ base: 4, md: 24 }} height='20' alignItems='center' bg={useColorModeValue('white', 'black')} borderBottomWidth='1px'
            borderBottomColor={useColorModeValue('black', 'white')} justifyContent='flex-start' {...rest}>
            <IconButton variant='outine' onClick={onOpen} aria-label='open-menu' icon={<FiHome />} />
            <Text fontSize='2xl' ml='8' fontFamily='monospace' fontWeight='bold'>
                ASSHWIN.M
            </Text>
        </Flex>
    )
}

export default function Navbar({ children }: { children: ReactNode }) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box minH="100vH" bg={useColorModeValue('gray.100', 'black')}>
            <NavbarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
            <Drawer autoFocus={false} isOpen={isOpen} placement='left' onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size='full'>
                <DrawerContent>
                    <NavbarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p='4'>
                {children}
            </Box>
        </Box>
    )

}