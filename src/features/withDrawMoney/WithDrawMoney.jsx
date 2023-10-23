import { ChevronLeftIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

import '@/styles/tabbutton.scss'
import Khung from '@/assets/images/khung.png'

import { useNavigate } from 'react-router-dom'
import { set } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { WithDrawMoneyActions } from './WithDrawMoneySlice'
import { useEffect } from 'react'
import ConfirmSuccess from '../../components/modal/ConfirmSuccess'
import withdrawsuccess from '../../assets/images/withdrawsuccess.png'
import LoadingSpiner from '../../components/loading/LoadingSpiner'
function WithDrawMoney() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.withDrawMoney.loading)
  const success = useSelector((state) => state.withDrawMoney.success)

  const [show, setShow] = React.useState(false)
  const [valueInput, setValueInput] = React.useState({
    amount: 0,
    password: '',
  })

  useEffect(() => {
   dispatch(WithDrawMoneyActions.resetSuccess())
  }, [])
  
  const handleClick = () => setShow(!show)
  const handleMoney = () => {
    dispatch(WithDrawMoneyActions.withDrawMoney(valueInput))
  }
  return (
    <>
     {success && (
        <ConfirmSuccess
          image={withdrawsuccess}
          title={'Rút tiền thành công'}
          content={valueInput.amount?.toLocaleString('vi-VN') + 'VNĐ'}
          url={'/home'}
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
        <Flex
          //   justifyContent={'center'}
          flexDirection={'column'}
          gap={4}
          mt={'16px'}
        >
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
              Rút tiền
            </Text>
            <div></div>
          </Flex>
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
              <Flex
                maxW={'368px'}
                flexDirection={'column'}
                w={'100%'}
                borderRadius={'8px'}
              >
                <Text color={'#AC8C00'} fontSize={'16px'} fontWeight={500}>
                  Nhập số tiền Muốn rút (VNĐ)
                </Text>
                <Flex alignItems={'center'}>
                  <Text color={'#110816'} fontSize={'20px'} fontWeight={600}>
                    VNĐ
                  </Text>
                  <Input
                    type='number'
                    onChange={(e) =>
                      setValueInput({
                        ...valueInput,
                        amount: Number(e.target.value),
                      })
                    }
                    placeholder='Số tiền muốn rút'
                    borderLeft={'none'}
                    borderTop={'none'}
                    borderRight={'none'}
                  ></Input>
                </Flex>
              </Flex>
              <Flex
                maxW={'368px'}
                flexDirection={'column'}
                w={'100%'}
                borderRadius={'8px'}
              >
                <Text color={'#AC8C00'} fontSize={'16px'} fontWeight={500}>
                  Nhập mật khẩu
                </Text>
                <Flex alignItems={'center'}>
                  <InputGroup>
                    <Input
                      onChange={(e) =>
                        setValueInput({
                          ...valueInput,
                          password: e.target.value,
                        })
                      }
                      borderRightRadius={'10px !important'}
                      border={'1px solid #ECECEC !important'}
                      background={'#F9F9F9 !important'}
                      //   {...props}
                      //   ref={ref}
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                    />
                    <InputRightElement width='4.5rem'>
                      {show ? (
                        <ViewOffIcon onClick={handleClick} />
                      ) : (
                        <ViewIcon onClick={handleClick} />
                      )}

                      {/* <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button> */}
                    </InputRightElement>
                  </InputGroup>
                  {/* <Input
                    placeholder='Nhập mật khẩu'
                    borderLeft={'none'}
                    borderTop={'none'}
                    borderRight={'none'}
                  ></Input> */}
                </Flex>
              </Flex>
            </Flex>
            <Flex
              flexDirection={'column'}
              alignItems={'center'}
              mt={'8px'}
              w={'100%'}
            >
              <Button
                onClick={handleMoney}
                h={'50px'}
                color={'#fff'}
                background={'#3B22A1'}
                width={'280px'}
                mt={'24px'}
                isDisabled={
                  valueInput.amount > 0 && valueInput.password.length > 0
                    ? false
                    : true
                }
                isLoading={loading}
              >
                Xác nhận
              </Button>
            </Flex>
            <Flex
              flexDirection={'column'}
              alignItems={'start'}
              w={'100%'}
              color={'#110816'}
            >
              <Text fontWeight={600} fontSize={'20px'} pt={'24px'} pb={'12px'}>
                Hướng dẫn
              </Text>
              <Text fontWeight={500} fontSize={'14px'} pb={'12px'}>
                Quy định rút tiền :
              </Text>
            </Flex>

            <ul
              style={{
                display: 'flex',
                gap: 4,
                flexDirection: 'column',
                marginLeft: '20px',
              }}
            >
              <li>Số tiền rút nhỏ nhất là 500.000 vnđ </li>
              <li>
                Nạp/Rút Auto 24/24 hoạt động tất cả các ngày trong tuần kể cả
                ngày lễ, tết...{' '}
              </li>
              <li>
                Mỗi ngày chỉ được làm lệnh rút tiền 1 lần , phí rút tiền là 1%{' '}
              </li>
              <li>
                Sau khi làm lệnh rút tiền hiện trạng thái đã được phê duyệt thì
                tiền sẽ về tài khoản của quý khách{' '}
              </li>
              <li>
                Để tránh ảnh hưởng đến việc rút tiền yêu cầu hội viên liên kết
                thông tin người nhận tiền cho chính xác
              </li>{' '}
              <li>Mọi thắc mắc xin liên hệ CSKH để được xử lý nhanh nhất .</li>
            </ul>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    </>
  
  )
}

export default WithDrawMoney
