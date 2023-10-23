import { AddIcon, CheckCircleIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { useNavigate } from 'react-router'
import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { useState } from 'react'
import { Button } from '@chakra-ui/button'
import CardFlags from '../../assets/images/CardFlags.png'
import Copy from '../../assets/images/copy.png'
import upinmage from '../../assets/images/upinmage.png'
import { useDispatch, useSelector } from 'react-redux'
import { ReChargeActions } from './ReChargeSlice'
import { useEffect } from 'react'
import LoadingSpiner from '../../components/loading/LoadingSpiner'
import { toast } from 'react-toastify'
import bankApi from '../../api/bankApi'
import ConfirmSuccess from '../../components/modal/ConfirmSuccess'
import rechargeSuccess from '../../assets/images/rechargeSuccess.png'
import { authActions } from '../auth/authSlice'

function ReCharge() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.reCharge.loading)
  const bankInfo = useSelector((state) => state.reCharge.bankInfo)
  const adminBankInfo = useSelector((state) => state.reCharge.adminBankInfo)
  const userInfo = useSelector((state) => state.auth.userInfo)
  const [inputValue, setInputValue] = useState({
    amount: '',
    fullname: '',
    numberAccount: '',
    nameBank: '',
    method: '',
    proof: '',
  })
  const [steps, setSteps] = useState(1)
  const [isDone, setIsDone] = useState(false)
  const [loadingPage, setLoadingPage] = useState(false)

  useEffect(() => {
    dispatch(ReChargeActions.getInfoBank())
    dispatch(authActions.getUserInfo())
    dispatch(ReChargeActions.getInfoAdminBank())
  }, [])
  const proofLinkRef = React.useRef()
  const handleFileSelect = async (event) => {
    event.preventDefault()
    setInputValue({ ...inputValue, proof: event.target.files[0] })
  }

  const handleDone = () => {
    setLoadingPage(true)

    const formData = new FormData()
    formData.append('amount', inputValue.amount)
    formData.append('fullname', bankInfo.fullName)
    formData.append('numberAccount', bankInfo.numberBank)
    formData.append('nameBank', bankInfo.nameBank)
    formData.append('method', bankInfo.method)
    formData.append('proof', inputValue.proof)

    bankApi
      .reChargeBank(formData)
      .then((res) => {
        setIsDone(true)
        setLoadingPage(false)
      })
      .catch((err) => {
        setLoadingPage(false)
        toast.error(err.response.data.message)
      })
    // dispatch(ReChargeActions.reCharge(formData))
  }
  console.log(adminBankInfo)
  return (
    <>
      {isDone && (
        <ConfirmSuccess
          image={rechargeSuccess}
          title={'Nạp tiền thành công'}
          content={Number(inputValue.amount)?.toLocaleString('vi-VN') + ' VNĐ'}
          url={'/home'}
        ></ConfirmSuccess>
      )}

      {loading && <LoadingSpiner />}
      {loadingPage && <LoadingSpiner />}
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
              Nạp tiền
            </Text>
            <div></div>
          </Flex>
          <Text
            borderRadius={'10px'}
            w={'120px'}
            p={'4px 12px'}
            background={'#3B22A1'}
            textAlign={'center'}
            color={'#fff'}
            fontSize={'16px'}
            fontWeight={'400'}
          >
            VNĐ
          </Text>
          {steps === 1 && (
            <Flex justifyContent={'center'} flexDirection={'column'}>
              <Flex
                justifyContent={'space-between'}
                alignItems={'center'}
                pb={'16px'}
                pt={'40px'}
              >
                <Text color={'#110816'} fontSize={'14px'} fontWeight={'600'}>
                  Nhập số tiền Muốn nạp
                </Text>
                <Text
                  width={'40px'}
                  p={'2px 4px'}
                  background={'#23274C'}
                  color={'#fff'}
                  fontSize={'12px'}
                  fontWeight={'700'}
                  textAlign={'center'}
                  borderRadius={'4px'}
                >
                  VNĐ
                </Text>
              </Flex>
              <Input
                type='number'
                value={inputValue.amount}
                placeholder='Số tiền từ 500.000 VNĐ'
                onChange={(e) =>
                  setInputValue({ ...inputValue, amount: e.target.value })
                }
                height={'54px'}
                background={'#F9F9F9'}
              ></Input>
              <Text
                pt={'36px'}
                color={'#9A1818'}
                fontSize={'14px'}
                fontWeight={'700'}
              >
                Chú ý
              </Text>
              <Text color={'#110816'} fontSize={'14px'} fontWeight={'400'}>
                Khách hàng nạp tiền vui lòng chọn xác nhận để trung tâm hệ thống
                xử lý nhanh cho bạn!
              </Text>
              {bankInfo ? (
                <Flex
                  p={'12px 16px'}
                  background={'#F9F9F9'}
                  width={'100%'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  border={'1px solid #3B22A1'}
                  borderRadius={'8px'}
                >
                  <Flex>
                    <Image pr={'16px'} src={CardFlags}></Image>
                    <Flex flexDirection={'column'}>
                      <Text
                        color={'#110816'}
                        fontWeight={600}
                        fontSize={'16px'}
                      >
                        **** **** ***{bankInfo?.numberBank?.slice(-3)}
                      </Text>
                      <Text
                        color={'#110816'}
                        fontWeight={600}
                        fontSize={'12px'}
                      >
                        Thẻ ghi nợ
                      </Text>
                    </Flex>
                  </Flex>
                  <CheckCircleIcon w={'24px'} h={'24px'} color={'green'} />
                </Flex>
              ) : (
                <Flex
                  alignItems={'center'}
                  gap={4}
                  justifyContent={'center'}
                  cursor={'pointer'}
                  pt={'41px'}
                  pb={'41px'}
                  onClick={() => navigate('/manage/bank-info')}
                >
                  <AddIcon w={'18px'} h={'18px'} />
                  <Text color={'#110816'} fontSize={'16px'} fontWeight={'600'}>
                    Thêm thông tin ngân hàng
                  </Text>
                </Flex>
              )}

              <Flex justifyContent={'center'}>
                <Button
                  mt={'100px'}
                  color={'#ffff'}
                  background={'#3B22A1'}
                  w={'70%'}
                  h={'50px'}
                  onClick={() => setSteps(2)}
                  isDisabled={
                    Number(inputValue.amount) >= 500000 ? false : true
                  }
                >
                  Tiếp tục
                </Button>
              </Flex>
            </Flex>
          )}
          {steps === 2 && (
            <Flex flexDirection={'column'}>
              <Text
                pt={'40px'}
                color={'#23274C'}
                fontWeight={600}
                fontSize={'20px'}
              >
                Thông tin thanh toán
              </Text>
              <ViewCopy
                title={'Chủ tài khoản'}
                content={adminBankInfo?.data?.fullName}
              />
              <ViewCopy
                title={'Số tài khoản'}
                content={adminBankInfo?.data?.bankNumber}
              />
              <ViewCopy
                title={'Tên ngân hàng'}
                content={adminBankInfo?.data?.bankName}
              />
              {/* <ViewCopy title={'Chi nhánh'} content={adminBankInfo?.data?.walletAddress} /> */}
              <ViewCopy title={'Nội dung'} content={'+' + userInfo?.mobile} />
              <Text
                color={'#23274C'}
                fontWeight={'600'}
                fontSize={'16px'}
                pt={'24px'}
              >
                Để nạp tiền bạn thực hiện các bước sau:
              </Text>
              <Flex pb={'12px'}>
                <Text
                  width={'18px'}
                  height={'18px'}
                  borderRadius={'4px'}
                  background={'#3B22A1'}
                  color={'#fff'}
                  fontSize={'12px'}
                  textAlign={'center'}
                  mr={'16px'}
                >
                  1
                </Text>
                <Text color={'#23274C'} fontSize={'14px'} fontWeight={400}>
                  Đăng nhập vào hệ thống ngân hàng bằng internet Banking.
                </Text>
              </Flex>
              <Flex pb={'12px'}>
                <Text
                  width={'18px'}
                  height={'18px'}
                  borderRadius={'4px'}
                  background={'#3B22A1'}
                  color={'#fff'}
                  fontSize={'12px'}
                  textAlign={'center'}
                  mr={'16px'}
                >
                  2
                </Text>
                <Text color={'#23274C'} fontSize={'14px'} fontWeight={400}>
                  Chọn hình thức chuyển tiền 24/7
                </Text>
              </Flex>{' '}
              <Flex pb={'12px'}>
                <Text
                  width={'18px'}
                  height={'18px'}
                  borderRadius={'4px'}
                  background={'#3B22A1'}
                  color={'#fff'}
                  fontSize={'12px'}
                  textAlign={'center'}
                  mr={'16px'}
                >
                  3
                </Text>
                <Text color={'#23274C'} fontSize={'14px'} fontWeight={400}>
                  Bạn vui lòng sao chép số tài khoản công ty{' '}
                  <span
                    style={{
                      color: '#3B22A1',
                      fontSize: '14px  !importan',
                      fontWeight: '700px !important',
                    }}
                  >
                    Blockchain Fintech Land
                  </span>
                </Text>
              </Flex>
              <Flex pb={'12px'}>
                <Flex
                  width={'48px !important'}
                  placeContent={'center'}
                  height={'18px'}
                  borderRadius={'4px'}
                  background={'#3B22A1'}
                  color={'#fff'}
                  fontSize={'12px'}
                  textAlign={'center'}
                  mr={'16px'}
                  pr={'2px'}
                >
                  <Text p={'1px 1px 2px 2px !important'}>4</Text>
                </Flex>
                <Flex>
                  <Text color={'#23274C'} fontSize={'14px'} fontWeight={400}>
                    Bạn vui lòng sao chép đúng nội dung của công ty{' '}
                    <span
                      style={{
                        color: '#3B22A1',
                        fontSize: '14px  !importan',
                        fontWeight: '700px !important',
                      }}
                    >
                      Blockchain Fintech Land
                    </span>{' '}
                    sao đó dán vào nội dung chuyển khoản của ngân hàng ( lưu ý
                    mỗi lần tạo lệnh lệnh giao dịch sẽ có nhiều mã khác nhau nên
                    vui lòng chọn đúng nội dung mã giao dịch).
                  </Text>
                </Flex>
              </Flex>
              <Text color={'#23274C'} fontSize={'16px'} fontWeight={'600'}>
                Mọi thắc mắc vui lòng liên hệ Trung Tâm CSKH
              </Text>
              <Flex
                onClick={() => proofLinkRef.current.click()}
                pt={'18px'}
                alignItems={'center'}
                justifyContent={'space-between'}
                cursor={'pointer'}
              >
                <Text
                  color={'#3B22A1'}
                  fontSize={'19px'}
                  fontWeight={'400'}
                  w={'100%'}
                >
                  Tải lên ảnh chụp màn hình{' '}
                </Text>
                <Input
                  visibility={'hidden'}
                  ref={proofLinkRef}
                  background={'#ffff'}
                  paddingTop='10px'
                  whiteSpace={'normal'}
                  fontSize='10'
                  borderColor='#F2BA1F'
                  type='file'
                  onChange={handleFileSelect}
                  accept='image/*'
                ></Input>
                <Image src={upinmage}></Image>
              </Flex>
              <Flex justifyContent={'center'}>
                <Button
                  mt={'50px'}
                  color={'#ffff'}
                  background={'#3B22A1'}
                  w={'70%'}
                  h={'50px'}
                  onClick={handleDone}
                >
                  Đã nạp tiền
                </Button>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  )
}
const ViewCopy = ({ title, content }) => {
  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(function () {
        toast.success('Đã sao chép thành công!')
      })
      .catch(function (err) {
        toast.error('Lỗi khi sao chép:', err)
      })
  }
  return (
    <>
      <Flex flexDirection={'column'} pt={'12px'}>
        <Text color={'#23274C'} fontWeight={500} fontSize={'16px'} pb={'12px'}>
          {title}
        </Text>
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          border={'1px solid rgba(59, 34, 161, 0.50)'}
          borderRadius={'10px'}
          background={'rgba(255, 255, 255, 0.06)'}
          h={'48px'}
        >
          <Text
            pl={'12px'}
            color={'#23274C'}
            fontWeight={600}
            fontSize={'16px'}
          >
            {content}
          </Text>
          <Flex
            cursor={'pointer'}
            background={'#3B22A1'}
            h={'48px'}
            borderRadius={'10px'}
            alignItems={'center'}
            p={'12px'}
            color={'#fff'}
            gap={2}
            onClick={() => copyToClipboard(content)}
          >
            <Image src={Copy}></Image>
            <Text fontWeight={600} fontSize={'16px'}>
              {' '}
              Sao chép
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default ReCharge
