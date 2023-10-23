import React from 'react'
import PropTypes from 'prop-types'
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
  Input,
  Text,
} from '@chakra-ui/react'
import Wallet from '../../assets/images/manage/Wallet.png'
import Vector from '../../assets/images/manage/Vector.png'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'
import { ManageActions } from '../../features/manage/ManageSlice'
import userApi from '../../api/userApi'
import { authActions } from '../../features/auth/authSlice'
import { toast } from 'react-toastify'
function BankCard({ name, id, surplus, imageUrl }) {
  const dispatch = useDispatch()
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  const avatarRef = React.useRef()
  const handleFileSelect = async (event) => {
    event.preventDefault()
    // setInputValue({ ...inputValue, proof:  })
    const formData = new FormData()
    formData.append('file', event.target.files[0])
    userApi
      .uploadAvatar(formData)
      .then((res) => {
        toast.success('Cập nhật ảnh đại diện thành công')
        setTimeout(() => {
          dispatch(authActions.getUserInfo())

        }, 3000)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
 
  }
  return (
    <Card>
      <CardHeader pb={0}>
        <Flex
          backgroundPosition='center'
          backgroundRepeat='no-repeat'
          backgroundSize='cover'
          backgroundImage={`url(${Vector})`}
          height={'117px'}
          gap={4}
        >
          <Avatar
            onClick={() => avatarRef.current.click()}
            border={'2px solid #3B22A1'}
            p={'2px'}
            w={20}
            h={20}
            src={imageUrl}
          />
          <Input
          display={'none'}
            visibility={'hidden'}
            ref={avatarRef}
            background={'#ffff'}
            paddingTop='10px'
            whiteSpace={'normal'}
            fontSize='10'
            borderColor='#F2BA1F'
            type='file'
            onChange={handleFileSelect}
            accept='image/*'
          ></Input>
         
          <Flex flexDirection={'column'}>
            <Text
              color={'#3B22A1'}
              fontSize={'20px'}
              textAlign={'center'}
              fontWeight={700}
            >
              {name}
            </Text>
            <Text color={'#110816'} fontSize={'14px'} fontWeight={600}>
              ID: {id}
            </Text>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody pt={1}>
        <Flex justifyContent={'space-between'}>
          <Flex gap={2}>
            <Image src={Wallet}></Image>
            <Text color={'#110816'} fontSize={'16px'} fontWeight={600}>
              Số dư
            </Text>
          </Flex>
          <Flex
            onClick={handleToggle}
            alignItems={'center'}
            gap={2}
            cursor={'pointer'}
          >
            {show ? (
              <>
                <Text
                  as='password'
                  color={'#FF8A00'}
                  fontSize={'16px'}
                  fontWeight={700}
                >
                  {' '}
                  {surplus}
                </Text>
                <ViewOffIcon />
              </>
            ) : (
              <>
                <Text
                  as='password'
                  color={'#FF8A00'}
                  fontSize={'16px'}
                  fontWeight={700}
                >
                  ************
                </Text>
                <ViewIcon />
              </>
            )}
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  )
}

BankCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  surplus: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default BankCard
