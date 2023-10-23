import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import imagepopuphome from '../../assets/images/imagepopuphome.png'

function PupupHomeFunds() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    onOpen()
  }, [])

  return (
    <Modal size={'md'} onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton style={{color:'#fff'}} />
        <ModalBody>
          <Flex
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            color={'#110816'}
          >
            <Image w={'500px'} h={'200px'} src={imagepopuphome}></Image>
          </Flex>
        </ModalBody>
       
      </ModalContent>
    </Modal>
  )
}

export default PupupHomeFunds
