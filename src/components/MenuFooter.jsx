import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Flex, Image, Text } from '@chakra-ui/react'
import menu1 from '../assets/images/menufooter/menu1.png'
import menu2 from '../assets/images/menufooter/menu2.png'
import menu3 from '../assets/images/menufooter/menu3.png'
import menu4 from '../assets/images/menufooter/menu4.png'
import menu5 from '../assets/images/menufooter/menu5.png'
import menu6 from '../assets/images/menufooter/menu6.png'
import menu1_1 from '../assets/images/menufooter/menu1_1.png'
import menu2_2 from '../assets/images/menufooter/menu2_2.png'
import menu3_3 from '../assets/images/menufooter/menu3_3.png'
import menu4_4 from '../assets/images/menufooter/menu4_4.png'
import menu5_5 from '../assets/images/menufooter/menu5_5.png'
import menu6_6 from '../assets/images/menufooter/menu6_6.png'

import { useNavigate } from 'react-router-dom'
import NotiWS from './modal/NotiWS'

function MenuFooter(props) {
  const url = '/' + window.location.pathname.split('/')[1]
  const navigate = useNavigate()
  const listMenu = [
    {
      image: menu1,
      imageActive: menu1_1,
      text: 'Home',
      url: '/home',
    },
    {
      image: menu2,
      imageActive: menu2_2,
      text: 'Đầu tư ',
      url: '/invest',
    },
    {
      image: menu3,
      imageActive: menu3_3,
      text: 'Hợp đồng',
      url: '/contract',
    },
    {
      image: menu4,
      imageActive: menu4_4,
      text: 'Gửi quỹ',
      url: '/send-funds',
    },
    {
      image: menu5,
      imageActive: menu5_5,
      text: 'Phúc lợi',
      url: '/welfare',
    },
    {
      image: menu6,
      imageActive: menu6_6,
      text: 'Quản lý',
      url: '/manage',
    },
  ]
  return (
    <>
      {url != '/home' && <NotiWS />}

      <Flex justifyContent={'center'}>
        <Flex
          height={'66px'}
          background={'#3B22A1'}
          borderTop={'1px solid #FFF'}
          borderRadius={'32px 32px 0px 0px;'}
          color={'#A59CC6'}
          justifyContent={'space-around'}
          alignItems={'center'}
          p={'11px 12px 1px 12px'}
          maxWidth={'600px'}
          position={'fixed'}
          bottom={'0'}
          w={'100%'}
          cursor={'pointer'}
        >
          {listMenu.map((item, index) => (
            <React.Fragment key={index}>
              <Image
                onClick={() => navigate(item.url)}
                borderBottom={url === item.url && '1px solid #fff'}
                pb={'10px'}
                src={url === item.url ? item.imageActive : item.image}
              ></Image>
              {url === item.url && (
                <Text
                  onClick={() => navigate(item.url)}
                  pb={'10px'}
                  color='#fff'
                  fontWeight={700}
                  fontSize={'12px'}
                >
                  {item.text}
                </Text>
              )}
            </React.Fragment>
          ))}
        </Flex>
      </Flex>
    </>
  )
}

MenuFooter.propTypes = {}

export default MenuFooter
