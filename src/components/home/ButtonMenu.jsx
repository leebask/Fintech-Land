import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'

function ButtonMenu({ icon, title, bg, boxShadow, url }) {
  const navigate = useNavigate()
  return (
    <>
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        onClick={() => {
          if (title == 'Đối tác') {
            console.log(document.getElementById('partner').scrollIntoView())
          } else {
            navigate(url)
          }
        }}
      >
        <Flex
          className='btn_menu'
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            background={bg}
            boxShadow={boxShadow}
            className='bg_icon'
          >
            <Image w={'20px'} h={'20px'} src={icon} />
          </Flex>
        </Flex>
        <Text pt={2}>{title}</Text>
      </Flex>
    </>
  )
}

export default ButtonMenu
