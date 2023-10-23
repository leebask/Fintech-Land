import { Box, Flex, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import Logo1 from '@/assets/images/logowelcome1.png'
import Logo2 from '@/assets/images/logowelcome2.png'

function WelcomeScreen() {
  return (
    <div className='welcomeScreen__container'>
      <div className='welcomeScreen'>
        <div className='welcomeScreen__logo1'>
          <Image width={'100%'} height={'100%'} src={Logo1} alt='logo' />
        </div>
        <div
          // justifyContent={'center'}
          // // p={12}
          // height={'60vh'}
          // width={'100%'}
          className='welcomeScreen__logo2'
          // background={
          //   'linear-gradient(180deg, rgba(59, 34, 161, 0.00) -66.46%, #3B22A1 34.99%)'
          // }
        >
          <Image width={'80%'} height={'50%'} src={Logo2} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default WelcomeScreen
