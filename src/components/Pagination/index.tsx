import { Button } from '@chakra-ui/button'
import { Box, Stack } from '@chakra-ui/layout'
import { PaginationItem } from './paginationItem'

export function Pagination() {
  return (
    <Stack
      direction={['row', 'column']}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
        <PaginationItem number={6} />
      </Stack>
    </Stack>
  )
}
