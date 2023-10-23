import React, { useEffect } from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  ModalBody,
  Avatar,
  ModalOverlay,
  ModalContent,
  Modal,
  useDisclosure,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import { BsFillVolumeUpFill } from 'react-icons/bs'
import { useState } from 'react'
import home1 from '../../assets/images/home1.png'
import logowelcome1 from '../../assets/images/logowelcome1.png'
import Marquee from 'react-fast-marquee'
import { toast } from 'react-toastify'
import axiosClient from '../../api/axiosClient'
import { connectWS, wsConstants } from '../../utils/socket'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 400,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function CarouselsHome() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null)
  const [noti, setNoti] = React.useState('')
  const [dataWS, setDataWS] = useState({})
  const [contentWS, setContentWS] = useState('')
  const [count, setCount] = useState(1)

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    // connectWS()
    callAPINoti()
  }, [])

  // const [timeoutId, setTimeoutId] = useState(null)
  // const handleFinish = () => {
  //   clearTimeout(timeoutId) // Hủy bỏ timeout hiện tại (nếu có)
  //   const newTimeoutId = setTimeout(() => setNoti(''), 1000) // Tạo một timeout mới
  //   setTimeoutId(newTimeoutId) // Lưu trữ ID của timeout mới
  // }
  useEffect(() => {
    if (count > 1) {
      setNoti(contentWS)
    }
  }, [count])
  const callAPINoti = async () => {
    await axiosClient
      .get(
        'https://api.blockchainfintechland.com/public/setting/short-notification',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        setNoti(res.data?.results?.data.description)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }
  try {
    wsConstants.addEventListener('eventGlobal', (evt) => {
      console.log('Nhận được sự kiện "eventGlobal":', evt)
      onOpen()
      setDataWS(evt)
      setCount((prev) => prev + 1)
      setContentWS(
        '+' + evt?.user?.mobile +
          ' ' +
          (evt?.type == 'topup'
            ? `nạp tiền thành công ${
                Number(evt?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
              }`
            : evt?.type == 'withdraw'
            ? `rút tiền thành công ${
                Number(evt?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
              }`
            : evt?.type == 'sendSaving'
            ? `gửi quỹ thành công ${
                Number(evt?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
              }`
            : evt?.type == 'bonusF0'
            ? `thưởng ${
                Number(evt?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
              } tuyển F1 trên  ${
                Number(evt?.priceTotal)?.toLocaleString('vi-VN') + ' VNĐ'
              } `
            : evt?.type == 'bonusTopupLevel'
            ? `thưởng ${
                Number(evt?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
              } tuyển F1 trên   ${
                evt?.user?.mobile
              }  nạp tiền vào hệ thống`
            : evt?.type == 'interestPackageLevel'
            ? `thưởng ${
                Number(evt?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
              } tuyển F1 trên  ${
                evt?.user?.mobile
              } nhận lãi đầu tư hằng ngày`
            : evt?.type == 'interestPackage'
            ? `thưởng ${
                Number(evt?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
              } nhận lãi đầu tư hằng ngày`
            : evt?.type == 'sellPackage'
            ? `đã bán ${
                Number(evt?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
              } trên kênh đầu tư`
            : evt?.type == 'buyPackage'
            ? `đầu tư ${
                Number(evt?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
            } từ kênh mua`
            : dataWS?.type == 'returnPackage'
            ? `đã được trả tiền hết ${
              dataWS.packageName
            }`
            : dataWS?.type == 'returnSaving'
            ? `đã hoàn tất gửi quỹ đầu tư ${
              dataWS.packageName
              }`
            : '!')
      )
    })
  } catch (e) {
    console.error(e)
  }
  console.log(contentWS)
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: '',
      text: noti,
      image: home1,
    },
    // {
    //   title: '',
    //   text: noti,
    //   image: logowelcome1,
    // },
  ]

  return (
    <Box
      position={'relative'}
      height={'211px'}
      width={'full'}
      overflow={'hidden'}
    >
      {/* CSS files for react-slick */}
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      {/* Left Icon */}
      {/* <IconButton
        aria-label='left-arrow'
        variant='ghost'
        position='absolute'
        left={side}
        top={top}
        transform={'translate(0%, -80%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size='40px' />
      </IconButton> */}
      {/* Right Icon */}
      {/* <IconButton
        aria-label='right-arrow'
        variant='ghost'
        position='absolute'
        right={side}
        top={top}
        transform={'translate(0%, -80%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size='40px' />
      </IconButton> */}
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            // height={'6xl'}
            position='relative'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size='container.lg' height='211px' position='relative'>
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position='absolute'
                pl={4}
                top='85%'
                transform='translate(-8%, -40%)'
              >
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Flex alignItems={'center'} justifyContent={'flex-start'}>
                  <BsFillVolumeUpFill
                    size={'20px'}
                    color='#ffff'
                  ></BsFillVolumeUpFill>
                  <Text
                    pl={2}
                    pb={1}
                    fontSize={'10px'}
                    color='white'
                    w={'100%'}
                  >
                    <Marquee loop={count > 1 ? 1: 0}>
                      {card.text}
                    </Marquee>
                  </Text>
                </Flex>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
      <>
    {isOpen&&
      <Flex
      background={'#3B22A1'}
      border={'1px solid rgba(255, 255, 255, 0.21)'}
      boxShadow={'0px 4px 12px 0px rgba(59, 34, 161, 0.28)'}
      borderRadius={'32px'}
      mt={'70vh'}
      mr={'20vh'}
      w={'fit-content'}
      zIndex={1}
      position={'fixed'}
      bottom={0}
      left={0}
      mb={'80px'}
      ml={'8px'}
      p={'4px 8px'}
    >
      {/* <Modal  size={'xs'} onClose={onClose} isOpen={isOpen}>
      <ModalContent
        background={'#3B22A1'}
        border={'1px solid rgba(255, 255, 255, 0.21)'}
        boxShadow={'0px 4px 12px 0px rgba(59, 34, 161, 0.28)'}
        borderRadius={'32px'}
        mt={'70vh'}
        mr={'20vh'}
        w={'fit-content'}
      >
        <ModalBody> */}
      <Flex flexDirection={'row'}>
        <Flex pr={'8px'}>
          <Avatar name={dataWS?.user?.mobile} src={dataWS?.user?.avatar} />
        </Flex>
        <Flex
          justifyContent={'center'}
          flexDirection={'column'}
          alignItems={'start'}
          color={'#fff'}
        >
          <Text color={'#fff'} fontSize={'14px'} fontWeight={500}>
            +{dataWS?.user?.mobile}
          </Text>
          <Text color={'#A59CC6'} fontSize={'12px'} fontWeight={400}>
            {dataWS?.type == 'topup'
              ? `Nạp tiền thành công ${
                  Number(dataWS?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
                }`
              : dataWS?.type == 'withdraw'
              ? `Rút tiền thành công ${
                  Number(dataWS?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
                }`
              : dataWS?.type == 'sendSaving'
              ? `Gửi quỹ thành công ${
                  Number(dataWS?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
                }`
              : dataWS?.type == 'bonusF0'
              ? `Thưởng ${
                  Number(dataWS?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
                } tuyển F1 trên  ${
                  Number(dataWS?.priceTotal)?.toLocaleString('vi-VN') + ' VNĐ'
                } `
              : dataWS?.type == 'sellPackage'
              ? `đã bán ${
                  Number(dataWS?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
                } trên kênh đầu tư`
              : dataWS?.type == 'buyPackage'
              ? `đầu tư ${
                  Number(dataWS?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
                } từ kênh mua`
              : dataWS?.type == 'returnPackage'
              ? `đã được trả tiền hết ${dataWS.packageName}`
              : dataWS?.type == 'returnSaving'
              ? `đã hoàn tất gửi quỹ đầu tư ${dataWS.packageName}`
              : 'Không xác định được. Liên hệ kỹ thuật!'}
          </Text>
        </Flex>
      </Flex>
      {/* </ModalBody>
      </ModalContent>
    </Modal> */}
    </Flex>
    }
    
    </>
    </Box>
  )
}
