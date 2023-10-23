import React from 'react'
import PropTypes from 'prop-types'
import { Container, Flex, Image, Text } from '@chakra-ui/react'
import project1 from '../../assets/images/project/project1.png'
import Logo2 from '../../assets/images/logowelcome2.png'
import bathtub from '../../assets/images/project/bathtub.png'
import bed from '../../assets/images/project/bed.png'
import ruler from '../../assets/images/project/ruler.png'

import { TiLocation } from 'react-icons/ti'
function ProjectCard({ title, description, location, price }) {
  return (
    <Flex
      boxShadow={'0px 0px 20px 0px rgba(0, 0, 0, 0.08);'}
      border={' 0.5px solid #F0F0F0;'}
      width={'48%'}
      borderRadius={'2px'}
      background={'#fff'}
      flexDirection={'column'}
      p={'4px'}
      m={'5px 0'}
    >
      <Flex
        position='relative'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundImage={`url(${project1})`}
        height={'103px'}
        width={'100%'}
        p={'2px'}
        flexDirection={'column'}
      >
        <Flex justifyContent={'flex-end'}>
          <Image width={'41px'} height={'29px'} src={Logo2} alt='logo' />
        </Flex>
        <Container size='container.lg' height='103x' position='relative'>
          <Flex
            flexDirection={'column'}
            color={'#fff'}
            spacing={6}
            w={'full'}
            maxW={'lg'}
            position='absolute'
            pl={1}
            pb={1}
            top='95%'
            transform='translate(-8%, 120%)'
          >
            <Text fontSize={'12px'}>{title}</Text>
            <Flex alignItems={'center'} justifyContent={'flex-start'}>
              <TiLocation size={'10px'} color='#ffff'></TiLocation>
              <Text pl={'1px'} fontSize={'7px'} color='white'>
                {location}
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <Flex p={2} flexDirection={'column'}>
        <Text fontSize={'10px'} fontWeight={'500'} color={'#393939'}>
          {description}
        </Text>
        <Flex justifyContent={'space-between'} pt={2}>
          <Flex alignItems={'center'} color={'#393939'}>
            <Image width={'16px'} height={'16px'} src={ruler} alt='' />
            <Text pl={'4px'} fontSize={'8px'}>
              <p>
                50-140cm <sup>2</sup>
              </p>
            </Text>
          </Flex>
          <Flex alignItems={'center'} color={'#393939'}>
            <Image width={'16px'} height={'16px'} src={bathtub} alt='' />
            <Text pl={'4px'} fontSize={'8px'}>
              1-3
            </Text>
          </Flex>
          <Flex alignItems={'center'} color={'#393939'}>
            <Image width={'16px'} height={'16px'} src={bed} alt='' />
            <Text pl={'4px'} fontSize={'8px'}>
              1-3
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        fontSize={'10px'}
        color={'#393939'}
        width={'100%'}
        height={'29px'}
        fontWeight={'400'}
      >
        <Text
          textAlign={'center'}
          p={'7px 5px;'}
          width={'50%'}
          border={'0.5px solid #DEDDDD'}
          textTransform={'lowercase'}
        >
          {price}
        </Text>
        <Text
          textAlign={'center'}
          p={'7px 5px;'}
          width={'50%'}
          border={'0.5px solid #DEDDDD'}
        >
          Xem chi tiết
        </Text>
      </Flex>
    </Flex>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.string,
}

export default ProjectCard
