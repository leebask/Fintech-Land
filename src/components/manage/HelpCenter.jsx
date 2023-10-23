import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authActions } from '../../features/auth/authSlice'

function HelpCenter() {
  const navigate = useNavigate()

useEffect(() => {
  navigate('https://t.me/BlockchainFintechland')
}, [])
  return (
    <Flex
      justifyContent={'center'}
      w={'100%'}
      h={'100%'}
      p={'10px 23px 89px 24px'}
    >
      <Flex w={'100%'} maxW={'600px'} flexDirection={'column'}>
        <Flex
          justifyContent={'space-between'}
          alignContent={'center'}
          w={'100%'}
          pb={4}
        >
          <ChevronLeftIcon
            cursor={'pointer'}
            onClick={() => navigate(-1)}
            color={'#110816'}
            w={7}
            h={7}
          />
          <Text color={'#3B22A1'} fontWeight={700} fontSize={'20px'}>
            {' '}
            Online Help
          </Text>
          <div></div>
        </Flex>
        <Flex>
          <>
            {/* <iframe
              id='chatToChat'
              title='Live Chat'
              src={`https://direct.lc.chat/15914286/?uid=${Number(userInfor?.code)}`}
              width='100%'
              style={{ height: '100vh' }}
            ></iframe> */}
          </>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HelpCenter
