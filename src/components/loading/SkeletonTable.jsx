import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

function SkeletonTable() {
  return (
    <Stack className='container_all'>
      <Skeleton width={'200px'} height='50px' />
      <Skeleton height='50px' />
      <Skeleton height='50px' />
      <Skeleton height='50px' />
      <Skeleton height='50px' />
      <Skeleton height='50px' />
      <Skeleton height='50px' />
    </Stack>
  )
}

export default SkeletonTable
