/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import './styles/WelcomeScreen.scss'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/error/NotFound'
import Login from './features/auth/Login'
import RequiredAuth from './components/route/RequiredAuth'

import React, { useEffect } from 'react'
import AccountRegister from './features/accountRegister/AccountRegister'
import Home from './features/home/Home'
import MenuFooter from './components/MenuFooter'
import Manage from './features/manage/Manage'
import WelcomeScreen from './components/WelcomeScreen'
import BankInformation from './features/bankInformation/BankInformation'
import BusinessLicense from './components/manage/BusinessLicense'
import TaxDocuments from './components/manage/TaxDocuments'
import ReCharge from './features/recharge/ReCharge'
import TransactionHistory from './components/manage/TransactionHistory'
import PasswordManagement from './components/manage/PasswordManagement'
import WithdrawalGrantPassword from './components/manage/WithdrawalGrantPassword'
import Contract from './features/contract/Contract'
import Invest from './features/invest/Invest'
import DetailInvest from './components/invest/DetailInvest'
import Team from './features/team/Team'
import SendFunds from './features/sendFunds/SendFunds'
import Share from './components/manage/Share'
import WithDrawMoney from './features/withDrawMoney/WithDrawMoney'
import WelFare from './features/welfare/WelFare'
import HelpCenter from './components/manage/HelpCenter'
import NotiWS from './components/modal/NotiWS'
import { connectWS } from './utils/socket'
// import './styles/index.scss'

function App() {
  useEffect(() => {
    connectWS()
  }, [])
  console.log(import.meta.env.VITE_APP_STAGE)
  // const listMenu = [
  //   { name: 'Register', link: '/register', component: <AccountRegister /> },
  // ]
  const [isLoadingWelcomeScreen, setIsLoadingWelcomeScreen] =
    React.useState(false)

  setTimeout(() => {
    setIsLoadingWelcomeScreen(true)
  }, 1000)
  return (
    <>
      {isLoadingWelcomeScreen ? (
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register/:code' element={<AccountRegister />} />
          <Route path='/register/' element={<AccountRegister />} />

          <Route
            path='/'
            element={
              <RequiredAuth>
                <Home />

                <MenuFooter />
              </RequiredAuth>
            }
          />
          <Route
            path='/home'
            element={
              <RequiredAuth>
                <Home />
                <MenuFooter />
              </RequiredAuth>
            }
          />

          {/* manage */}
          <Route
            path='/manage'
            element={
              <RequiredAuth>
                <Manage />
                <MenuFooter />
              </RequiredAuth>
            }
          />
          <Route
            path='/manage/bank-info'
            element={
              <RequiredAuth>
                <BankInformation />
                <MenuFooter />
              </RequiredAuth>
            }
          />
          <Route
            path='/manage/business-license'
            element={
              <RequiredAuth>
                <BusinessLicense />
                <MenuFooter />
              </RequiredAuth>
            }
          />
          <Route
            path='/manage/tax-documents'
            element={
              <RequiredAuth>
                <TaxDocuments />
                <MenuFooter />
              </RequiredAuth>
            }
          />
          <Route
            path='/recharge'
            element={
              <RequiredAuth>
                <ReCharge />
                <NotiWS />
              </RequiredAuth>
            }
          />
          <Route
            path='/manage/transaction-history'
            element={
              <RequiredAuth>
                <TransactionHistory />
                <NotiWS />
              </RequiredAuth>
            }
          />
          <Route
            path='/manage/password-management'
            element={
              <RequiredAuth>
                <PasswordManagement />
                <NotiWS />
              </RequiredAuth>
            }
          />
          <Route
            path='/manage/withdrawal-grant-password'
            element={
              <RequiredAuth>
                <WithdrawalGrantPassword />
                <NotiWS />
              </RequiredAuth>
            }
          />
          <Route
            path='/manage/share'
            element={
              <RequiredAuth>
                <Share />
                <NotiWS />
              </RequiredAuth>
            }
          />
          <Route
            path='/manage/help-center'
            element={
              <RequiredAuth>
                <HelpCenter />
                <NotiWS />
              </RequiredAuth>
            }
          />
          {/* contract */}
          <Route
            path='/contract'
            element={
              <RequiredAuth>
                <Contract />
                <MenuFooter />
              </RequiredAuth>
            }
          />

          {/* invest */}

          <Route
            path='/invest'
            element={
              <RequiredAuth>
                <Invest />
                <MenuFooter />
              </RequiredAuth>
            }
          />

          <Route
            path='/invest/:detail'
            element={
              <RequiredAuth>
                <DetailInvest />
                <MenuFooter />
              </RequiredAuth>
            }
          />

          {/* team */}
          <Route
            path='/team'
            element={
              <RequiredAuth>
                <Team />
                <NotiWS />
              </RequiredAuth>
            }
          />

          {/* SendFunds */}

          <Route
            path='/send-funds'
            element={
              <RequiredAuth>
                <SendFunds />
                <MenuFooter />
              </RequiredAuth>
            }
          />

          {/* homebtn */}
          <Route
            path='/withdraw-money'
            element={
              <RequiredAuth>
                <WithDrawMoney />
                <NotiWS />
              </RequiredAuth>
            }
          />

          <Route
            path='/welfare'
            element={
              <RequiredAuth>
                <WelFare />
                <MenuFooter />
              </RequiredAuth>
            }
          />
          {/* 
     <Route
       path='/*'
       element={
          <RequiredAuth>
         <>
           <SidebarWithHeader
             child={
               <Routes>
                 {listMenu.map((item, index) => (
                   <React.Fragment key={index}>
                     <Route path={item.link} element={item?.component} />
                   </React.Fragment>
                 ))}
               </Routes>
             }
           ></SidebarWithHeader>
         </>
          </RequiredAuth>
       }
     ></Route> */}
          <Route
            path='*'
            element={
              <RequiredAuth>
                <>
                  <NotFound />
                </>
              </RequiredAuth>
            }
          ></Route>
        </Routes>
      ) : (
        <WelcomeScreen></WelcomeScreen>
      )}

      <ToastContainer limit={2} />
    </>
  )
}

export default App
