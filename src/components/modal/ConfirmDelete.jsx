import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react'
// import { useRef } from 'react'
import PropTypes from 'prop-types'
import { memo } from 'react'

function ConfirmDelete({ ButtonProp, title, isOpen, onClose, handleDelete }) {
  //   const { isOpen, onOpen, onClose } = useDisclosure()
  //   const cancelRef = useRef()

  return (
    <>
      {/* <Button colorScheme='red' onClick={onOpen}>
        Delete Customer
      </Button> */}
      {ButtonProp}
      <AlertDialog
        isCentered={true}
        isOpen={isOpen}
        // leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              {title}
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure?</AlertDialogBody>

            <AlertDialogFooter>
              <Button
                //   ref={cancelRef}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
ConfirmDelete.propTypes = {
  ButtonProp: PropTypes.node,
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  handleDelete: PropTypes.func,
}
export default memo(ConfirmDelete)
