
import './App.css'
import './styles/index.scss'
import NewOrders from './pages/OrderDetailNew'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { THEME_OPTIONS } from './Utils/constantData';

function App() {
  const theme = createTheme(THEME_OPTIONS);

  return (
    <>
     <ThemeProvider theme={theme}>
      <NewOrders page ='newOrder'/>
      </ThemeProvider>
    </>
  )
}

export default App
