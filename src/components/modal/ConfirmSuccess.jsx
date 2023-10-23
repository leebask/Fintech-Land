import React from 'react'
import PropTypes from 'prop-types'
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
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ConfirmSuccess({ image, title, content, url }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  useEffect(() => {
    onOpen()
  }, [])

  return (
    <>
      <Modal  size={'xs'} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Flex
              justifyContent={'center'}
              flexDirection={'column'}
              alignItems={'center'}
              color={'#110816'}
            >
              <Image src={image}></Image>
              <Text fontSize={'16px'} fontWeight={400}>
                {title}
              </Text>
              <Text fontSize={'20px'} fontWeight={600}>
                {content}
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex w={'100%'} justifyContent={'center'}>
              <Button
                color={'#ffff'}
                background={'#3B22A1'}
                w={'100%'}
                h={'50px'}
                onClick={() => {
                  onClose()
                  navigate(url)
                }}
              >
                Xác nhận
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

ConfirmSuccess.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.string,
  url: PropTypes.string,
}

export default ConfirmSuccess
