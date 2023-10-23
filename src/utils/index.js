export * from './cookies'
export * from './listOptions'

import { toast } from 'react-toastify'

export const toHex = (token) => {
  if (token === undefined) return ''
  let str = token
  var result = ''
  for (let i = 0; i < str.length; i++) {
    result += str.charCodeAt(i).toString(16)
  }
  return result
}
export const iToast = function (message, status = 'success', duration = 2000) {
  toast[status](message, {
    newestOnTop: true,
    autoClose: duration,
    theme: 'colored',
    pauseOnFocusLoss: false,
    pauseOnHover: false,
  })
  toast.clearWaitingQueue()

  /**
   * Convert Unicode/UTF-8 to ASCII
   * @param {String} alias Input value
   */
}
export function toASCII(alias = '') {
  var str = alias
  str = str.toLowerCase()
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  //str = str.replace(/!|@|%|\^|\*|\(|\)|\+|=|<|>|\?|\/|,|\.|:|;|'| |'|&|#|\[|\]|~|$|-|_/g, '-')
  /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
  str = str.replace(/ + /g, ' ') //thay thế 2- thành 1-
  str = str.replace(/^ +| +$/g, '')
  //cắt bỏ ký tự - ở đầu và cuối chuỗi
  return str
}
