import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { useNavigate } from 'react-router'
import { List, ListItem } from '@chakra-ui/react'

import '@/styles/tabbutton.scss'
import { useDispatch, useSelector } from 'react-redux'
import { ManageActions } from '../../features/manage/ManageSlice'
import { useEffect } from 'react'
import moment from 'moment/moment'
import LoadingSpiner from '@/components/loading/LoadingSpiner'

function TransactionHistory() {
  const navigate = useNavigate()
  const [tab, setTab] = React.useState(0)
  const loading = useSelector((state) => state.manage.loading)
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
              Lịch sử giao dịch
            </Text>
            <div></div>
          </Flex>
          <Flex mt={'20px'}>
            <Text
              w={'50% !important'}
              className={tab === 0 ? 'tab_btn tab_action' : 'tab_btn'}
              onClick={() => setTab(0)}
            >
              Nạp tiền
            </Text>
            <Text
              w={'50% !important'}
              className={tab === 1 ? 'tab_btn tab_action' : 'tab_btn'}
              onClick={() => setTab(1)}
            >
              Rút tiền
            </Text>
            <Text
              w={'50% !important'}
              className={tab === 2 ? 'tab_btn tab_action' : 'tab_btn'}
              onClick={() => setTab(2)}
            >
              Giao dịch
            </Text>
          </Flex>
          <Flex
            //   justifyContent={'center'}
            flexDirection={'column'}
            gap={4}
            mt={'16px'}
          >
            {tab === 0 ? (
              <List pt={'16px'} spacing={3} pb={'20px'}>
                <ReChargeMoney tab={tab}></ReChargeMoney>
              </List>
            ) : tab === 1 ? (
              <Flex flexDirection={'column'}>
                <Text color={'#999'} fontSize={'14px'} fontWeight={400}>
                  1. Nền tảng sẽ xử lý các yêu cầu rút tiền trong thời gian
                  thực.
                </Text>
                <Text color={'#999'} fontSize={'14px'} fontWeight={400}>
                  2. Hạn mức rút tiền bằng số dư tài khoản trừ phí xử lý
                </Text>
                <List pt={'16px'} spacing={3} pb={'20px'}>
                  <WithDrawMoney tab={tab}></WithDrawMoney>
                </List>
              </Flex>
            ) : (
              <Flex>
                <Flex flexDirection={'column'} width={'100%'}>
                  <List pt={'16px'} spacing={3} pb={'20px'}>
                    <Transaction></Transaction>
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
const WithDrawMoney = ({ tab }) => {
  console.log(tab)

  const dispatch = useDispatch()
  const data = useSelector((state) => state.manage.historyWithDraw)
  const loading = useSelector((state) => state.manage.loading)
  console.log(data)
  useEffect(() => {
    dispatch(ManageActions.historyWithDraw(1)) //truyền page number
  }, [])
  function increasePageNumber() {
    dispatch(ManageActions.historyWithDraw(Math.ceil(data.length / 10) + 1))
  }

  let isFetching = false // Biến để kiểm tra xem đang lấy dữ liệu hay không

  window.addEventListener('scroll', function () {
    // Kiểm tra xem người dùng đã cuộn đến cuối trang hay chưa
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 10
    ) {
      // Kiểm tra xem đang lấy dữ liệu hay không
      if (
        !isFetching &&
        tab === 0 &&
        data.length >= 10 &&
        data.length % 10 === 0
      ) {
        isFetching = true // Đánh dấu đang lấy dữ liệu

        // Gọi hàm để tăng số trang lên
        increasePageNumber()

        // Đợi một khoảng thời gian nhất định trước khi đánh dấu là không lấy dữ liệu nữa
        setTimeout(function () {
          isFetching = false // Đánh dấu không lấy dữ liệu
        }, 1000) // Thời gian đợi (milliseconds)
      }
    }
  })
  return (
    <>
      {data.map((item, index) => (
        <ListItem
          key={index}
          _hover={{ background: '#F5F5F5' }}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          pb={'3.5px'}
          borderBottom={'1px solid #EDEDED'}
          //   onClick={() => navigate(item.url)}
        >
          <Flex flexDirection={'column'}>
            <Text color={'#110816'} fontSize={'14px'} fontWeight={400}>
              {moment(item?.createdAt).format('YYYY/MM/DD HH:mm:ss')}
            </Text>
            <Text color={'#999'} fontSize={'16px'} fontWeight={400}>
              Số lượng
            </Text>
            <Text color={'#999'} fontSize={'16px'} fontWeight={400}>
              Phí thủ tục
            </Text>
            <Text color={'#999'} fontSize={'16px'} fontWeight={400}>
              Số tiền vào tài khoản
            </Text>
          </Flex>
          <Flex flexDirection={'column'}>
            {item?.status === 'pending' ? (
              <Text color={'#F40808'} fontSize={'16px'} fontWeight={500}>
                Đang xem xét
              </Text>
            ) : item?.status === 'approved' ? (
              <Text color={'green'} fontSize={'16px'} fontWeight={500}>
                Hoàn tất
              </Text>
            ) : (
              <Text color={'red'} fontSize={'16px'} fontWeight={500}>
                Thất bại
              </Text>
            )}

            <Text color={'#110816'} fontSize={'16px'} fontWeight={400}>
              {item?.amount.toLocaleString('vi-VN')} VND
            </Text>
            <Text color={'#110816'} fontSize={'16px'} fontWeight={400}>
              {(item?.amount - item?.amountTransfer).toLocaleString('vi-VN')}
            </Text>
            <Text color={'#110816'} fontSize={'16px'} fontWeight={400}>
              {item?.amountTransfer.toLocaleString('vi-VN')} VND
            </Text>
          </Flex>
        </ListItem>
      ))}
    </>
  )
}
const Transaction = () => {
  const dispath = useDispatch()
  const data = useSelector((state) => state.manage.historyTransaction)
  const loading = useSelector((state) => state.manage.loading)
  useEffect(() => {
    dispath(ManageActions.historyTransaction())
  }, [])
  console.log(data)
  return (
    <>
      {data.map((item, index) => (
        <ListItem
          key={index}
          _hover={{ background: '#F5F5F5' }}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          pb={'3.5px'}
          borderBottom={'1px solid #EDEDED'}
          //   onClick={() => navigate(item.url)}
        >
          <Flex flexDirection={'column'}>
            <Text color={'#999'} fontSize={'14px'} fontWeight={400}>
              {moment(item?.createdAt).format('YYYY/MM/DD HH:mm:ss')}
            </Text>
            <Text
              color={'#110816'}
              fontSize={'16px'}
              fontWeight={400}
              maxW={'90%'}
            >
              {item?.description}
            </Text>
          </Flex>
          <Text color={'#3B22A1'} fontSize={'16px'} fontWeight={600}>
            {item?.isCredit ? '+' : '-'}
            {item?.amount.toLocaleString('vi-VN')} VND
          </Text>
        </ListItem>
      ))}
    </>
  )
}
const ReChargeMoney = ({ tab }) => {
  console.log(tab)
  const dispatch = useDispatch()
  const data = useSelector((state) => state.manage.historyRecharge)
  const loading = useSelector((state) => state.manage.loading)
  console.log(data)
  useEffect(() => {
    dispatch(ManageActions.historyRecharge(1)) //truyền page number
  }, [])
  function increasePageNumber() {
    dispatch(ManageActions.historyRecharge(Math.ceil(data.length / 10) + 1))
  }

  let isFetching = false // Biến để kiểm tra xem đang lấy dữ liệu hay không

  window.addEventListener('scroll', function () {
    // Kiểm tra xem người dùng đã cuộn đến cuối trang hay chưa
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 10
    ) {
      // Kiểm tra xem đang lấy dữ liệu hay không
      if (
        !isFetching &&
        tab === 0 &&
        data.length >= 10 &&
        data.length % 10 === 0
      ) {
        isFetching = true // Đánh dấu đang lấy dữ liệu

        // Gọi hàm để tăng số trang lên
        increasePageNumber()

        // Đợi một khoảng thời gian nhất định trước khi đánh dấu là không lấy dữ liệu nữa
        setTimeout(function () {
          isFetching = false // Đánh dấu không lấy dữ liệu
        }, 1000) // Thời gian đợi (milliseconds)
      }
    }
  })

  return (
    <>
      {data.map((item, index) => (
        <ListItem
          key={index}
          _hover={{ background: '#F5F5F5' }}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          pb={'3.5px'}
          borderBottom={'1px solid #EDEDED'}
          //   onClick={() => navigate(item.url)}
        >
          <Flex flexDirection={'column'}>
            <Text color={'#110816'} fontSize={'14px'} fontWeight={400}>
              {moment(item?.createdAt).format('YYYY/MM/DD HH:mm:ss')}
            </Text>
            <Text color={'#999'} fontSize={'16px'} fontWeight={400}>
              Số lượng
            </Text>
            <Text color={'#999'} fontSize={'16px'} fontWeight={400}>
              Tên ngân hàng
            </Text>
            <Text color={'#999'} fontSize={'16px'} fontWeight={400}>
              Chủ tài khoản
            </Text>
            <Text color={'#999'} fontSize={'16px'} fontWeight={400}>
              Số tài khoản
            </Text>
          </Flex>
          <Flex flexDirection={'column'}>
            {item?.status === 'pending' ? (
              <Text color={'#F40808'} fontSize={'16px'} fontWeight={500}>
                Đang xem xét
              </Text>
            ) : item?.status === 'approved' ? (
              <Text color={'green'} fontSize={'16px'} fontWeight={500}>
                Hoàn tất
              </Text>
            ) : (
              <Text color={'red'} fontSize={'16px'} fontWeight={500}>
                Thất bại
              </Text>
            )}
            <Text color={'#110816'} fontSize={'16px'} fontWeight={400}>
              {item?.amount.toLocaleString('vi-VN')} VND
            </Text>
            <Text color={'#110816'} fontSize={'16px'} fontWeight={400}>
              {item?.nameBank}
            </Text>
            <Text color={'#110816'} fontSize={'16px'} fontWeight={400}>
              {item?.fullname}
            </Text>
            <Text color={'#110816'} fontSize={'16px'} fontWeight={400}>
              {item?.numberAccount}
            </Text>
          </Flex>
        </ListItem>
      ))}
    </>
  )
}
export default TransactionHistory
