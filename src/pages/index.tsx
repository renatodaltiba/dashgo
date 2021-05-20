import { Flex, Button, Stack, Text } from '@chakra-ui/react'
import { FormEvent, useState, useContext } from 'react'
import { Input } from '../components/Form/Input'
import { AuthContext } from '../contexts/AuthContext'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const data = {
      email,
      password,
    }

    signIn(data)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit}
      >
        <Stack stack={4}>
          <Text fontSize="2xl" textAlign="center">
            Faça login para acessar o terminal
          </Text>
          <Input
            type="email"
            name="email"
            label="E-mail:"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            label="Password:"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Stack>
        <Button type="submit" mt={6} colorScheme="blue" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
