import { Avatar, Flex } from '@chakra-ui/react'
import React from 'react'
import avatarsupport from '../assets/images/avatarsupport.png'
import { Link } from 'react-router-dom'
function AvatarSupport() {
  return (
    <Flex zIndex={1} position={'fixed'} bottom={0} right={0} mb={'80px'} >
        <Link to={'https://t.me/BlockchainFintechland'}>
      <Avatar  h={'80px'} name='suport' src={avatarsupport}></Avatar>

        </Link>
    </Flex>
  )
}

export default AvatarSupport
