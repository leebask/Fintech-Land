import {
  Avatar,
  Badge,
  Button,
  Flex,
  Icon,
  Td,
  Text,
  Tr,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment/moment'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import ConfirmDelete from '../modal/ConfirmDelete'
import { UserAccountsActions } from '../../features/UserAccounts/UserAccountsSlice'
import { useDispatch } from 'react-redux'

function TableUserRow({ row }) {
  const textColor = useColorModeValue('gray.700', 'white')
  const bgStatus = useColorModeValue('gray.400', '#1a202c')
  const colorStatus = useColorModeValue('white', 'gray.400')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const handleDelete = () => {
  //   onClose()
  //   console.log(row, 'delete')
  // }
  const handleClickEdit = () => {
    dispatch(UserAccountsActions.setUserEdit(row))
    navigate(`/users/${row?._id}`)
  }
  return (
    <>
      <Tr>
        <Td minWidth={{ sm: '250px' }} pl='0px'>
          <Flex
            align='center'
            py='.8rem'
            minWidth='100%'
            flexWrap='nowrap'
            display={'-webkit-box'}
          >
            <Avatar src={row?.avatar} w='50px' borderRadius='12px' me='18px' />
            <Flex direction='column'>
              <Text
                fontSize='md'
                color={textColor}
                fontWeight='bold'
                minWidth='100%'
              >
                {row?.fullName}
              </Text>
              <Text fontSize='sm' color='gray.400' fontWeight='normal'>
                {row?.email}
              </Text>
            </Flex>
          </Flex>
        </Td>
        <Td>
          <Text fontSize='md' color={textColor} pb='.5rem'>
            {row?.mobile}
          </Text>
        </Td>
        <Td>
          {/* <Flex direction='column'>
          <Text fontSize='md' color={textColor} fontWeight='bold'>
            {row?.fullName}
          </Text>
          <Text fontSize='sm' color='gray.400' fontWeight='normal'>
            {row?.fullName}
          </Text>
        </Flex> */}
          <Text fontSize='md' color={textColor} fontWeight='bold' pb='.5rem'>
            {row?.role}
          </Text>
        </Td>
        <Td >
          <Badge
            bg={row?.active === true ? 'green.400' : bgStatus}
            color={row?.active === true ? 'white' : colorStatus}
            fontSize='16px'
            p='3px 10px'
            borderRadius='8px'
          >
            {row?.active ? 'Active' : 'Deactive'}
          </Badge>
        </Td>
        <Td>
          <Text
            fontSize='md'
            marginLeft={8}
            color={row?.receiveNotify ? 'green.500' : 'red.500'}
            fontWeight='bold'
            // pb='.5rem'
          >
            {row?.receiveNotify.toString()}
          </Text>
        </Td>

        <Td>
          <Text fontSize='md' color={textColor} pb='.5rem'>
            {moment(row?.createdAt).format('DD/MM/YYYY')}
          </Text>
        </Td>
        <Td>
          <Text fontSize='md' color={textColor} pb='.5rem'>
            {moment(row?.updatedAt).format('DD/MM/YYYY')}
          </Text>
        </Td>
        <Td>
          {/* <Button p='0px' bg='transparent' variant='no-hover'>
          <Text
            fontSize='md'
            color='gray.400'
            fontWeight='bold'
            cursor='pointer'
          >
            Edit
          </Text>
        </Button>
        <Button marginLeft='10px' bg='transparent' variant='no-hover'>
          <Text
            fontSize='md'
            color='gray.400'
            fontWeight='bold'
            cursor='pointer'
          >
            DELETE
          </Text>
        </Button> */}
          <Flex
            direction={{ sm: 'column', md: 'row' }}
            align='flex-start'
            p={{ md: '24px' }}
          >
            {/* <ConfirmDelete
              ButtonProp={
                <Button
                  onClick={onOpen}
                  p='0px'
                  bg='transparent'
                  mb={{ sm: '10px', md: '0px' }}
                  me={{ md: '12px' }}
                >
                  <Flex
                    color='red.500'
                    cursor='pointer'
                    align='center'
                    p='12px'
                  >
                    <Icon as={FaTrashAlt} me='4px' />
                    <Text fontSize='sm' fontWeight='semibold'>
                      DELETE
                    </Text>
                  </Flex>
                </Button>
              }
              title={'Delete User: ' + row?.fullName}
              isOpen={isOpen}
              onClose={onClose}
              handleDelete={handleDelete}
            /> */}

            <Button onClick={handleClickEdit} p='0px' bg='transparent'>
              <Flex color={textColor} cursor='pointer' align='center' p='12px'>
                <Icon as={FaPencilAlt} me='4px' />
                <Text fontSize='sm' fontWeight='semibold'>
                  EDIT
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Td>
      </Tr>
    </>
  )
}
TableUserRow.propTypes = {
  row: PropTypes.object,
}
export default TableUserRow
