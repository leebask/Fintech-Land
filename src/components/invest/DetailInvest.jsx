import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { useNavigate } from 'react-router'
import { Image } from '@chakra-ui/image'
import logowelcome1 from '@/assets/images/logowelcome1.png'
import IconLocation from '@/assets/images/location.png'
import { Button, Divider } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { InvestActions } from '../../features/invest/InvestSlice'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import LoadingSpiner from '../loading/LoadingSpiner'
import ConfirmSuccess from '../modal/ConfirmSuccess'
import buysuccsess from '@/assets/images/buysuccsess.png'
import cancelinvest from '@/assets/images/cancelinvest.png'

import { useLayoutEffect } from 'react'
function DetailInvest() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const param = useParams()
  const detail = useSelector((state) => state.invest.detail)
  const loading = useSelector((state) => state.invest.loading)
  useEffect(() => {
    dispatch(InvestActions.getDetail(param.detail?.split(',')[0]))
  }, [])
  const isBuy = useSelector((state) => state.invest.isBuy)
  const isCancel = useSelector((state) => state.invest.isCancel)

  useLayoutEffect(() => {
    dispatch(InvestActions.buyInvestFail())
    dispatch(InvestActions.getMyInvestFail())
  }, [])
  const handleBuy = (e, item) => {
    e.stopPropagation()
    dispatch(
      InvestActions.buyInvest({
        package: item?._id,
      })
    )
  }
  const handleCancel = (e) => {
    e.stopPropagation()
    dispatch(InvestActions.cancelMyInvest(param.detail?.split(',')[2]))
  }
  console.log(param)
  return (
    <>
      {loading && <LoadingSpiner />}
      {isBuy && (
        <ConfirmSuccess
          image={buysuccsess}
          title={'Mua thành công'}
          content={Number(detail?.price)?.toLocaleString('vi-VN') + ' VNĐ'}
          // url={'/home'}
        ></ConfirmSuccess>
      )}
      {isCancel && (
        <ConfirmSuccess
          image={cancelinvest}
          title={'Bán thành công'}
          content={Number(detail?.price)?.toLocaleString('vi-VN') + ' VNĐ'}
          // url={'/home'}
        ></ConfirmSuccess>
      )}
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
              Đầu tư
            </Text>
            <div></div>
          </Flex>
          <Flex justifyContent={'center'} flexDirection={'column'} gap={4}>
            <Image src={logowelcome1}></Image>
            <Text color={'#3B22A1'} fontSize={'20px'} fontWeight={500}>
              {detail?.name}
            </Text>
            <Flex color={'#393939'} fontSize={'14px'} fontWeight={400} gap={1}>
              <Image src={IconLocation}></Image>
              {detail?.location}
            </Flex>
            <Text color={'#3B22A1'} fontSize={'20px'} fontWeight={500}>
              Thông tin cơ bản
            </Text>
            <Flex flexDirection={'column'} pl={'16px'} w={'100%'} gap={4}>
              <Flex flexDirection={'row'} justifyContent={'space-between'}>
                <Text w={'50%'} fontWeight={400}>
                  Giá mua
                </Text>
                <Text
                  w={'50%'}
                  display={'flex'}
                  fontWeight={500}
                  justifyContent={'end'}
                >
                  {detail?.price?.toLocaleString('vi-VN')} VNĐ
                </Text>
              </Flex>
              <Flex flexDirection={'row'} justifyContent={'space-between'}>
                <Text w={'50%'} fontWeight={400}>
                  Tổng lãi suất
                </Text>
                <Text
                  w={'50%'}
                  display={'flex'}
                  fontWeight={500}
                  justifyContent={'end'}
                >
                  {detail?.interestPercent} %
                </Text>
              </Flex>
              <Flex flexDirection={'row'} justifyContent={'space-between'}>
                <Text w={'50%'} fontWeight={400}>
                  Lợi nhuận hàng ngày
                </Text>
                <Text
                  w={'50%'}
                  display={'flex'}
                  fontWeight={500}
                  justifyContent={'end'}
                >
                  {detail?.interestDay?.toLocaleString('vi-VN')} VNĐ
                </Text>
              </Flex>
              <Flex flexDirection={'row'} justifyContent={'space-between'}>
                <Text w={'50%'} fontWeight={400}>
                  Tổng lợi nhuận
                </Text>
                <Text
                  w={'50%'}
                  display={'flex'}
                  fontWeight={500}
                  justifyContent={'end'}
                >
                  {(detail?.interestDay * detail?.duration)?.toLocaleString(
                    'vi-VN'
                  )}{' '}
                  VNĐ
                </Text>
              </Flex>
              <Flex flexDirection={'row'} justifyContent={'space-between'}>
                <Text w={'50%'} fontWeight={400}>
                  Hợp đồng
                </Text>
                <Text
                  w={'50%'}
                  display={'flex'}
                  fontWeight={500}
                  justifyContent={'end'}
                >
                  {Math.ceil(detail?.duration/24)} ngày
                </Text>
              </Flex>
            </Flex>
            <Divider />
          </Flex>
          <Text
            color={'#110816'}
            pt={'24px'}
            fontWeight={'400'}
            fontSize={'16px'}
          >
            {/* Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. */}
          </Text>
          <Flex flexDirection={'column'} alignItems={'center'} pt={'48px'}>
            {param.detail?.split(',')[1] === 'type=buy' ? (
              <Button
                h={'50px'}
                color={'#fff'}
                background={'#3B22A1'}
                width={'70%'}
                onClick={(e) => handleBuy(e, detail)}
              >
                Đồng ý mua{' '}
              </Button>
            ) : (
              <Button
                h={'50px'}
                color={'#fff'}
                background={'#3B22A1'}
                width={'70%'}
                onClick={(e) => handleCancel(e, detail)}
              >
                Hủy đầu tư{' '}
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default DetailInvest
