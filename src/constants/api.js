export let API_GET_TOKEN
export let WS_URL_USER
export let BASE_API_REPORT_SERVICE
export let URL_API = 'https://api.blockchainfintechland.com'

if (import.meta.env.VITE_APP_STAGE === 'production') {
  API_GET_TOKEN = URL_API + '/authentication/login'
} else if (import.meta.env.VITE_APP_STAGE === 'beta') {
  API_GET_TOKEN = URL_API + '/authentication/login'
} else if (import.meta.env.VITE_APP_STAGE === 'development') {
  API_GET_TOKEN = URL_API + '/authentication/login'
}

//user accounts
export const API_REGISTER = URL_API + '/authentication/register'
export const API_GET_PROFILE_USER = URL_API + '/user/profile'

// bank
export const API_GET_INFO_BANK = URL_API + '/user/bank'
export const API_RECHARGE_BANK = URL_API + '/transaction/request-bank'
export const API_SET_BANK = URL_API + '/user/bank'
export const API_WITHDRAW_BANK = URL_API + '/withdraw'
export const API_HISTORY_RECHARGE = URL_API + '/transaction/request-bank?page='
export const API_HISTORY_WITHDRAW = URL_API + '/withdraw?page='
export const API_HISTORY_TRANSACTION = URL_API + '/transaction/user'
export const API_GET_INFO_ADMIN_BANK =
  URL_API + '/public/setting/bank-tranfer-info'

//user

export const API_CHANGE_PASSWORD = URL_API + '/user/change-password'
export const API_CHANGE_PASSWORD_LEVEL_2 = URL_API + '/user/password-level2'
export const API_UP_AVATAR = URL_API + '/user/avatar'

//invest
export const API_GET_INVEST = URL_API + '/package'
export const API_POST_INVEST_BUY = URL_API + '/package/buy'
export const API_GET_MY_INVEST = URL_API + '/package/my'

//wel fare
export const API_GET_ROLL_CALL = URL_API + '/roll-call'
export const API_GET_STATISTIC = URL_API + '/user/statistic'

//send funds
export const API_LIST_SEND_FUNDS = URL_API + '/public/package-saving'
export const API_LIST_MY_FUNDS = URL_API + '/user/savings'
export const API_SEND_FUNDS = URL_API + '/user/send-saving'
export const API_GET_CARD_MONEY = URL_API + '/user/savings-statistic'

//team
export const API_GET_TEAM = URL_API + '/user/list-level'
export const API_GET_TEAM_LEVEL_ALL = URL_API + '/user/report-group-v2?page='
