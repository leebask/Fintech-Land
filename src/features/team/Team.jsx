import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { useNavigate } from 'react-router'
import { Card, Image, List, ListItem } from '@chakra-ui/react'

import '@/styles/tabbutton.scss'
import PhonePng from '@/assets/images/Phone.png'
import { useDispatch, useSelector } from 'react-redux'
import { TeamActions } from './TeamSlice'
import { useEffect } from 'react'
import moment from 'moment'

function Team() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [tab, setTab] = React.useState(0)
  const data = useSelector((state) => state.team.data)
  const dataLevelAll = useSelector((state) => state.team.dataLevelAll)

  const dataLevel1 = useSelector((state) => state.team.dataLevel1)
  const dataLevel2 = useSelector((state) => state.team.dataLevel2)
  const dataLevel3 = useSelector((state) => state.team.dataLevel3)

  useEffect(() => {
    dispatch(TeamActions.getTeam())
  }, [])
  useEffect(() => {
    dispatch(
      TeamActions.getTeamLevelAll({
        page: 1,
        payload: {
          level: tab + 1,
        },
      })
    )
  }, [tab])

  function increasePageNumber() {
    dispatch(
      TeamActions.getTeamLevelAll({
        page: Math.ceil(dataLevelAll?.users.length / 10) + 1,
        payload: {
          level: tab + 1,
        },
      })
    )
  }

  let isFetching = false // Biến để kiểm tra xem đang lấy dữ liệu hay không

  window.addEventListener('scroll', function () {
    // Kiểm tra xem người dùng đã cuộn đến cuối trang hay chưa
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 10
    ) {
      // Kiểm tra xem đang lấy dữ liệu hay không
      if (
        !isFetching
        // &&
        // dataLevelAll?.users.length >= 10 &&
        // dataLevelAll?.users.length % 10 === 0
      ) {
        isFetching = true // Đánh dấu đang lấy dữ liệu

        // Gọi hàm để tăng số trang lên
        increasePageNumber()

        // Đợi một khoảng thời gian nhất định trước khi đánh dấu là không lấy dữ liệu nữa
        setTimeout(function () {
          isFetching = false // Đánh dấu không lấy dữ liệu
        }, 1000) // Thời gian đợi (milliseconds)
      }
    }
  })
  return (
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
            Đội
          </Text>
          <div></div>
        </Flex>
        <Flex mt={'20px'} gap={4}>
          <Text
            className={tab === 0 ? 'tab_btn tab_action' : 'tab_btn'}
            onClick={() => setTab(0)}
          >
            Cấp 1
          </Text>
          <Text
            className={tab === 1 ? 'tab_btn tab_action' : 'tab_btn'}
            onClick={() => setTab(1)}
          >
            Cấp 2
          </Text>
          <Text
            className={tab === 2 ? 'tab_btn tab_action' : 'tab_btn'}
            onClick={() => setTab(2)}
          >
            Cấp 3
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
              <LevelBody
                level={data?.find((k) => k?.level === 1)?.level}
                percent1={data?.find((k) => k?.level === 1)?.percent}
                percent2={data?.find((k) => k?.level === 1)?.percentVision}
                money1={dataLevelAll?.totalBonus}
                money2={dataLevelAll?.bonus}
              ></LevelBody>
              {dataLevel1?.map((k, idx) => (
                <React.Fragment key={idx}>
                  <PhoneList data={k} />
                </React.Fragment>
              ))}
            </Flex>
          )}
          {tab === 1 && (
            <Flex flexDirection={'column'}>
              <LevelBody
                level={data?.find((k) => k?.level === 2)?.level}
                percent1={data?.find((k) => k?.level === 2)?.percent}
                percent2={data?.find((k) => k?.level === 2)?.percentVision}
                money1={dataLevelAll?.totalBonus}
                money2={dataLevelAll?.bonus}
              ></LevelBody>
              {dataLevel2?.map((k, idx) => (
                <React.Fragment key={idx}>
                  <PhoneList data={k} />
                </React.Fragment>
              ))}
            </Flex>
          )}
          {tab === 2 && (
            <Flex flexDirection={'column'}>
              <LevelBody
                level={data?.find((k) => k?.level === 3)?.level}
                percent1={data?.find((k) => k?.level === 3)?.percent}
                percent2={data?.find((k) => k?.level === 3)?.percentVision}
                money1={dataLevelAll?.totalBonus}
                money2={dataLevelAll?.bonus}
              ></LevelBody>
              {dataLevel3?.map((k, idx) => (
                <React.Fragment key={idx}>
                  <PhoneList data={k} />
                </React.Fragment>
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}
const LevelBody = ({ level, percent1, percent2, money1, money2 }) => {
  return (
    <Flex mb={'10px'}>
      <Card display={'flex'} flexDirection={'column'} w={'100%'} p={'16px'}>
        <Flex>
          <Text color={'#3B22A1'} fontSize={'20px'} fontWeight={500}>
            Cấp {level}
          </Text>
        </Flex>
        <Flex justifyContent={'space-between'}>
          <Flex
            flexDirection={'column'}
            color={'#110816'}
            fontSize={'14px'}
            fontWeight={400}
            gap={1}
          >
            <Text p={'4px 0px'}>Hoa hồng nạp</Text>
            <Text p={'4px 0px'}>Hoa hồng khi khách hàng đầu tư</Text>
            <Text p={'4px 0px'}>Hoa hồng tuyến {level}</Text>
            <Text p={'4px 0px'}>Hoa hồng của tôi</Text>
          </Flex>
          <Flex flexDirection={'column'} alignItems={'end'} gap={1}>
            <Text
              background={'#DDB509'}
              borderRadius={'8px'}
              w={'48px'}
              textAlign={'center'}
              fontSize={'12px'}
              fontWeight={500}
              color={'#110816'}
              p={'4px 10px'}
            >
              {percent1}%
            </Text>
            <Text
              p={'4px 10px'}
              color={'#110816'}
              background={'#DDB509'}
              borderRadius={'8px'}
              w={'48px'}
              textAlign={'center'}
              fontSize={'12px'}
              fontWeight={500}
            >
              {percent2}%
            </Text>
            <Text
              p={'4px 10px'}
              color={'#110816'}
              fontSize={'14px'}
              fontWeight={500}
            >
              {money1?.toLocaleString('vi-VN')} VND
            </Text>
            <Text
              p={'4px 10px'}
              color={'#110816'}
              fontSize={'14px'}
              fontWeight={500}
            >
              {money2?.toLocaleString('vi-VN')} VND
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  )
}
const PhoneList = ({ data }) => {
  return (
    <List pt={'10px'} spacing={3} pb={'10px'} pl={0}>
      <ListItem
        _hover={{ background: '#F5F5F5' }}
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        // alignItems={'center'}
        height={'47px'}
        p={'10px 0px'}
        //   onClick={() => navigate(item.url)}
      >
        <Flex alignItems={'center'} gap={2}>
          <Image src={PhonePng}></Image>
          <Flex flexDirection={'column'}>
            <Text color={'#110816'} fontSize={'16px'} fontWeight={500}>
              {data?.mobile?.slice(0, 2)}*** {data?.mobile?.slice(-3)}
            </Text>
            <Text color={'#110816'} fontSize={'14px'} fontWeight={400}>
              {/* 03/01 09:30 */}
              {moment(data?.createdAt).format('DD/MM mm:ss')}
            </Text>
          </Flex>
        </Flex>
        <Text color={'#4A4A4A'} fontSize={'16px'} fontWeight={500}>
          {data?.balance?.toLocaleString('vi-VN')} VND
        </Text>
      </ListItem>
    </List>
  )
}

export default Team
