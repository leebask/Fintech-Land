import authSaga from '@/features/auth/authSaga'
import { all } from 'redux-saga/effects'

import registerSaga from '@/features/accountRegister/AccountRegisterSaga'
import reChargeSaga from '@/features/recharge/ReChargeSaga'
import BankInformationSaga from '@/features/bankInformation/BankInformationSaga'
import WithDrawMoneySaga from '@/features/withDrawMoney/WithDrawMoneySaga'
import manageSaga from '@/features/manage/ManageSaga'
import investSaga from '@/features/invest/InvestSaga'
import WelFareSaga from '@/features/welfare/WelFareSaga'
import contractSaga from '@/features/contract/ContractSaga'
import sendFundsSaga from '@/features/sendFunds/SendFundsSaga'
import teamSaga from '@/features/team/TeamSaga'







export default function* rootSaga() {
  yield all([
    authSaga(),
    registerSaga(),
    reChargeSaga(),
    BankInformationSaga(),
    WithDrawMoneySaga(),
    manageSaga(),
    investSaga(),
    WelFareSaga(),
    contractSaga(),
    sendFundsSaga(),
    teamSaga(),

 
  ])
}
