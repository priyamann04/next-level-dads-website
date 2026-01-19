import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import {
  initializeGA,
  getIsInitialized,
  trackPageView,
} from './utils/analytics'

initializeGA()

const queryClient = new QueryClient()

const usePageViews = () => {
  if (process.env.NODE_ENV !== 'production') return

  const location = useLocation()

  useEffect(() => {
    if (getIsInitialized()) {
      trackPageView(location.pathname)
    }
  }, [location])
}

const AppContent = () => {
  usePageViews()

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/features"
              element={<Features />}
            />
            <Route
              path="/get-involved"
              element={<GetInvolved />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
