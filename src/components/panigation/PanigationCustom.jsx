// import React, { useEffect } from 'react'
// import { Center, Container } from '@chakra-ui/react'
// // import {
// //   Pagination,
// //   usePagination,
// //   PaginationNext,
// //   PaginationPage,
// //   PaginationPrevious,
// //   PaginationContainer,
// //   PaginationPageGroup,
// // } from '@ajna/pagination'
// // import '@/styles/panigation.scss'
// import PropTypes from 'prop-types'


// const outerLimit = 2
// const innerLimit = 3

// const PanigationCustom = ({setCurrentPageProp,pagesCountProp}) => {
//   const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
//     pagesCount: pagesCountProp,
//     initialState: { currentPage: 1 },
//     limits: {
//       outer: outerLimit,
//       inner: innerLimit,
//     },
//   })

//   useEffect(() => {
//     console.log('Page', currentPage)
//     setCurrentPageProp(currentPage)
//   }, [currentPage])

//   return (
//     <Container
//       className='panigation_Cus'
//       my={'10'}
//       maxWidth={'100%'}
//       border={'2'}
//     >
//       {/* <Center>
//         <Pagination
//           pagesCount={pagesCount}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         >
//           <PaginationContainer>
//             <PaginationPrevious
//               className='btn_action'
//               colorScheme='blue'
//               mr={'2'}
//             >
//               Previous
//             </PaginationPrevious>
//             <PaginationPageGroup>
//               {pages.map((page) => (
//                 <PaginationPage
//                   className={currentPage === page ? 'btn_page' : 'btn_page-active'}
//                   colorScheme='whatsapp'
//                   mr={'1'}
//                   width={'8'}
//                   key={`pagination_page_${page}`}
//                   page={page}
//                 />
//               ))}
//             </PaginationPageGroup>
//             <PaginationNext className='btn_action' colorScheme='blue' mr={'2'}>
//               Next
//             </PaginationNext>
//           </PaginationContainer>
//         </Pagination>
//       </Center> */}
//     </Container>
//   )
// }
// PanigationCustom.propTypes = {
//     setCurrentPageProp: PropTypes.func,
//     pagesCountProp: PropTypes.number,
// }


// export default PanigationCustom
