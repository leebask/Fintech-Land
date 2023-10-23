import { Flex, Spinner } from '@chakra-ui/react'
import React from 'react'

function LoadingSpiner() {
  return (
    <Flex width={'100%'} alignContent={'center'}  justifyContent={'center'} height={'100vh'} alignItems={'center'} position={'fixed'} background={'#ffffffcc'}>
        <Spinner />
    </Flex>
  )
}

export default LoadingSpiner