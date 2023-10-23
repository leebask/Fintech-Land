import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { Button, Card, Image, List, ListItem } from '@chakra-ui/react'

import '@/styles/tabbutton.scss'
import IconLocation from '@/assets/images/location.png'
import logowelcome1 from '@/assets/images/logowelcome1.png'
import dividerIcon from '@/assets/images/dividerIcon.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { InvestActions } from './InvestSlice'
import { useEffect } from 'react'
import LoadingSpiner from '../../components/loading/LoadingSpiner'
import ConfirmSuccess from '../../components/modal/ConfirmSuccess'
import buysuccsess from '@/assets/images/buysuccsess.png'
import cancelinvest from '@/assets/images/cancelinvest.png'

import { useLayoutEffect } from 'react'
import moment from 'moment'

function Invest() {
  const [tab, setTab] = React.useState(0)
  const loading = useSelector((state) => state.invest.loading)

  return (
    <>
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
              Kênh mua
            </Text>
            <Text
              w={'50% !important'}
              className={tab === 1 ? 'tab_btn tab_action' : 'tab_btn'}
              onClick={() => setTab(1)}
            >
              Kênh bán
            </Text>
          </Flex>
          <Flex
            //   justifyContent={'center'}
            flexDirection={'column'}
            gap={4}
            mt={'16px'}
          >
            {tab === 0 && (
              <Flex flexDirection={'column'}>
                <List pt={'16px'} spacing={3} pb={'20px'}>
                  <InvestItem1 />
                </List>
              </Flex>
            )}
            {tab === 1 && (
              <Flex>
                <Flex flexDirection={'column'} width={'100%'}>
                  <List pt={'16px'} spacing={3} pb={'20px'}>
                    <InvestItem2 />
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

const InvestItem1 = ({ type }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const listInvest = useSelector((state) => state.invest.list)
  const isBuy = useSelector((state) => state.invest.isBuy)
  const [chosseValue, setChosseValue] = React.useState({})
  useLayoutEffect(() => {
    dispatch(InvestActions.buyInvestFail())
  }, [])
  useEffect(() => {
    dispatch(InvestActions.getList())
  }, [])
  const handleBuy = (e, item) => {
    e.stopPropagation()
    setChosseValue(item)
    dispatch(
      InvestActions.buyInvest({
        package: item?._id,
      })
    )
  }
  return (
    <>
      {isBuy && (
        <ConfirmSuccess
          image={buysuccsess}
          title={'Mua thành công'}
          content={Number(chosseValue?.price)?.toLocaleString('vi-VN') + ' VNĐ'}
          // url={'/home'}
        ></ConfirmSuccess>
      )}
      {listInvest.map((item, index) => (
        <ListItem
          key={index}
          onClick={() => navigate('/invest/' + item?._id + ',' + 'type=buy')}
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
              {item?.name}
            </Text>
            <Flex color={'#393939'} fontSize={'14px'} fontWeight={400} gap={1}>
              <Image src={IconLocation}></Image>
              {item?.location}
            </Flex>
            <Flex pt={'17px'} color={'#110816'} fontSize={'14px'}>
              <Image
                w={'109px'}
                h={'78px'}
                borderRadius={'5px'}
                src={item?.image}
              ></Image>
              <Flex flexDirection={'column'} pl={'16px'} w={'100%'}>
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
                    {item?.price?.toLocaleString('vi-VN')} VNĐ
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
                    {item?.interestPercent} %
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
                    {item?.interestDay?.toLocaleString('vi-VN')} VNĐ
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
                    {(
                      item?.interestDay * Math.ceil(item?.duration / 24)
                    )?.toLocaleString('vi-VN')}{' '}
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
                    {Math.ceil(item?.duration / 24)} ngày
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Text
              color={'#F40808'}
              fontSize={'12px'}
              fontWeight={500}
              pt={'17px'}
            >
              Lãi suất sẽ trả hàng ngày, tiền gốc sẽ hoàn lại sau khi kết thúc
              hợp đồng
            </Text>
            <Flex flexDirection={'column'} alignItems={'center'}>
              <Image p={'16px 0'} src={dividerIcon}></Image>
              <Button
                h={'50px'}
                color={'#fff'}
                background={'#3B22A1'}
                width={'70%'}
                onClick={(e) => handleBuy(e, item)}
              >
                Đồng ý mua{' '}
              </Button>
            </Flex>
          </Card>
        </ListItem>
      ))}
    </>
  )
}
const InvestItem2 = ({ type }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const listInvest = useSelector((state) => state.invest.list)
  const isCancel = useSelector((state) => state.invest.isCancel)
  const [chosseValue, setChosseValue] = React.useState({})
  useLayoutEffect(() => {
    dispatch(InvestActions.cancelMyInvestFail())
  }, [])
  useEffect(() => {
    dispatch(InvestActions.getMyInvest())
  }, [])
  const handleCancel = (e, item) => {
    e.stopPropagation()
    setChosseValue(item?.package)
    dispatch(InvestActions.cancelMyInvest(item?._id))
  }

  return (
    <>
      {isCancel && (
        <ConfirmSuccess
          image={cancelinvest}
          title={'Bán thành công'}
          content={Number(chosseValue?.price)?.toLocaleString('vi-VN') + ' VNĐ'}
          // url={'/home'}
        ></ConfirmSuccess>
      )}
      {listInvest.map((item, index) => (
        <ListItem
          key={index}
          onClick={() =>
            navigate('/invest/' + item?.package?._id + ',' + 'type=cancel'+ ',' + item?._id)
          }
          _hover={{ background: '#F5F5F5' }}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          //   borderBottom={'1px solid #EDEDED'}
          //   onClick={() => navigate(item.url)}
          boxShadow={'0px 0px 20px 0px rgba(0, 0, 0, 0.08'}
        >
          <Card p={'20px'} flexDirection={'column'} w={'100%'}>
            <Text
              color={'#23B217'}
              fontSize={'16px'}
              fontWeight={600}
              display={'flex'}
              justifyContent={'end'}
            >
              Đang đầu tư
            </Text>
            <Text color={'#3B22A1'} fontSize={'20px'} fontWeight={500}>
              {item?.package?.name}
            </Text>
            <Flex color={'#393939'} fontSize={'14px'} fontWeight={400} gap={1}>
              <Image src={IconLocation}></Image>
              {item?.package?.location}
            </Flex>
            <Flex pt={'17px'} color={'#110816'} fontSize={'14px'}>
              <Image
                w={'109px'}
                h={'78px'}
                borderRadius={'5px'}
                src={item?.package?.image}
              ></Image>
              <Flex flexDirection={'column'} pl={'16px'} w={'100%'}>
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
                    {item?.package?.price?.toLocaleString('vi-VN')} VNĐ
                  </Text>
                </Flex>
                <Flex flexDirection={'row'} justifyContent={'space-between'}>
                  <Text w={'50%'} fontWeight={400}>
                    Tổng lãi suất
                  </Text>
                  <Text
                    backgroundColor={'#F4F1FF'}
                    borderRadius={'8px'}
                    w={'auto'}
                    p={'1px 10px'}
                    display={'flex'}
                    fontWeight={500}
                    justifyContent={'end'}
                  >
                    {item?.package?.interestPercent} %
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
                    {item?.package?.interestDay?.toLocaleString('vi-VN')} VNĐ
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
                    {(
                      item?.package?.interestDay *
                      Math.ceil(item?.package?.duration / 24)
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
                    {item?.package?.duration} ngày
                  </Text>
                </Flex> */}
                <Flex flexDirection={'row'} justifyContent={'space-between'}>
                  <Text w={'50%'} fontWeight={400}>
                    Thời gian còn lại
                  </Text>
                  <Text
                    w={'50%'}
                    display={'flex'}
                    fontWeight={500}
                    justifyContent={'end'}
                  >
                    <CountTime
                      time={moment(item?.createdAt).add(
                        Math.ceil(item?.package?.duration / 24),
                        'days'
                      )}
                    ></CountTime>
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Text
              color={'#F40808'}
              fontSize={'12px'}
              fontWeight={500}
              pt={'17px'}
            >
              Lãi suất sẽ trả hàng ngày, tiền gốc sẽ hoàn lại sau khi kết thúc
              hợp đồng
            </Text>
            <Flex flexDirection={'column'} alignItems={'center'}>
              <Image p={'16px 0'} src={dividerIcon}></Image>
              <Button
                h={'50px'}
                color={'#fff'}
                background={'#3B22A1'}
                width={'70%'}
                onClick={(e) => handleCancel(e, item)}
              >
                Hủy đầu tư{' '}
              </Button>
            </Flex>
          </Card>
        </ListItem>
      ))}
    </>
  )
}

const CountTime = ({ time }) => {
  const [dateView, setDateView] = React.useState(timeExited(time))
  const [count, setCount] = React.useState(0)
  useEffect(() => {
    let a = setInterval(() => {
      setDateView(timeExited(time))
      setCount((count) => count + 1)
    }, 1000)

    return () => {
      clearInterval(a)
    }
  }, [count])
  function timeExited(endTime) {
    const now = moment()
    const targetTime = moment(endTime)

    const duration = moment.duration(targetTime.diff(now))

    if (duration.asMilliseconds() <= 0) {
      return '00:00:00'
    } else if (duration.asHours() >= 24) {
      const days = Math.floor(duration.asDays())
      return `${days} ngày`
    } else {
      const hours = Math.floor(duration.asHours())
      const minutes = Math.floor(duration.asMinutes()) % 60
      const seconds = Math.floor(duration.asSeconds()) % 60

      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      return formattedTime
    }
  }
  return <>{dateView}</>
}
export default Invest
