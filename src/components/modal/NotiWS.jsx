import React, { useEffect, useState } from 'react'
import { connectWS, wsConstants } from '../../utils/socket'
import {
  Avatar,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
function NotiWS() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [dataWS, setDataWS] = useState({})

  try {
    wsConstants.addEventListener('eventGlobal', (evt) => {
      onOpen()
      setDataWS(evt)
    })
  } catch (e) {
    console.error(e)
  }
  return (
    <>
    {isOpen&&
      <Flex
      background={'#3B22A1'}
      border={'1px solid rgba(255, 255, 255, 0.21)'}
      boxShadow={'0px 4px 12px 0px rgba(59, 34, 161, 0.28)'}
      borderRadius={'32px'}
      mt={'70vh'}
      mr={'20vh'}
      w={'fit-content'}
      zIndex={1}
      position={'fixed'}
      bottom={0}
      left={0}
      mb={'80px'}
      ml={'8px'}
      p={'4px 8px'}
    >
      {/* <Modal  size={'xs'} onClose={onClose} isOpen={isOpen}>
      <ModalContent
        background={'#3B22A1'}
        border={'1px solid rgba(255, 255, 255, 0.21)'}
        boxShadow={'0px 4px 12px 0px rgba(59, 34, 161, 0.28)'}
        borderRadius={'32px'}
        mt={'70vh'}
        mr={'20vh'}
        w={'fit-content'}
      >
        <ModalBody> */}
      <Flex flexDirection={'row'}>
        <Flex pr={'8px'}>
          <Avatar name={dataWS?.user?.mobile} src={dataWS?.user?.avatar} />
        </Flex>
        <Flex
          justifyContent={'center'}
          flexDirection={'column'}
          alignItems={'start'}
          color={'#fff'}
        >
          <Text color={'#fff'} fontSize={'14px'} fontWeight={500}>
            +{dataWS?.user?.mobile}
          </Text>
          <Text color={'#A59CC6'} fontSize={'12px'} fontWeight={400}>
            {dataWS?.type == 'topup'
              ? `Nạp tiền thành công ${
                  Number(dataWS?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
                }`
              : dataWS?.type == 'withdraw'
              ? `Rút tiền thành công ${
                  Number(dataWS?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
                }`
              : dataWS?.type == 'sendSaving'
              ? `Gửi quỹ thành công ${
                  Number(dataWS?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
                }`
              : dataWS?.type == 'bonusF0'
              ? `Thưởng ${
                  Number(dataWS?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
                } tuyển F1 trên  ${
                  Number(dataWS?.priceTotal)?.toLocaleString('vi-VN') + ' VNĐ'
                } `
              : dataWS?.type == 'sellPackage'
              ? `đã bán ${
                  Number(dataWS?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
                } trên kênh đầu tư`
              : dataWS?.type == 'buyPackage'
              ? `đầu tư ${
                  Number(dataWS?.balance)?.toLocaleString('vi-VN') + ' VNĐ'
                } từ kênh mua`
              : dataWS?.type == 'returnPackage'
              ? `đã được trả tiền hết ${dataWS.packageName}`
              : dataWS?.type == 'returnSaving'
              ? `đã hoàn tất gửi quỹ đầu tư ${dataWS.packageName}`
              : 'Không xác định được. Liên hệ kỹ thuật!'}
          </Text>
        </Flex>
      </Flex>
      {/* </ModalBody>
      </ModalContent>
    </Modal> */}
    </Flex>
    }
    
    </>
  
  )
}

export default NotiWS
