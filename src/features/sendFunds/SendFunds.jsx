import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import {
  Button,
  Card,
  Divider,
  Image,
  Input,
  List,
  ListItem,
} from '@chakra-ui/react'

import '@/styles/tabbutton.scss'
import logowelcome1 from '@/assets/images/logowelcome1.png'
import Khung from '@/assets/images/khung.png'

import DigitalTime from '../../components/DigitalTime'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpiner from '../../components/loading/LoadingSpiner'
import { SendFundsActions } from './SendFundsSlice'
import { useEffect } from 'react'
import moment from 'moment'
import ConfirmSuccess from '../../components/modal/ConfirmSuccess'
import sendfundssuccess from '../../assets/images/sendfundssuccess.png'
import { useLayoutEffect } from 'react'

function SendFunds() {
  const dispatch = useDispatch()
  const listFunds = useSelector((state) => state.sendFunds?.listFunds)
  const loading = useSelector((state) => state.sendFunds.loading)
  const listMyFunds = useSelector((state) => state.sendFunds?.listMyFunds)
  const dataCardMoney = useSelector((state) => state.sendFunds?.dataCardMoney)

  const [tab, setTab] = React.useState(0)

  useEffect(() => {
    tab === 0
      ? dispatch(SendFundsActions.getListFunds())
      : dispatch(SendFundsActions.getListMyFunds())
  }, [tab])
  const isSendFunds = useSelector((state) => state.sendFunds.isSendFunds)
  useLayoutEffect(() => {
    dispatch(SendFundsActions.getListFundsFail())
    dispatch(SendFundsActions.getCardMoney())
  }, [])
  console.log(listFunds, 'ssssssss', listMyFunds)
  return (
    <>
      {isSendFunds && (
        <ConfirmSuccess
          image={sendfundssuccess}
          title={'Gửi quỹ thành công'}
        ></ConfirmSuccess>
      )}
      {loading && <LoadingSpiner />}
      <Flex
        justifyContent={'center'}
        w={'100%'}
        h={'100%'}
        p={'46px 23px 89px 24px'}
      >
        <Flex w={'100%'} maxW={'600px'} flexDirection={'column'}>
          <Flex mt={'20px'}>
            <Text
              w={'50% !important'}
              className={tab === 0 ? 'tab_btn tab_action' : 'tab_btn'}
              onClick={() => setTab(0)}
            >
              Quỹ đầu tư
            </Text>
            <Text
              w={'50% !important'}
              className={tab === 1 ? 'tab_btn tab_action' : 'tab_btn'}
              onClick={() => setTab(1)}
            >
              Quỹ của tôi
            </Text>
          </Flex>
          <Flex
            //   justifyContent={'center'}
            flexDirection={'column'}
            gap={4}
            mt={'16px'}
          >
            {tab === 0 && (
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
                  height={'164px'}
                  width={'368px'}
                  flex={'0 0 auto'}
                  p={'20px 24px'}
                  color={'#110816'}
                >
                  <Flex flexDirection={'row'} justifyContent={'space-between'}>
                    <Text fontSize={'16px'} fontWeight={400}>
                      Tài khoản hiện có:
                    </Text>
                    <Text fontSize={'16px'} fontWeight={600}>
                     {dataCardMoney?.balance?.toLocaleString('vi-VN')} VNĐ
                    </Text>
                  </Flex>
                  <Flex
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    borderBottom={'2px solid #DDB509'}
                  >
                    <Text fontSize={'16px'} fontWeight={400} pb={3}>
                      Tiền lãi:
                    </Text>
                    <Text fontSize={'16px'} fontWeight={600}>
                    {dataCardMoney?.totalInterest?.toLocaleString('vi-VN')} VNĐ
                    </Text>
                  </Flex>
                  <Text
                    pt={'10px'}
                    fontSize={'16px'}
                    fontWeight={400}
                    textAlign={'center'}
                  >
                    Tiền gửi tiết kiệm
                  </Text>
                  <Flex justifyContent={'center'} alignItems={'center'} gap={2}>
                    <Text
                      fontSize={'24px'}
                      fontWeight={500}
                      textAlign={'center'}
                    >
                     {dataCardMoney?.totalSaving?.toLocaleString('vi-VN')}
                    </Text>
                    <Text fontSize={'14px'} fontWeight={500}>
                      VNĐ
                    </Text>
                  </Flex>
                </Flex>
                {/* <Flex
                maxW={'368px'}
                flexDirection={'column'}
                w={'100%'}
                p={'16px'}
                mt={'16px'}
                border={'2px solid #DDB509'}
                borderRadius={'8px'}
              >
                <Text color={'#AC8C00'} fontSize={'16px'} fontWeight={500}>
                  Nhập số tiền bạn muốn đầu tư
                </Text>
                <Flex alignItems={'center'}>
                  <Text color={'#110816'} fontSize={'20px'} fontWeight={600}>
                    VNĐ
                  </Text>
                  <Input
                    placeholder='Số tiền đầu tư'
                    borderLeft={'none'}
                    borderTop={'none'}
                    borderRight={'none'}
                  ></Input>
                </Flex>
              </Flex> */}
                <List maxW={'368px'} pt={'16px'} spacing={3} pb={'20px'}>
                  {listFunds?.map((item, index) => (
                    <React.Fragment key={index}>
                      <SendItem data={item} type={0} />
                    </React.Fragment>
                  ))}
                </List>
              </Flex>
            )}
            {tab === 1 && (
              <Flex
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Flex flexDirection={'column'}>
                  <List maxW={'368px'} pt={'16px'} spacing={3} pb={'20px'}>
                    {listMyFunds?.map((item, index) => (
                      <React.Fragment key={index}>
                        <MyItem data={item} type={1} />
                      </React.Fragment>
                    ))}
                  </List>
                </Flex>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

const SendItem = ({ data, type }) => {
  const dispatch = useDispatch()

  const handleSendFunds = () => {
    dispatch(
      SendFundsActions.sendFunds({
        savingId: data?._id,
      })
    )
  }
  return (
    <>
      <ListItem
        _hover={{ background: '#F5F5F5' }}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        //   borderBottom={'1px solid #EDEDED'}
        //   onClick={() => navigate(item.url)}
        boxShadow={'0px 0px 20px 0px rgba(0, 0, 0, 0.08'}
      >
        <Card p={'20px'} flexDirection={'column'} w={'100%'}>
          <Text color={'#3B22A1'} fontSize={'20px'} fontWeight={500}>
            {data?.name}
          </Text>
          <Flex
            color={'#393939'}
            fontSize={'12px'}
            fontWeight={400}
            gap={0}
          ></Flex>
          <Flex pt={'17px'} color={'#110816'} fontSize={'14px'}>
            <Image
              border={'1px solid #DDB509'}
              w={'109px'}
              h={'78px'}
              borderRadius={'5px'}
              src={data?.image}
            ></Image>
            <Flex flexDirection={'column'} pl={'6px'} w={'100%'} fontSize={'13px'} gap={1}>
              <Flex flexDirection={'row'} justifyContent={'space-between'}>
                <Text w={'50%'} fontWeight={400}>
                  Số tiền gửi quỹ:
                </Text>
                <Text
                  w={'50%'}
                  display={'flex'}
                  fontWeight={500}
                  justifyContent={'end'}
                >
                  {data?.balance?.toLocaleString('vi-VN')} VNĐ
                </Text>
              </Flex>
              <Flex flexDirection={'row'} justifyContent={'space-between'}>
                <Text w={'50%'} fontWeight={400}>
                  Thu nhập ngày:
                </Text>
                <Text
                  w={'50%'}
                  display={'flex'}
                  fontWeight={500}
                  justifyContent={'end'}
                >
                  {data?.interestDay?.toLocaleString('vi-VN')} VNĐ
                </Text>
              </Flex>
              <Flex flexDirection={'row'} justifyContent={'space-between'}>
                <Text w={'50%'} fontWeight={400}>
                  Tổng thu nhập
                </Text>
                <Text
                  w={'50%'}
                  display={'flex'}
                  fontWeight={500}
                  justifyContent={'end'}
                >
                  {(data?.interestDay * data?.duration)?.toLocaleString(
                    'vi-VN'
                  )}{' '}
                  VNĐ
                </Text>
              </Flex>

              {/* <Flex flexDirection={'row'} justifyContent={'space-between'}>
                <Text w={'50%'} fontWeight={400}>
                  Hợp đồng
                </Text>
                <Text
                  w={'50%'}
                  display={'flex'}
                  fontWeight={500}
                  justifyContent={'end'}
                >
                  {data?.duration} ngày
                </Text>
              </Flex> */}
            </Flex>
          </Flex>
          <Flex pt={'11px'} flexDirection={'column'}>
            <Text textAlign={'center'} fontWeight={400}>
              Kỳ hạn
            </Text>
            <Flex w={'100%'} justifyContent={'space-between'} pt={'8px'}>
              <DigitalTime value={data?.duration} type={'Ngày'}></DigitalTime>
              <DigitalTime value={'00'} type={'Giờ'}></DigitalTime>
              <DigitalTime value={'00'} type={'Phút'}></DigitalTime>
              <DigitalTime value={'00'} type={'Giây'}></DigitalTime>
            </Flex>
          </Flex>
          <Text
            color={'#F40808'}
            fontSize={'12px'}
            fontWeight={500}
            pt={'17px'}
          >
            Thu nhập sẽ tự động hoàn trả lãi và gốc khi kết thúc hợp đồng quỹ
          </Text>
          <Flex flexDirection={'column'} alignItems={'center'} mt={'8px'}>
            {type === 0 ? (
              <Button
                h={'50px'}
                color={'#fff'}
                background={'#3B22A1'}
                width={'70%'}
                onClick={handleSendFunds}
              >
                Gửi quỹ
              </Button>
            ) : (
              <Button
                h={'50px'}
                color={'#fff'}
                background={'#23B217'}
                width={'70%'}
              >
                Đang gửi quỹ
              </Button>
            )}
          </Flex>
        </Card>
      </ListItem>
    </>
  )
}
const MyItem = ({ data, type }) => {
  const [dateView, setDateView] = React.useState(
    moment.duration(
      moment(
        moment(data?.createdAt)
          .add(data?.packageSaving?.duration, 'day')
          .diff(moment())
      )
    )
  )
  const [count, setCount] = React.useState(0)
  useEffect(() => {
    let a = setInterval(() => {
      setDateView(
        moment.duration(
          moment(
            moment(data?.createdAt)
              .add(data?.packageSaving?.duration, 'day')
              .diff(moment())
          )
        )
      )
      setCount((count) => count + 1)
    }, 1000)

    return () => {
      clearInterval(a)
    }
  }, [count])
  
  return (
    <ListItem
      _hover={{ background: '#F5F5F5' }}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      //   borderBottom={'1px solid #EDEDED'}
      //   onClick={() => navigate(item.url)}
      boxShadow={'0px 0px 20px 0px rgba(0, 0, 0, 0.08'}
    >
      <Card p={'20px'} flexDirection={'column'} w={'100%'}>
        <Text color={'#3B22A1'} fontSize={'20px'} fontWeight={500}>
          {data?.name}
        </Text>
        <Flex
          color={'#393939'}
          fontSize={'14px'}
          fontWeight={400}
          gap={1}
        ></Flex>
        <Flex pt={'17px'} color={'#110816'} fontSize={'14px'}>
          <Image
            border={'1px solid #DDB509'}
            w={'109px'}
            h={'78px'}
            borderRadius={'5px'}
            src={data?.packageSaving?.image}
          ></Image>
          <Flex flexDirection={'column'} pl={'16px'} w={'100%'}>
            <Flex flexDirection={'row'} justifyContent={'space-between'}>
              <Text w={'50%'} fontWeight={400}>
                Số tiền gửi quỹ:
              </Text>
              <Text
                w={'50%'}
                display={'flex'}
                fontWeight={500}
                justifyContent={'end'}
              >
                {data?.packageSaving?.balance?.toLocaleString('vi-VN')} VNĐ
              </Text>
            </Flex>
            <Flex flexDirection={'row'} justifyContent={'space-between'}>
              <Text w={'50%'} fontWeight={400}>
                Thu nhập ngày:
              </Text>
              <Text
                w={'50%'}
                display={'flex'}
                fontWeight={500}
                justifyContent={'end'}
              >
                {data?.packageSaving?.interestDay?.toLocaleString('vi-VN')} VNĐ
              </Text>
            </Flex>
            <Flex flexDirection={'row'} justifyContent={'space-between'}>
              <Text w={'50%'} fontWeight={400}>
                Tổng thu nhập
              </Text>
              <Text
                w={'50%'}
                display={'flex'}
                fontWeight={500}
                justifyContent={'end'}
              >
                {(
                  data?.packageSaving?.interestDay *
                  data?.packageSaving?.duration
                )?.toLocaleString('vi-VN')}{' '}
                VNĐ
              </Text>
            </Flex>

            {/* <Flex flexDirection={'row'} justifyContent={'space-between'}>
              <Text w={'50%'} fontWeight={400}>
                Hợp đồng
              </Text>
              <Text
                w={'50%'}
                display={'flex'}
                fontWeight={500}
                justifyContent={'end'}
              >
                {Math.ceil(data?.packageSaving?.duration/24)} ngày
              </Text>
            </Flex> */}
          </Flex>
        </Flex>
        <Flex pt={'11px'} flexDirection={'column'}>
          <Text textAlign={'center'} fontWeight={400}>
            Kỳ hạn
          </Text>

          <Flex w={'100%'} justifyContent={'space-between'} pt={'8px'}>
            <DigitalTime value={dateView.days()} type={'Ngày'}></DigitalTime>
            <DigitalTime value={dateView.hours()} type={'Giờ'}></DigitalTime>
            <DigitalTime value={dateView.minutes()} type={'Phút'}></DigitalTime>
            <DigitalTime value={dateView.seconds()} type={'Giây'}></DigitalTime>
          </Flex>
        </Flex>
        <Text color={'#F40808'} fontSize={'12px'} fontWeight={500} pt={'17px'}>
          Thu nhập sẽ tự động hoàn trả lãi và gốc khi kết thúc hợp đồng quỹ
        </Text>
        <Flex flexDirection={'column'} alignItems={'center'} mt={'8px'}>
          {type === 0 ? (
            <Button
              h={'50px'}
              color={'#fff'}
              background={'#3B22A1'}
              width={'70%'}
            >
              Gửi quỹ
            </Button>
          ) : (
            <Button
              h={'50px'}
              color={'#fff'}
              background={'#23B217'}
              width={'70%'}
            >
              Đang gửi quỹ
            </Button>
          )}
        </Flex>
      </Card>
    </ListItem>
  )
}

export default SendFunds
