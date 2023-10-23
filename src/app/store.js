import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import authReducer from '@/features/auth/authSlice'
import registerReducer from '@/features/accountRegister/AccountRegisterSlice'
import reChargeReducer from '@/features/recharge/ReChargeSlice'
import bankInformationReducer from '@/features/bankInformation/BankInformationSlice'
import withDrawMoneyReducer from '@/features/withDrawMoney/WithDrawMoneySlice'
import manageReducer from '@/features/manage/ManageSlice'
import investReducer from '@/features/invest/InvestSlice'
import welFareReducer from '@/features/welfare/WelFareSlice'
import contractReducer from '@/features/contract/ContractSlice'
import sendFundsReducer from '@/features/sendFunds/SendFundsSlice'
import teamReducer from '@/features/team/TeamSlice'





import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './saga'

const sagaMiddleWare = createSagaMiddleware()

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  reCharge: reChargeReducer,
  bankInformation: bankInformationReducer,
  withDrawMoney: withDrawMoneyReducer,
  manage: manageReducer,
  invest: investReducer,
  welFare: welFareReducer,
  contract: contractReducer,
  sendFunds: sendFundsReducer,
  team: teamReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.VITE_APP_STAGE === 'development',

  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare],
})
sagaMiddleWare?.run(rootSaga)
