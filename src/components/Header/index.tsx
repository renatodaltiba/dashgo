import {
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
  Text,
  Button,
} from '@chakra-ui/react'
import Router from 'next/router'
import { destroyCookie } from 'nookies'
import React from 'react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { api } from '../../services/api'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'
export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  async function handleLogout() {
    await api
      .delete('auth')
      .then(() => {
        destroyCookie(undefined, 'auth_token')
        Router.push('/')
      })
      .catch(() => {
        console.log('não foi possível realizar o logout')
      })
  }
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          aria-label="Open navigation"
          mr="2"
        ></IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
      <Button ml="3" size="m" colorScheme="red" p="1" onClick={handleLogout}>
        logout
      </Button>
    </Flex>
  )
}
