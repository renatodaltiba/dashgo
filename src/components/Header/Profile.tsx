import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import Router from 'next/router'
import { destroyCookie } from 'nookies'

import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { api } from '../../services/api'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  const { user } = useContext(AuthContext)

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{user?.name}</Text>
          <Text color="gray.300" fontSize="small">
            {user?.email}
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Diego Fernandes"
        src="https://github.com/renato.png"
      />
    </Flex>
  )
}
