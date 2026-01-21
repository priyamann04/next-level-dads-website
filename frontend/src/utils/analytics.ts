import ReactGA from 'react-ga4'

const PAGE_TITLES: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/features': 'Features',
  '/get-involved': 'Get Involved',
  '/contact': 'Contact',
}

let isInitialized: boolean = false

export const initializeGA = () => {
  if (!import.meta.env.VITE_MEASUREMENT_ID) {
    console.warn(
      'No VITE_MEASUREMENT_ID found. Google Analytics will not be initialized.',
    )
    return
  }

  try {
    ReactGA.initialize(import.meta.env.VITE_MEASUREMENT_ID, {
      gaOptions: {
        send_page_view: false, // disable automatic page-view tracking, could result in duplicate events
      },
    })
    isInitialized = true
  } catch (error) {
    console.error('Failed to initialize Google Analytics', error)
  }
}

export const getIsInitialized = () => isInitialized

export const trackPageView = (page: string) => {
  if (!isInitialized || !(page in PAGE_TITLES)) return

  ReactGA.send({
    hitType: 'pageview',
    page: page,
    title: PAGE_TITLES[page],
  })
}

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (!isInitialized) return

  ReactGA.event(eventName, params)
}
