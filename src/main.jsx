import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { history } from './utils/history'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from './app/store'
import { CSSReset } from '@chakra-ui/react'

import setUpInterceptors from './api/setUpInterceptors'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ChakraProvider>
    <CSSReset />
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
    </ChakraProvider>
  </Provider>
)
setUpInterceptors(store)
