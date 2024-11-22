
import { Provider } from 'react-redux'
import './App.css'
import { LocalizationProvider } from './localization/LocalizationContext'

import Theme from './themes/component/Theme'
import { ThemeProvider } from './themes/ThemeContext'
import store from './store/store'


function App() {

  return (
    <>
      <ThemeProvider>
        <LocalizationProvider>
          <Provider store={store}>
            <Theme></Theme>
          </Provider>
        </LocalizationProvider>
      </ThemeProvider>

    </>
  )
}

export default App
