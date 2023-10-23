import React from 'react'
import './index.scss'
import { Button, Flex, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import BankCard from '@/components/manage/BankCard'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { authActions } from '../auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

function Manage() {
  const userInfor = useSelector((state) => state.auth.userInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(authActions.getUserInfo())
  }, [])

  const handleLogout = () => {
    dispatch(authActions.logout())
  }
  console.log(userInfor)
  const listManage = [
    {
      name: 'Thông tin ngân hàng',
      url: '/manage/bank-info',
    },
    {
      name: 'Giấy Phép Thuế Kinh Doanh',
      url: '/manage/business-license',
    },
    {
      name: 'Tài Liệu Thuế ',
      url: '/manage/tax-documents',
    },
    {
      name: 'Lịch sử giao dịch',
      url: '/manage/transaction-history',
    },
    {
      name: 'Hội viên tuyến dưới',
      url: '/team',
    },
    {
      name: 'Mật khẩu rút tiền',
      url: '/manage/withdrawal-grant-password',
    },
    {
      name: 'Quản lý mật khẩu',
      url: '/manage/password-management',
    },
    // {
    //   name: 'Trung tâm trợ giúp ',
    //   url: '/manage/help-center',
    // },
  ]
  return (
    <div className='managerAll'>
      <Helmet>
        <title>Quản lí</title>
      </Helmet>
      <Flex flexDirection={'column'} w={'100%'} maxW={'600px'}>
        <Text
          color={'#3B22A1'}
          fontSize={'20px'}
          textAlign={'center'}
          fontWeight={700}
          pb={'8px'}
        >
          Quản lý
        </Text>
        <BankCard
          name={userInfor?.fullName}
          id={userInfor?.code}
          surplus={userInfor?.balance?.toLocaleString('vi-VN') + 'VND'}
          imageUrl={userInfor?.avatar}
        />
        <List pt={'21.5px'} spacing={3} pb={'20px'}>
          {listManage.map((item, index) => (
            <ListItem
              _hover={{ background: '#F5F5F5' }}
              key={index}
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              pb={'3.5px'}
              borderBottom={'1px solid #EDEDED'}
              onClick={() => navigate(item.url)}
            >
              <Text color={'#110816'} fontSize={'14px'} fontWeight={500}>
                {item.name}
              </Text>
              <ListIcon
                w={'24px'}
                h={'24px'}
                as={ChevronRightIcon}
                color='#110816'
              />
            </ListItem>
          ))}
          <Link to={'https://t.me/BlockchainFintechland'}>
            <ListItem
            pt={'8px'}
              _hover={{ background: '#F5F5F5' }}
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              pb={'3.5px'}
            >
              <Text color={'#110816'} fontSize={'14px'} fontWeight={500}>
              Trung tâm trợ giúp
              </Text>
              <ListIcon
                w={'24px'}
                h={'24px'}
                as={ChevronRightIcon}
                color='#110816'
              />
            </ListItem>
          </Link>
        </List>
        <Flex flexDirection={'column'} gap={3} alignItems={'center'}>
          <Button
            style={{ background: '#3B22A1', color: '#fff' }}
            width='60% !important'
            onClick={() => navigate('/manage/share')}
          >
            Chia sẻ
          </Button>
          <Button
            onClick={handleLogout}
            width='60% !important'
            style={{
              background: '#fff',
              border: '1px solid #3B22A1',
              color: '#3B22A1',
            }}
            variant={'outline'}
          >
            Đăng xuất
          </Button>
        </Flex>
      </Flex>
    </div>
  )
}

export default Manage
