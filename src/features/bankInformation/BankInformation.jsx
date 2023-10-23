import React from 'react'
import './index.scss'
import { Flex, Text } from '@chakra-ui/layout'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { InputField } from '../../components/custom/fields/InputField'
import { Button } from '@chakra-ui/button'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { BankInformationActions } from './BankInformationSlice'

function BankInformation() {
  const loading = useSelector((state) => state.bankInformation.loading)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const schema = yup.object({
    fullName: yup.string().required('Bắt buộc'),
    numberBank: yup.string().required('Bắt buộc'),
    nameBank: yup.string().required('Bắt buộc'),
    branchBank: yup.string().required('Bắt buộc'),
  })
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      fullName: '',
      numberBank: '',
      nameBank: '',
      branchBank: '',
    },
  })

  const handleConfirm = (values) => {
    dispatch(
      BankInformationActions.setBank({
        ...values,
        method: 'bank',
      })
    )
  }
  return (
    <div className='bankInformationAll'>
      <Flex w={'100%'} maxW={'600px'} flexDirection={'column'}>
        <Flex
          justifyContent={'space-between'}
          alignContent={'center'}
          w={'100%'}
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
            Thông tin thanh toán
          </Text>
          <div></div>
        </Flex>

        <form
          className='m-auto'
          style={{ width: '100%', marginTop: '50px' }}
          onSubmit={handleSubmit(handleConfirm)}
        >
          <Controller
            name='fullName'
            control={control}
            render={({ field, fieldState: { error, isTouched } }) => {
              return (
                <InputField
                  {...field}
                  label='Tên chủ tài khoản'
                  placeholder='Nhập tên chủ tài khoản'
                  id='us'
                  error={error}
                  width='100%'
                  touched={isTouched ? 1 : 0}
                  type='username'
                />
              )
            }}
          />
          <Controller
            name='numberBank'
            control={control}
            render={({ field, fieldState: { error, isTouched } }) => {
              return (
                <InputField
                  {...field}
                  label='Số tài khoản'
                  placeholder='Nhập số tài khoản'
                  id='us'
                  error={error}
                  width='100%'
                  touched={isTouched ? 1 : 0}
                  type='number'
                />
              )
            }}
          />
          <Controller
            name='nameBank'
            control={control}
            render={({ field, fieldState: { error, isTouched } }) => {
              return (
                <InputField
                  {...field}
                  label='Nhập tên ngân hàng'
                  placeholder='Nhập tên ngân hàng'
                  id='us'
                  error={error}
                  width='100%'
                  touched={isTouched ? 1 : 0}
                  type='username'
                />
              )
            }}
          />
          <Controller
            name='branchBank'
            control={control}
            render={({ field, fieldState: { error, isTouched } }) => {
              return (
                <InputField
                  {...field}
                  label='Chi nhánh'
                  placeholder='Nhập chi nhánh'
                  id='us'
                  error={error}
                  width='100%'
                  touched={isTouched ? 1 : 0}
                  type='username'
                />
              )
            }}
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
              isLoading={loading}
            >
              Xác nhận
              {/* {loading && <Spinner size='sm' ml='5px' />} */}
            </Button>
          </Flex>
        </form>
        <Flex flexDirection={'column'}>
          <Text color={'#F40808'} fontWeight={700} fontSize={'14px'}>
            Lưu ý
          </Text>
          <Text color={'#110816'} fontWeight={400} fontSize={'14px'}>
            Xin xác nhận thông tin tài khoản của bạn. Chúng tôi sẽ không chịu
            trách nhiệm nếu nguyên nhân bị lỗi do thông tin của bạn
          </Text>
        </Flex>
      </Flex>
    </div>
  )
}

export default BankInformation
