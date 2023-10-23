import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'
import { InputField } from '../../components/custom/fields/InputField'
import './index.scss'
import Logo2 from '../../assets/images/logowelcome2.png'
import { TfiReload } from 'react-icons/tfi'
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha'
import { useEffect } from 'react'
import '@/styles/capchaInput.scss'
import { AccountRegisterActions } from './AccountRegisterSlice'
import { iToast } from '@/utils'
import { Helmet } from 'react-helmet'
import AvatarSupport from '../../components/AvatarSupport'

function AccountRegister() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const param = useParams()
  const [isTrueCapcha, setIsTrueCapcha] = React.useState(true)
  const [isAccept, setIsAccept] = React.useState(false)

  const loading = useSelector((state) => state.register.loading)

  const schema = yup.object({
    fullName: yup.string().required('Bắt buộc'),
    password: yup.string().required('Bắt buộc'),
    mobile: yup.string().required('Bắt buộc'),
    refCode: yup.string().required('Bắt buộc'),
    passwordConfirm: yup.string().required('Bắt buộc'),
  })

  // useEffect(() => {
  //   console.log(location)
  //   if (isLoggedIn && location.state) {
  //     navigate(-1)
  //   } else if (isLoggedIn && !location.state) {
  //     navigate('/users')
  //   }
  // }, [isLoggedIn])

  const handleRegister = (values) => {
    if (validateCaptcha(values.capcha)) {
      setIsTrueCapcha(true)

      if (isAccept) {
        dispatch(
          AccountRegisterActions.register({
            fullName: values.fullName,
            mobile:
              '84' +
              (values.mobile.split('')[0] == 0
                ? values.mobile.slice(1)
                : values.mobile),
            password: values.password,
            refCode: values.refCode || '',
          })
        )
      } else {
        iToast('Vui lòng đồng ý với chính sách để đăng kí!', 'warning')
      }
    } else {
      setIsTrueCapcha(false)
    }
  }

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    defaultValues: param?.code
      ? {
          mobile: '',
          password: '',
          refCode: param?.code,
          fullName: '',
          passwordConfirm: '',
        }
      : {
          mobile: '',
          password: '',
          refCode: '',
          fullName: '',
          passwordConfirm: '',
        },
  })
  useEffect(() => {
    // console.log("Hi buddy");
    loadCaptchaEnginge(4)
  }, [])
  const loadCaptchaAgain = () => {
    loadCaptchaEnginge(4)
  }
  console.log(param)
  return (
    <>
    <AvatarSupport/>
      <div className='RegisterAllMain'>
        <Helmet>
          <title>Đăng kí</title>
        </Helmet>
        <Flex justifyContent={'center'} className='RegisterAll'>
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
              <Text
                onClick={() => navigate('/login')}
                className='text1'
                color={'#999'}
                fontWeight={'bold'}
              >
                Đăng nhập
              </Text>
              <Text className='text1 ' color={'#3B22A1'} fontWeight={'bold'}>
                Đăng ký
              </Text>
            </Flex>
            <form
              className='m-auto'
              style={{ width: '100%', marginTop: '50px' }}
              onSubmit={handleSubmit(handleRegister)}
            >
              <Controller
                name='fullName'
                control={control}
                render={({ field, fieldState: { error, isTouched } }) => {
                  return (
                    <InputField
                      {...field}
                      label='Họ và tên'
                      placeholder='Nhập họ và tên'
                      id='us'
                      error={error}
                      width='100%'
                      touched={isTouched ? 1 : 0}
                      type='fullName'
                    />
                  )
                }}
              />
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
                    label='Nhập mật khẩu'
                    placeholder='Nhập mật khẩu'
                    type='password'
                    id='pwd'
                    error={error}
                    touched={isTouched ? 1 : 0}
                    // isRequired={true}
                  />
                )}
              />
              <Controller
                name='passwordConfirm'
                control={control}
                render={({ field, fieldState: { error, isTouched } }) => (
                  <InputField
                    {...field}
                    label='Nhập lại mật khẩu'
                    placeholder='Nhập lại mật khẩu'
                    type='password'
                    id='pwd'
                    error={error}
                    touched={isTouched ? 1 : 0}
                    // isRequired={true}
                  />
                )}
              />
              <Controller
                name='capcha'
                control={control}
                render={({ field, fieldState: { error, isTouched } }) => {
                  return (
                    <>
                      <FormControl
                        isInvalid={isTrueCapcha ? false : true}

                        // isRequired={isRequired}
                      >
                        <FormLabel color={'#3B22A1'}>Mã xác minh</FormLabel>
                        <InputGroup>
                          <Input
                            borderRightRadius={'10px !important'}
                            border={'1px solid #ECECEC !important'}
                            background={'#F9F9F9 !important'}
                            {...field}
                            pr='4.5rem'
                            // type={show ? 'text' : 'password'}
                          />
                          <InputRightElement
                            className='capchaclass'
                            width='4.5rem'
                          >
                            <Icon
                              as={TfiReload}
                              onClick={loadCaptchaAgain}
                            ></Icon>
                            <LoadCanvasTemplate
                              reloadText=' '
                              reloadColor='blue'
                            />
                          </InputRightElement>
                        </InputGroup>

                        <FormErrorMessage>
                          Mã xác minh không đúng. Vui lòng thử lại.
                        </FormErrorMessage>
                      </FormControl>
                    </>
                  )
                }}
              />
              <Controller
                name='refCode'
                control={control}
                render={({ field, fieldState: { error, isTouched } }) => {
                  return (
                    <InputField
                      {...field}
                      label='Mã giới thiệu (Bắt buộc)'
                      placeholder='Nhập mã giới thiệu'
                      id='us'
                      error={error}
                      width='100%'
                      touched={isTouched ? 1 : 0}
                      // isRequired={true}
                      type='username'
                    />
                  )
                }}
              />
              <Checkbox
                mt={6}
                checked={isAccept}
                onChange={() => setIsAccept(!isAccept)}
              >
                Tôi đã đọc và đồng ý với chính sách của công ty
              </Checkbox>
              <Flex justifyContent={'center'}>
                <Button
                  marginTop={'64px !important'}
                  marginBottom={'24px !important'}
                  type='submit'
                  width='70% !important'
                  //   disabled={loading}
                  display='flex'
                  alignItems='center'
                  color={'#FFFF'}
                  backgroundColor={'#3B22A1'}
                  isLoading={loading}
                >
                  Đăng kí
                </Button>
              </Flex>
            </form>
            <Flex>
              <Text className='texthave'>Bạn đã có tài khoản? </Text>
              <Text onClick={() => navigate('/login')} className='textres'>
                Đăng nhập
              </Text>
            </Flex>
          </Stack>
        </Flex>
      </div>
    </>
  )
}

export default AccountRegister
