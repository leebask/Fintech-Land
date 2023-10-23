import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { useNavigate } from 'react-router'
import TaxDocuments1 from '../../assets/images/manage/TaxDocuments1.png'
import { Image } from '@chakra-ui/image'

function TaxDocuments() {
  const navigate = useNavigate()
  return (
    <Flex justifyContent={'center'} w={'100%'} h={'100%'} p={'46px 23px 89px 24px'}>
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
            Tài liệu thuế
          </Text>
          <div></div>
        </Flex>
        <Flex
          justifyContent={'center'}
          flexDirection={'column'}
          gap={4}
          p={'0 10%'}
        >
          <Image
            src={TaxDocuments1}
            p={'16px 26px'}
            background={'#F4F1F1'}
          ></Image>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default TaxDocuments
