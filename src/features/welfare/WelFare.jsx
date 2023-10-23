import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { Button } from '@chakra-ui/react'

import '@/styles/tabbutton.scss'
import Khung from '@/assets/images/khung.png'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment/moment'
import walfareicon from '../../assets/images/walfareicon.png'
import ConfirmSuccess from '../../components/modal/ConfirmSuccess'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { WelFareActions } from './WelFareSlice'
import LoadingSpiner from '../../components/loading/LoadingSpiner'

function WelFare() {
  const dispatch = useDispatch()

  const listRollCall = useSelector((state) => state.welFare.listRollCall)
  const statistic = useSelector((state) => state.welFare.statistic)
  const loading = useSelector((state) => state.welFare.loading)
  const isRecive = useSelector((state) => state.welFare.isRecive)
  useEffect(() => {
    dispatch(WelFareActions.getRollCall())
    dispatch(WelFareActions.getStatistic())
    dispatch(WelFareActions.reciveFail())
  }, [])
  console.log(listRollCall, statistic)
  function tinhSoNgayDiemDanhLienTuc(danhSach) {
    let soNgayLienTuc = 0
    let coDiemDanh = false
    let array = danhSach.map((k) => k)?.reverse()

    for (let i = 0; i < array?.length; i++) {
      if (array[i]?.status === 'received') {
        coDiemDanh = true
        soNgayLienTuc++
      } else {
        if (coDiemDanh) {
          break
        }
      }
    }

    return soNgayLienTuc
  }
  const handleRecive = () => {
    dispatch(WelFareActions.recive())
  }
  return (
    <>
      {loading && <LoadingSpiner />}
      {isRecive && (
        <ConfirmSuccess
          image={walfareicon}
          title={'Chúc mừng bạn nhận được'}
          content={
            listRollCall?.datas
              ?.find((item) => item.day === moment().format('DD/MM/YYYY'))
              ?.balance?.toLocaleString('vi-VN') + 'VNĐ'
          }
          url={'/welfare'}
        ></ConfirmSuccess>
      )}
      <Flex
        justifyContent={'center'}
        w={'100%'}
        h={'100%'}
        p={'46px 23px 89px 24px'}
      >
        <Flex w={'100%'} maxW={'600px'} flexDirection={'column'}>
          <Flex mt={'20px'} justifyContent={'center'}>
            <Text color={'#3B22A1'} fontSize={'20px'} fontWeight={700}>
              {' '}
              Phúc lợi
            </Text>
          </Flex>
          <Flex
            //   justifyContent={'center'}
            flexDirection={'column'}
            gap={4}
            mt={'16px'}
          >
            {
              <Flex
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Flex
                  flexDirection={'column'}
                  backgroundRepeat='no-repeat'
                  backgroundSize='cover'
                  backgroundImage={`url(${Khung})`}
                  height={'194px'}
                  width={'368px'}
                  flex={'0 0 auto'}
                  p={'20px 24px'}
                  color={'#110816'}
                >
                  <Flex flexDirection={'row'} justifyContent={'space-between'}>
                    <Text fontSize={'16px'} fontWeight={400}>
                      Số dư hiện có :
                    </Text>
                    <Text fontSize={'16px'} fontWeight={600}>
                      {statistic?.balance?.toLocaleString('vi-VN')} VNĐ
                    </Text>
                  </Flex>
                  <Flex flexDirection={'row'} justifyContent={'space-between'}>
                    <Text fontSize={'16px'} fontWeight={400}>
                      Thu nhâp hôm nay:
                    </Text>
                    <Text fontSize={'16px'} fontWeight={600}>
                      {statistic?.todayEarn?.toLocaleString('vi-VN')} VNĐ
                    </Text>
                  </Flex>
                  <Flex
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    borderBottom={'2px solid #DDB509'}
                  >
                    <Text fontSize={'16px'} fontWeight={400} pb={3}>
                      Thu nhập từ tuyến dưới:
                    </Text>
                    <Text fontSize={'16px'} fontWeight={600}>
                      {statistic?.agentEarn?.toLocaleString('vi-VN')} VNĐ
                    </Text>
                  </Flex>
                  <Text
                    pt={'10px'}
                    fontSize={'16px'}
                    fontWeight={400}
                    textAlign={'center'}
                  >
                    Dòng tiền thu nhập
                  </Text>
                  <Flex justifyContent={'center'} alignItems={'center'} gap={2}>
                    <Text
                      fontSize={'24px'}
                      fontWeight={500}
                      textAlign={'center'}
                    >
                      {statistic?.orderEarn?.toLocaleString('vi-VN')} VNĐ
                    </Text>
                    <Text fontSize={'14px'} fontWeight={500}>
                      VNĐ
                    </Text>
                  </Flex>
                </Flex>
                <Text
                  m={'16px 0'}
                  display={'flex'}
                  justifyContent={'center'}
                  borderRadius={'4px'}
                  p={'8px 16px'}
                  w={'318px'}
                  fontSize={'12px'}
                  fontWeight={500}
                  background={'#3B22A1'}
                  color={'#fff'}
                >
                  Tổng lợi nhuận tháng:{' '}
                  {listRollCall?.balanceRollCall?.toLocaleString('vi-VN')} VNĐ
                </Text>
                <Calendar
                  value={new Date()}
                  // minDate={new Date()}
                  // maxDate={new Date()}
                  tileContent={({ date, view }) => {
                    const a = listRollCall?.datas?.find(
                      (item) => item.day === moment(date).format('DD/MM/YYYY')
                    )
                    return (
                      <Text
                        color={a?.status == 'lost' ? 'gray.300' : '#68CE5F'}
                      >
                        {a ? a?.balance / 1000 + 'K' : ''}
                      </Text>
                    )
                  }}
                  //   onChange={changeDate}
                />
                <Flex
                  flexDirection={'column'}
                  alignItems={'center'}
                  mt={'8px'}
                  w={'100%'}
                >
                  <Text mb={2} fontSize={'14px'} fontWeight={500}>
                    Bạn đã điểm danh liên tục được{' '}
                    {listRollCall?.datas &&
                      tinhSoNgayDiemDanhLienTuc(listRollCall?.datas)}{' '}
                    ngày
                  </Text>
                  <Button
                    h={'50px'}
                    color={'#fff'}
                    background={'#FF8A00'}
                    width={'50%'}
                    onClick={handleRecive}
                  >
                    Điểm danh
                  </Button>
                </Flex>
              </Flex>
            }
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default WelFare
