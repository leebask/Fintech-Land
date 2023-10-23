import { Box, Flex, HStack, Image, Slide, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineDownCircle } from 'react-icons/ai'
import forus1 from '../../assets/images/forus1.png'
import forus2 from '../../assets/images/forus1.png'
import forus3 from '../../assets/images/forus1.png'
import forus4 from '../../assets/images/forus1.png'
import Slider from 'react-slick'

function WeAndIntroduce() {
  const [tab, setTab] = useState(0)
  const [heightIntro, setHeightIntro] = useState('79px')

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
  }

  const listForUs = [
    {
      text1: '',
      text2: 'Ngôi nhà',
      text3: 'nơi khởi nguồn hạnh phúc',
      text4:
        '"Nhà" có một ý nghĩa thiêng liêng trong trái tim mỗi nguời, là "tổ ám" ngập tràn hạnh phúc, là "gia đinh" yêu thuong luôn chò đợi ta quay về mỗi ngày, là bến đỗ binh yên, là điếm tụa vũng chắc cho một cuộc sống thành công bền vững',
      image: forus1,
    },
    {
      text1: 'Hơn cả nơi an cư đó là',
      text2: 'Sự thịnh vượng',
      text3: 'Của một cộng đồng',
      text4:
        'Sự sung túc của mỗi cá nhân thông qua các hoạt dộng xoay quanh "nhà" như mua bán thuê, đầu tư, sủ dụng dịch vụ trong gia đình sẽ  hình thành nên một cộng đông thịnh vượng lâu dài.',
      image: forus2,
    },
    {
      text1: 'Khát khao kiến tạo',
      text2: 'Giải pháp công nghệ',
      text3: 'Vươn tầm Đông Nam Á',
      text4:
        'Chúng tôi khát khao kiến tạo một cộng đồng thịnh vượng vi tiêu chuẩn, môi bằng các giải pháp công nghệ hiệu quả đến tủ 3 mô  Proptech Fintech và Mobile Commerce.',
      image: forus3,
    },
    {
      text1: 'Từ đó',
      text2: 'Real Estate',
      text3: 'nơi khởi nguồn hạnh phúc',
      text4:
        'Hệ sinh thái dịch vụ bất động sản tiên phong - nơi tất cả các nhu cầu của cộng đồng Real Estate sẽ đuợc đáp ứng nhanh chóng và hiệu quà trên một siêu úng dụng đa tiện ích duy nhất.',
      image: forus4,
    },
  ]
  return (
    <>
      <Flex
        className='weAndIntroduce'
        padding={'0 20px 20px 20px'}
        flexDirection={'row'}
        gap={2}
      >
        <Text
          className={tab === 0 ? 'btn action' : 'btn'}
          onClick={() => setTab(0)}
        >
          Giới thiệu
        </Text>
        <Text
          className={tab === 1 ? 'btn action' : 'btn'}
          onClick={() => setTab(1)}
        >
          Về chúng tôi
        </Text>
      </Flex>
      {tab === 0 ? (
        <>
          <Flex
            padding={'0 20px '}
            fontSize={'12px'}
            flexDirection={'column'}
            height={heightIntro}
            overflow={'hidden'}
          >
            <Text textAlign={'center'}>
              Công ty cổ phần Tập đoàn BLOCKCHAIN FINTECH LAND được xây dựng với
              tầm nhìn trở thành một Tập đoàn đa quốc gia có Hệ sinh thái: Công
              nghệ – Bất động sản – Tài chính toàn cầu niêm yết trên sàn chứng
              khoán quốc tế. SỨ MỆNH CỦA CÔNG TY CỔ PHẦN TẬP ĐOÀN{' '}
              <span style={{ color: 'blue', fontWeight: 'bold' }}>
                BLOCKCHAIN FINTECH LAND
              </span>
            </Text>
            <ul style={{ margin: '0 20px' }}>
              <li>
                Dẫn đầu thị trường về công nghệ số hóa bất động sản, đem đến cho
                Việt Nam và Thế giới một Hệ sinh thái công nghệ 4.0 ứng dụng &
                hỗ trợ trong giao dịch BĐS.
              </li>
              <li>
                Tối đa hóa lợi nhuận bằng các tính năng thông minh, tự động hóa
                hầu hết nhằm giảm tối đa chi phí hoạt động và tái đầu tư, trở
                thành một công cụ đem lại thu nhập liên tục, lớn, lâu dài, 24/7
                tới đối tác đồng hành.
              </li>
              <li>
                Mang lại doanh thu, lợi nhuận góp phần vào sự phát triển kinh tế
                – xã hội của đất nước, hoàn thành tốt nghĩa vụ thuế cho Nhà
                nước.
              </li>
              <li>
                Xác lập vị thế Bản lĩnh Việt – Trí tuệ Việt – Sản phẩm Việt trên
                Thế giới, nhân rộng Hệ thống khắp toàn cầu.
              </li>
            </ul>
          </Flex>
          {heightIntro !== 'auto' && (
            <Flex
              height={'39px'}
              background={
                'linear-gradient(184deg, rgba(255, 255, 255, 0.85) 3.24%, #FFF 40.67%);'
              }
              // filter={'blur(2px)'}
              cursor={'pointer'}
              alignItems={'center'}
              justifyContent={'center'}
              gap={1}
              onClick={() => setHeightIntro('auto')}
            >
              <Text fontSize={'12px'} fontWeight={400} color={'#393939'}>
                Xem thêm
              </Text>
              <AiOutlineDownCircle></AiOutlineDownCircle>
            </Flex>
          )}
        </>
      ) : (
        <Flex
          padding={'0 20px '}
          fontSize={'12px'}
          flexDirection={'column'}
          alignItems={'center'}
          width={'100%'}
        >
          <Box
            //  m='20'
            w={'100%'}
          >
            <Box
              w={'100%'}
              sx={{
                '.slick-dots': {
                  transform: 'translateY(1em)',
                },
                '.slick-dots li button': {
                  _before: {
                    transition: '0.2s',
                    content: "''",
                    borderRadius: '100%',
                    background: '#3B22A1',
                    width: '10px',
                    height: '10px',
                  },
                },
                '.slick-arrow': {
                  backgroundColor: '#3B22A1',
                  color: 'white',
                  w: '5px',
                  h: '10px',
                  transition: '0.2s',
                  _hover: {
                    backgroundColor: '#3B22A1',
                    color: 'white',
                  },
                  _focus: {
                    backgroundColor: '#3B22A1',
                    color: 'white',
                  },
                  _before: {
                    transition: '0.2s',
                  },
                },
                '.slick-prev': {
                  visibility: 'hidden',
                  left: '-40px',
                  _before: {
                    content: '"◀"',
                  },
                },
                '.slick-next': {
                  visibility: 'hidden',
                  right: '-40px',
                  _before: {
                    content: '"▶"',
                  },
                },
              }}
            >
              <Slider {...slickSettings}>
                {listForUs.map((item, index) => (
                  <React.Fragment key={index}>
                    <CardCarousel
                      image={item.image}
                      text1={item.text1}
                      text2={item.text2}
                      text3={item.text3}
                      text4={item.text4}
                    />
                  </React.Fragment>
                ))}
              </Slider>
            </Box>
          </Box>
        </Flex>
      )}
    </>
  )
}

const CardCarousel = ({ image, text1, text2, text3, text4 }) => {
  return (
    <>
      <HStack
        // w='100px'
        h='200px'
        // bg="cyan.400"
        border='cyan.700'
        alignContent='center'
        justifyContent='center'
        mx='4'
      >
        <Flex alignContent={'center'} justifyContent={'center'}>
          <Flex flexDirection={'column'} w={'60%'}>
            <Text fontWeight='500' fontSize={'14px'}>
              {text1}
            </Text>
            <Text fontSize={'16px'} fontWeight={600} color={'#3B22A1'}>
              {text2}
            </Text>
            <Text fontWeight='500' fontSize={'14px'}>
              {text3}
            </Text>
            <Text pt={2}>{text4}</Text>
          </Flex>
          <Flex w={'40%'} >
            <Image src={image}></Image>
          </Flex>
        </Flex>
      </HStack>
    </>
  )
}
export default WeAndIntroduce
