import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/theme-provider'
import Layout from './components/layout'
import WeatherDashboard from './pages/weather-dashboard'
import Citypage from './pages/city-page'



function App() {
  return (
    <>
     <BrowserRouter>
     <ThemeProvider defaultTheme='dark' >
      <Layout>
        <Routes>
          <Route path='/' element={<WeatherDashboard/>}/>
          <Route path='/city/:cityName' element={<Citypage/>}/>
        </Routes>
      </Layout>
     </ThemeProvider>
     </BrowserRouter>
    </>
  )
}

export default App
