
import { Provider } from 'react-redux'
import './App.css'
import { LocalizationProvider } from './localization/LocalizationContext'

import Theme from './themes/component/Theme'
import { ThemeProvider } from './themes/ThemeContext'
import store from './store/store'
import ErrorBoundary from './errorBoundary/ErrorBoundary'
import Parent from './callChildFun/Parent'


function App() {

  return (
    <>
     {/*  <ThemeProvider>
        <LocalizationProvider>
          <Provider store={store}>
            <ErrorBoundary>


              <Theme></Theme>
            </ErrorBoundary>
          </Provider>
        </LocalizationProvider>
      </ThemeProvider> */}
      <Parent></Parent>

    </>
  )
}

export default App
