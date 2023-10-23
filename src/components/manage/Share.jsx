import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { useNavigate } from 'react-router'
import InviteFriend from '../../assets/images/manage/invitefriend.png'
import { Image } from '@chakra-ui/image'
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../features/auth/authSlice'
import { useEffect } from 'react'

function Share() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const refcode = useSelector((state) => state.auth?.userInfo?.code)
  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(function () {
        toast.success('Đã sao chép thành công!')
      })
      .catch(function (err) {
        toast.error('Lỗi khi sao chép:', err)
      })
  }

  useEffect(() => {
   
    dispatch(authActions.getUserInfo())
  }, [])
  

  return (
    <Flex
      justifyContent={'center'}
      w={'100%'}
      h={'100%'}
      p={'46px 23px 89px 24px'}
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
            Chia sẻ
          </Text>
          <div></div>
        </Flex>
        <Flex
          justifyContent={'center'}
          flexDirection={'column'}
          gap={4}
          p={'10px 10%'}
        >
          <Image src={InviteFriend} p={'16px 26px'}></Image>
        </Flex>
        <FormControl>
          <FormLabel color={'#3B22A1'} fontWeight={500} fontSize={'16px'}>
            Mã đăng kí
          </FormLabel>
          <Input value={refcode || ''} background={'#F9F9F9'} />
        </FormControl>
        <FormControl>
          <FormLabel color={'#3B22A1'} fontWeight={500} fontSize={'16px'}>
            Link đăng ký:
          </FormLabel>
          <Input
            value={'https://blockchainfintechland.com/register/'+refcode}
            background={'#F9F9F9'}
          />
        </FormControl>
        <Flex justifyContent={'center'} pt={'36px'}>
          <Button
            h={'50px'}
            color={'#fff'}
            background={'#3B22A1'}
            width={'70%'}
            onClick={() =>
              copyToClipboard(
                `Mã đăng kí: ${refcode}\nLink đăng kí: https://blockchainfintechland.com/register/${refcode}`
              )
            }
          >
            Sao chép
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Share
