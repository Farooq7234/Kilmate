import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/theme-provider'
import Layout from './components/layout'
import WeatherDashboard from './pages/weather-dashboard'
import Citypage from './pages/city-page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


function App() {

  const queryClient = new QueryClient()
  return (
    <>
     <QueryClientProvider client={queryClient}>
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
     <ReactQueryDevtools initialIsOpen={false}/>
     </QueryClientProvider>
    </>
  )
}

export default App
