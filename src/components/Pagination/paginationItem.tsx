import { Button } from '@chakra-ui/button'

interface PaginationItemProps {
  isCurrent?: boolean
  number: number
}

export function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="blue"
        disabled
        _disabled={{
          bgColor: 'blue.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    )
  } else {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="blue"
        bg="gray.700"
        _hover={{
          bg: 'gray.500',
        }}
      >
        {number}
      </Button>
    )
  }
}
