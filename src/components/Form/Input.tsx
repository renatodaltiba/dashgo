import {
  FormLabel,
  Input as ChakraInput,
  FormControl,
  InputProps as ChakraInputProrps,
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProrps {
  name: string
  label?: string
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id="email"
        focusBorderColor="blue.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900',
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}
