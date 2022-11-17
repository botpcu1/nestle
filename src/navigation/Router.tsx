import { useRoutes } from 'react-router-dom'
import { LoggedLayout } from '../layouts/LoggedLayout'
import { SignInPage } from '../pages/authentication'
import { HomePage } from '../pages/main/Home'
import { Tier1Page, Tier2Page, Tier3Page, Tier4Page, Tier5Page, Tier6Page } from '../pages/main/tiers'

export default function Router() {
  return useRoutes([
    {
      path: '',
      children: [
        {
          path: '',
          element: <SignInPage />
        }
      ]
    },
    {
      path: '/home',
      element: <LoggedLayout />,
      children: [
        {
          path: '/home',
          element: <HomePage />
        },
        {
          path: '/home/1',
          element: <Tier1Page />
        },
        {
          path: '/home/2',
          element: <Tier2Page />
        },
        {
          path: '/home/3',
          element: <Tier3Page />
        },
        {
          path: '/home/4',
          element: <Tier4Page />
        },
        {
          path: '/home/5',
          element: <Tier5Page />
        },
        {
          path: '/home/6',
          element: <Tier6Page />
        }
      ]
    }
  ])
}
