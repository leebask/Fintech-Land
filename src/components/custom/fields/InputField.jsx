/* eslint-disable react/no-children-prop */
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import React from 'react'

export const InputField = React.forwardRef((props, ref) => {
  const { label, error, touched, isRequired, icon } = props
  const showError = error && Boolean(touched)
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <FormControl
      isInvalid={showError}
      // isRequired={isRequired}
    >
      {props?.type !== 'hidden' ? (
        <FormLabel color={'#3B22A1'}>{label}</FormLabel>
      ) : null}

      <InputGroup>
        {props?.type === 'tel' ? (
          <>
            <InputLeftAddon
              border={'1px solid #ECECEC !important'}
              borderLeftRadius={'10px !important'}
              background={'#F9F9F9 !important'}
              children='+84'
            />
            <Input
              borderRightRadius={'10px !important'}
              border={'1px solid #ECECEC !important'}
              background={'#F9F9F9 !important'}
              {...props}
              ref={ref}
              type='number'
            />
          </>
        ) : props?.type === 'password' ? (
          <>
            <Input
              borderRightRadius={'10px !important'}
              border={'1px solid #ECECEC !important'}
              background={'#F9F9F9 !important'}
              {...props}
              ref={ref}
              pr='4.5rem'
              type={show ? 'text' : 'password'}
            />
            <InputRightElement width='4.5rem'>
              {show ? (
                <ViewOffIcon onClick={handleClick} />
              ) : (
                <ViewIcon onClick={handleClick} />
              )}

              {/* <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button> */}
            </InputRightElement>
          </>
        ) : (
          <Input
            borderRadius={'10px !important'}
            border={'1px solid #ECECEC !important'}
            background={'#F9F9F9 !important'}
            {...props}
            ref={ref}
          />
        )}
        {icon && <InputRightElement children={<Icon as={icon} />} />}
      </InputGroup>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  )
})

InputField.propTypes = {
  label: PropTypes.string,
  error: PropTypes.object,
  touched: PropTypes.number,
  isRequired: PropTypes.bool,
  icon: PropTypes.object,
  type: PropTypes.string,
}
