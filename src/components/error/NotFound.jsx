import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

NotFound.propTypes = {}
function NotFound() {
  const navigate = useNavigate()
  return (
    <Flex justifyContent={'center'} w={'100%'} h={'100%'} p={' 46px 23px 89px 24px'}>
      <Flex w={'100%'} maxW={'600px'} flexDirection={'column'}>
        <Flex
          justifyContent={'center'}
          alignContent={'center'}
          flexDirection={'column'}
          w={'100%'}
          pb={4}
        >
          <Helmet>
            <title>Not found</title>
          </Helmet>
          <Text textAlign='center' fontSize='3xl'>
            Không tìm thấy trang này!
          </Text>
          <Flex justifyContent={'center'} mt={4}>
            <Button
              width={'60%'}
              background={'#3B22A1'}
              color={'#fff'}
              onClick={() => navigate('/home')}
            >
              Quay về trang chủ
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default NotFound
