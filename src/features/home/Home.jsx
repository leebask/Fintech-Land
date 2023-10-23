import React from 'react'
import './index.scss'
import { Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import CarouselsHome from '../../components/home/CarouselsHome'
import WaterIcon from '../../assets/images/water.png'
import Electric from '../../assets/images/Electric.png'
import Moneyhome from '../../assets/images/moneyhome.png'
import Air from '../../assets/images/Air.png'
import Persons from '../../assets/images/persons.png'
import person1 from '../../assets/images/project/person1.png'
import person2 from '../../assets/images/project/person2.png'
import person3 from '../../assets/images/project/person3.png'
import person4 from '../../assets/images/project/person4.png'

import company1 from '../../assets/images/project/company1.png'
import company2 from '../../assets/images/project/company2.png'
import company3 from '../../assets/images/project/company3.png'
import company4 from '../../assets/images/project/company4.png'
import company5 from '../../assets/images/project/company5.png'
import company6 from '../../assets/images/project/company6.png'
import company7 from '../../assets/images/project/company7.png'
import company8 from '../../assets/images/project/company8.png'

import ButtonMenu from '../../components/home/ButtonMenu'
import WeAndIntroduce from '../../components/home/WeAndIntroduce'
import ProjectCard from '../../components/home/ProjectCard'
import { Helmet } from 'react-helmet'
import PupupHomeFunds from '../../components/modal/PupupHomeFunds'
import AvatarSupport from '../../components/AvatarSupport'

function Home() {
  
  const listMenu = [
    {
      icon: WaterIcon,
      title: 'Nạp',
      bg: 'linear-gradient(180deg, #70F2DB 0%, #23BBC5 100%);',
      boxShadow: '0px 22px 44px 0px rgba(56, 158, 165, 0.25);',
      url: '/recharge',
    },
    {
      icon: Air,
      title: 'Rút',
      bg: ' linear-gradient(180deg, #CF65F4 0%, #952CB9 100%);',
      boxShadow: ' 0px 22px 44px 0px rgba(149, 44, 185, 0.25);;',
      url: '/withdraw-money',
    },
    {
      icon: Electric,
      title: 'Đội',
      bg: 'linear-gradient(180deg, #FFCF53 0%, #F90 100%);',
      boxShadow: '0px 22px 44px 0px rgba(255, 153, 0, 0.25);;',
      url: '/team',
    },
    {
      icon: Persons,
      title: 'Đối tác',
      bg: 'linear-gradient(180deg, #FF9252 0%, #FF3F15 100%), linear-gradient(180deg, #FFCF53 0%, #F90 100%)',
      boxShadow: ' 0px 22px 44px 0px rgba(255, 77, 0, 0.25);',
      url: '/',
    },
    {
      icon: Moneyhome,
      title: 'Quỹ',
      bg: 'linear-gradient(180deg, #90DF75 0%, #62B655 100%);',
      boxShadow: '0px 22px 44px 0px rgba(98, 182, 85, 0.25);',
      url: '/send-funds',
    },
  ]
  const projectList = [
    {
      title: 'GRAND MARINA SAIGON',
      location: 'Mặt tiền cung đường Resort triệu...',
      description:
        'Căn hộ Masteri Centre Point Quận 9 của chủ đầu tư Masterise Homes giá bán từ 49 triệu/m2 chung cư. Dự án Masteri Quận 9...',

      price: '8-30 TỶ/CĂN',
    },
    {
      title: 'VENEZIA BEACH VILLAGE ..',
      location: 'Trung tâm Vinhomes Grand Park, Đường...',
      description:
        'Dự án Venezia Beach Village Bình Châu của Hưng Vượng Developer đầu tư và phát triển. Venezia Beach Hồ Tràm gồm sản phẩm...',

      price: '11 - 18 TỶ/CĂN',
    },
    {
      title: 'AQUA CITY ĐẢO PHƯỢNG ...',
      location: 'KĐT Aqua City Xã Long Hưng –Biên Hòa...',
      description:
        'Aqua City Đảo Phượng Hoàng của Novaland ở Biên Hòa Đồng Nai mở bán tháng 11/2020. Dự án Đảo Phụng Hoàng Aqua City...',

      price: '8-35 TỶ/CĂN',
    },
    {
      title: 'MEYHOMES CAPITAL ...',
      location: 'Thị trấn An Thới - huyện Phú Quốc...',
      description:
        'Dự án Meyhomes Capital Phú Quốc của chủ đầu tư Meyland Tân Á Đại Thành giá bán từ 7.4 tỷ đồng/căn. Nhà phố shophouse...',

      price: '7,3 TỶ ĐỒNG/ CĂN',
    },
    {
      title: 'AQUA CITY NOVALAND ĐỒ..',
      location: 'Xã Long Hưng, Thành phố Biên Hòa,...',
      description:
        'Aqua City Novaland Đồng Nai của chủ đầu tư Novagroup vị trí ở địa chỉ tại đường Hương Lộ 2 (HL2) Long Hưng thành...',

      price: 'TỪ 6 - 25 TỶ/CĂN',
    },
    {
      title: 'NOVAWORLD PHAN THIẾT',
      location: 'Đường Lạc Long Quân, thuộc...',
      description:
        'Dự án NovaWorld Phan Thiết là siêu thành phố biển du lịch nghỉ dưỡng được phát triển bởi NovaLand gồm nhà phố biệt...',

      price: 'TỪ 5 - 12 TỶ/CĂN',
    },
  ]
  return (
    <div className='homeAll'>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <PupupHomeFunds />
      <AvatarSupport />
      <div className='homeAll__header'>
        <Text
          color={'#3B22A1'}
          fontSize={'20px'}
          fontWeight={700}
          pb={4}
          pt={4}
          pl={4}
        >
          Wellcome to Blockchain Fintech Land!
        </Text>
        <CarouselsHome />
        <Flex justifyContent={'space-between'} p={'20px'}>
          {listMenu.map((item, index) => (
            <React.Fragment key={index}>
              <ButtonMenu
                icon={item.icon}
                title={item.title}
                bg={item.bg}
                boxShadow={item.boxShadow}
                url={item.url}
              />
            </React.Fragment>
          ))}
        </Flex>
        <WeAndIntroduce />
      </div>
      <div className='homeAll__body'>
        <Flex flexDirection={'column'}>
          <Text
            fontWeight={'600'}
            fontSize={'20px'}
            color={'#3B22A1'}
            p={'20px 2px'}
          >
            Dự án
          </Text>
          <Flex flexWrap={'wrap'} justifyContent={'center'}>
            {projectList.map((item, index) => (
              <React.Fragment key={index}>
                <ProjectCard
                  description={item.description}
                  location={item.location}
                  title={item.title}
                  price={item.price}
                />
              </React.Fragment>
            ))}
          </Flex>
          <Flex
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            p={'20px'}
            color={'#393939'}
          >
            <Text fontSize={'16px'} fontWeight={'500'} pb={'8px'}>
              Cam kết của chúng tôi
            </Text>
            <Text
              color={'#3A2491'}
              fontWeight={600}
              fontSize={'20px'}
              pb={'12px'}
            >
              Triết lý kinh doanh
            </Text>
            <Text
              textAlign={'center'}
              color={'#393939'}
              fontWeight={'400'}
              fontSize={'12px'}
            >
              Chúng tôi cam kết nỗ lực mang lại lợi ích tối ưu cho các bên tham
              gia chuỗi giá trị dịch vụ trong hệ sinh thái Blockchain Fintech
              lank bằng năng lực am hiểu thị trường, tư duy đổi mới và sáng tạo
              không ngừng
            </Text>
          </Flex>
          <Grid
            h='427px'
            templateRows='repeat(10, 1fr)'
            templateColumns='repeat(6, 1fr)'
            gap={4}
            p={'0 20px'}
          >
            {/* <GridItem rowSpan={2} colSpan={1} bg='tomato' /> */}
            <GridItem
              borderRadius={'10px '}
              colSpan={3}
              rowSpan={6}
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover !important'
              position={'relative'}
              bg={`url(${person1})`}
            />
            <GridItem
              borderRadius={'10px '}
              colSpan={3}
              rowSpan={4}
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover !important'
              position={'relative'}
              bg={`url(${person2})`}
            />
            <GridItem
              borderRadius={'10px '}
              colSpan={3}
              rowSpan={6}
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover !important'
              position={'relative'}
              bg={`url(${person4})`}
            />
            <GridItem
              colSpan={3}
              rowSpan={4}
              borderRadius={'10px'}
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover !important'
              position={'relative'}
              bg={`url(${person3})`}
            />
          </Grid>
          <Flex
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            p={'20px'}
            color={'#393939'}
            id='partner'
          >
            <Text fontSize={'16px'} fontWeight={'500'} pb={'8px'}>
              Đồng hành cùng phát triển
            </Text>
            <Text
              color={'#3A2491'}
              fontWeight={600}
              fontSize={'20px'}
              pb={'12px'}
            >
              Đối tác
            </Text>
            <Grid
              w={'100%'}
              h='124px'
              templateRows='repeat(2, 1fr)'
              templateColumns='repeat(4, 1fr)'
              gap={4}
              pt={2}
            >
              <GridItem colSpan={1} rowSpan={1}>
                <Image src={company1}></Image>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1}>
                <Image src={company8}></Image>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1}>
                <Image src={company2}></Image>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1}>
                <Image src={company3}></Image>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1}>
                <Image src={company4}></Image>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1}>
                <Image src={company5}></Image>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1}>
                <Image src={company6}></Image>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1}>
                <Image src={company7}></Image>
              </GridItem>
            </Grid>
          </Flex>
        </Flex>
      </div>
    </div>
  )
}

export default Home
