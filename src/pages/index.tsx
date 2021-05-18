import { Flex, Button, Stack, Text } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
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
      >
        <Stack stack={4}>
          <Text fontSize="2xl" textAlign="center">
            Faça login para acessar o terminal
          </Text>
          <Input type="email" name="email" label="E-mail:" />
          <Input type="password" name="password" label="Password:" />
        </Stack>
        <Button type="submit" mt={6} colorScheme="blue" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
