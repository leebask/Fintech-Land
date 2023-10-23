import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text } from '@chakra-ui/react'

function DigitalTime({ value, type }) {
  return (
    <Flex
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Text
        color={'#3B22A1'}
        fontFamily={'Digital Numbers '}
        fontSize={'20px'}
        fontStyle={'normal'}
        lineHeight={'normal'}
      >
        {value}
      </Text>
      <Text pl={2} color={'#3B22A1'} fontSize={'16px'} textAlign={'center'}>
        {type}
      </Text>
    </Flex>
  )
}

DigitalTime.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
}

export default DigitalTime
