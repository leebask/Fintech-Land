/* eslint-disable react/prop-types */
import { authActions } from '@/features/auth/authSlice'
import '../../styles/Header.scss'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Divider,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { GoSignOut } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../assets/images/logo.png'

function Header() {
  //   const contextValue = useContext(AppContext)
  //   const { toggleLeftMenu } = contextValue

  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(authActions.logout())
  }

  return (
    <>
      <Box
        sx={{
          boxShadow:
            'rgb(238 238 238 / 25%) -2px -19px 0px -2px, rgb(142 142 142 / 30%) 0px 3px 7px -3px',
        }}
      >
        <Box className='header'>
          {/* <HamburgerIcon
            sx={{ cursor: 'pointer' }}
            fontSize='2xl'
            ref={ref}
          /> */}
          <Box className='header__title'>
              <Image src={Logo} maxW='100px'></Image>
            <Stack className='header__title__list'>
               
            </Stack>
          </Box>
          <Box display='flex' alignItems='center'>
            <Menu sx={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
              {({ isOpen }) => (
                <>
                  <MenuButton className='personal' isactive={isOpen ? 1 : 0}>
                    <Box display='flex' alignItems='center'>
                      <Avatar name={user.fullName} src={user.avatar} />
                    </Box>
                  </MenuButton>
                  <MenuList zIndex={20}>
                    <MenuItem
                      sx={{
                        background: 'unset !important',
                        cursor: 'unset',
                        _hover: {
                          backgroundColor: 'unset',
                        },
                      }}
                    >
                      <Box display='flex' alignItems='center'>
                        <Avatar name={user.fullName} src={user.avatar} />
                        <Text fontSize={16} ml={2}>{`${user.fullName}`}</Text>
                      </Box>
                    </MenuItem>
                    <Divider sx={{ borderColor: '#ccc' }} />
                    <MenuItem onClick={handleLogout} py={3}>
                      <Box display='flex' alignItems='center'>
                        <Icon
                          as={GoSignOut}
                          sx={{ color: 'rgba(0,0,0, 0.7) !important' }}
                        />
                        <Text ml={2}>Đăng xuất</Text>
                      </Box>
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Box>
        </Box>
        <Divider sx={{ borderBottom: '1px solid white' }} />
      </Box>
    </>
  )
}

export default Header
