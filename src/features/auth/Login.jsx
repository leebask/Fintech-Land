import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as React from 'react'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { InputField } from '../../components/custom/fields/InputField'
import { authActions } from './authSlice'
import './index.scss'
import Logo2 from '../../assets/images/logowelcome2.png'
import { Helmet } from 'react-helmet'
import AvatarSupport from '../../components/AvatarSupport'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const loading = useSelector((state) => state.auth.loading)

  const schema = yup.object({
    mobile: yup.string().required('Vui lòng nhập số điện thoại'),
    password: yup.string().required('Vui lòng nhập mẩu khẩu'),
  })
  console.log(location)
  useEffect(() => {
    console.log(location)
    if (isLoggedIn && location.state) {
      navigate(-1)
    } else if (isLoggedIn && !location.state) {
      navigate('/home')
    }
  }, [isLoggedIn])

  const handleLogin = (values) => {
    dispatch(
      authActions.login({
        ...values,
        mobile: '84' + values.mobile,
      })
    )
  }

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      mobile: '',
      password: '',
    },
  })

  const handleRegister = () => {
    navigate('/register')
  }
  return (
    <>
    <AvatarSupport/>
      <div className='LoginAllMain '>
        <Helmet>
          <title>Đăng nhập</title>
        </Helmet>
        <Flex justifyContent={'center'} className='LoginAll'>
          <Flex>
            <Image w={'116px'} h={'111px'} src={Logo2} alt='logo'></Image>
          </Flex>
          <Stack
            // width='500px'
            // maxW='400px'
            // minH='460px'
            alignItems='center'
            padding='8px 12px'
            margin={'5% !important'}
            width={'90%'}
            borderRadius={'13px'}
            backgroundColor='#FFF'
            // sx={{
            //   boxShadow:
            //     'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
            // }}
          >
            <Flex paddingTop={6} w={'100%'} justifyContent={'space-between'}>
              <Text className='text1' color={'#3B22A1'} fontWeight={'bold'}>
                Đăng nhập
              </Text>
              <Text
                onClick={handleRegister}
                className='text1'
                color={'#999'}
                fontWeight={'bold'}
              >
                Đăng ký
              </Text>
            </Flex>
            <form
              className='m-auto'
              style={{ width: '100%', marginTop: '50px' }}
              onSubmit={handleSubmit(handleLogin)}
            >
              <Controller
                name='mobile'
                control={control}
                render={({ field, fieldState: { error, isTouched } }) => {
                  return (
                    <InputField
                      {...field}
                      label='Số điện thoại'
                      placeholder='Nhập số điện thoại'
                      id='us'
                      error={error}
                      width='100%'
                      touched={isTouched ? 1 : 0}
                      // isRequired={true}
                      type='tel'
                    />
                  )
                }}
              />

              <Controller
                name='password'
                control={control}
                render={({ field, fieldState: { error, isTouched } }) => (
                  <InputField
                    {...field}
                    label='Mật khẩu'
                    placeholder='Nhập mật khẩu'
                    type='password'
                    id='pwd'
                    error={error}
                    touched={isTouched ? 1 : 0}
                    // isRequired={true}
                  />
                )}
              />
              <Flex justifyContent={'center'}>
                <Button
                  marginTop={'64px !important'}
                  marginBottom={'24px !important'}
                  type='submit'
                  width='70% !important'
                  disabled={loading}
                  display='flex'
                  alignItems='center'
                  color={'#FFFF'}
                  backgroundColor={'#3B22A1'}
                  isLoading={loading}
                >
                  Đăng nhập
                </Button>
              </Flex>
            </form>
            <Flex>
              <Text className='texthave'>Bạn đã có tài khoản?</Text>
              <Text onClick={handleRegister} className='textres'>
                Đăng kí{' '}
              </Text>
            </Flex>
          </Stack>
        </Flex>
      </div>
    </>
  )
}

export default Login
