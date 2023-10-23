import React from 'react'
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
export function SearchBar({ placeholder, setValueSearch }) {
  // Pass the computed styles into the `__css` prop
  // Chakra Color Mode
  const mainTeal = useColorModeValue('teal.300', 'teal.300')
  const searchIconColor = useColorModeValue('gray.700', 'gray.200')
  const inputBg = useColorModeValue('white', 'gray.800')
  return (
    <InputGroup
      marginBottom={'6px'}
      bg={inputBg}
      borderRadius='15px'
      w='250px'
      _focus={{
        borderColor: { mainTeal },
      }}
      _active={{
        borderColor: { mainTeal },
      }}
    >
      <InputLeftElement
        children={
          <IconButton
            bg='inherit'
            borderRadius='inherit'
            _hover='none'
            _active={{
              bg: 'inherit',
              transform: 'none',
              borderColor: 'transparent',
            }}
            _focus={{
              boxShadow: 'none',
            }}
            icon={<SearchIcon color={searchIconColor} w='15px' h='15px' />}
          ></IconButton>
        }
      />
      <Input
        onChange={(e) => setValueSearch(e.target.value)}
        fontSize='xs'
        py='11px'
        placeholder={placeholder}
        borderRadius='inherit'
      />
    </InputGroup>
  )
}
