import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { useNavigate } from 'react-router'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from '@chakra-ui/react'
import { InputField } from '../custom/fields/InputField'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { ManageActions } from '../../features/manage/ManageSlice'
import LoadingSpiner from '../loading/LoadingSpiner'
import { authActions } from '../../features/auth/authSlice'
function WithdrawalGrantPassword() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.manage.loading)
  const userInfo = useSelector((state) => state.auth.userInfo)

  const schema = yup.object(
    userInfo?.updatedPasswordLv2?
    {
    oldPass: yup.string().required('Vui lòng nhập'),
    newPass: yup.string().required('Vui lòng nhập '),
    newPassAgain: yup.string().required('Vui lòng nhập'),
  }
  :
  {
    newPass: yup.string().required('Vui lòng nhập '),
    newPassAgain: yup.string().required('Vui lòng nhập'),
  }
  )

  const handleLogin = (values) => {
    if (values.newPass !== values.newPassAgain) {
      toast.error('Mật khẩu mới không trùng nhau')
      return
    }
    userInfo?.updatedPasswordLv2?
    dispatch(
      ManageActions.changePasswordLevel2({
        oldPass: values.oldPass,
        newPass: values.newPass,
      })
    )
    :
    dispatch(
      ManageActions.changePasswordLevel2({
        oldPass: null,
        newPass: values.newPass,
      })
    )

    dispatch(authActions.getUserInfo())
  }

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      oldPass: '',
      newPass: '',
      newPassAgain: '',
    },
  })
  console.log(userInfo?.updatedPasswordLv2)
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
            Mật khẩu cấp rút tiền
          </Text>
          <div></div>
        </Flex>
        <Flex
          justifyContent={'center'}
          flexDirection={'column'}
          gap={4}
          p={'0 10%'}
        >
          <form
            className='m-auto'
            style={{ width: '100%', marginTop: '50px' }}
            onSubmit={handleSubmit(handleLogin)}
          >
            {userInfo?.updatedPasswordLv2
            &&
            <Controller
            name='oldPass'
            control={control}
            render={({ field, fieldState: { error, isTouched } }) => {
              return (
                <InputField
                  {...field}
                  label='Mật khẩu hiện tại'
                  placeholder='Nhập mật khẩu'
                  id='us'
                  error={error}
                  width='100%'
                  touched={isTouched ? 1 : 0}
                  // isRequired={true}
                  type='password'
                />
              )
            }}
          />
            }
           
            <Controller
              name='newPass'
              control={control}
              render={({ field, fieldState: { error, isTouched } }) => {
                return (
                  <InputField
                    {...field}
                    label='Mật khẩu cấp rút tiền'
                    placeholder='Nhập mật khẩu'
                    id='us'
                    error={error}
                    width='100%'
                    touched={isTouched ? 1 : 0}
                    // isRequired={true}
                    type='password'
                  />
                )
              }}
            />

            <Controller
              name='newPassAgain'
              control={control}
              render={({ field, fieldState: { error, isTouched } }) => (
                <InputField
                  {...field}
                  label='Nhập lại mật khẩu cấp rút tiền'
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
                //   disabled={loading}
                display='flex'
                alignItems='center'
                color={'#FFFF'}
                backgroundColor={'#3B22A1'}
                //   isLoading={loading}
              >
                Xác nhận
              </Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Flex>
    </>
   
  )
}

export default WithdrawalGrantPassword
