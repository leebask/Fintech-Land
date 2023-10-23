import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { List, ListItem } from '@chakra-ui/react'

import '@/styles/tabbutton.scss'
import { useDispatch, useSelector } from 'react-redux'
import { ContractActions } from './ContractSlice'
import { useEffect } from 'react'
import LoadingSpiner from '../../components/loading/LoadingSpiner'
import moment from 'moment'

function Contract() {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.contract?.list)
  const loading = useSelector((state) => state.contract.loading)

  const [tab, setTab] = React.useState(0)
  useEffect(() => {
    dispatch(ContractActions.getContract(tab === 0 ? 'true' : 'false'))
  }, [tab])
  console.log(list)
  return (
    <>
      {loading && <LoadingSpiner />}
      <Flex
        justifyContent={'center'}
        w={'100%'}
        h={'100%'}
        p={'46px 23px 89px 24px'}
      >
        <Flex w={'100%'} maxW={'600px'} flexDirection={'column'}>
          <Flex
            justifyContent={'center'}
            alignContent={'center'}
            w={'100%'}
            pb={4}
          >
            <Text color={'#3B22A1'} fontWeight={700} fontSize={'20px'}>
              {' '}
              Hợp đồng
            </Text>
            <div></div>
          </Flex>
          <Flex mt={'20px'}>
            <Text
              w={'50% !important'}
              className={tab === 0 ? 'tab_btn tab_action' : 'tab_btn'}
              onClick={() => setTab(0)}
            >
              Hợp đồng kênh mua
            </Text>
            <Text
              w={'50% !important'}
              className={tab === 1 ? 'tab_btn tab_action' : 'tab_btn'}
              onClick={() => setTab(1)}
            >
              Hợp đồng kênh bán
            </Text>
          </Flex>
          <Flex
            //   justifyContent={'center'}
            flexDirection={'column'}
            gap={4}
            mt={'16px'}
          >
            {tab === 0 && (
              <Flex flexDirection={'column'}>
                <List pt={'16px'} spacing={3} pb={'20px'}>
                  {list?.map((item, index) => (
                    <React.Fragment key={index}>
                      <ContractItem data={item} type={'Đã mua'} />
                    </React.Fragment>
                  ))}
                </List>
              </Flex>
            )}
            {tab === 1 && (
              <Flex>
                <Flex flexDirection={'column'} width={'100%'}>
                  <List pt={'16px'} spacing={3} pb={'20px'}>
                    {list?.map((item, index) => (
                      <React.Fragment key={index}>
                        <ContractItem data={item} type={'Đã bán'} />
                      </React.Fragment>
                    ))}
                  </List>
                </Flex>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

const ContractItem = ({ data, type }) => {
  return (
    <ListItem
      _hover={{ background: '#F5F5F5' }}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      pb={'3.5px'}
      borderBottom={'1px solid #EDEDED'}
      //   onClick={() => navigate(item.url)}
    >
      <Flex flexDirection={'column'}>
        <Text color={'#110816'} fontSize={'16px'} fontWeight={500}>
          {data?.package?.name}
        </Text>
        <Text color={'#110816'} fontSize={'14px'} fontWeight={400}>
          {/* 03/01 09:30
           */}
          {moment(data?.createdAt).format('DD/MM HH:mm')}
        </Text>
      </Flex>
      <Text
        textDecorationLine={'underline'}
        color={type === 'Đã mua' ? '#23B217' : '#F40808'}
        fontSize={'16px'}
        fontWeight={600}
      >
        {type}
      </Text>
    </ListItem>
  )
}
export default Contract
