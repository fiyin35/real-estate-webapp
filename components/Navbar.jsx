import {FcMenu, FcHome, FcAbout} from 'react-icons/fc';
import Link from 'next/link';
import { Menu, MenuItem, MenuButton, Box, Flex, Spacer, IconButton, MenuList } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs';
import { FiKey }  from 'react-icons/fi'

const Navbar = () =>  (
    <>
      <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="3xl" fontWeight="bold" color="blue.400">
           <Link href="/" paddingleft="2"> Realtor </Link>
        </Box>
        <Spacer />
        <Box>
          <Menu> 
            <MenuButton as={IconButton} color="red.400" icon={<FcMenu />} variant="outlined" />
            <MenuList> 
              <Link href="/" passHref>
                <MenuItem icon={ <FcHome /> }> Home </MenuItem>
              </Link>

              <Link href="/search" passHref>
                <MenuItem icon={ <BsSearch /> }> Search  </MenuItem>
              </Link>

              <Link href="/search?purpose=for-sale" passHref>
                <MenuItem icon={ <FcAbout /> }> Buy Property  </MenuItem>
              </Link>

              <Link href="/search?purpose=for-rent" passHref>
                <MenuItem icon={ <FiKey /> }> Rent Property  </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </>
  );


export default Navbar;
