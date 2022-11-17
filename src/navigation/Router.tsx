import { useRoutes } from 'react-router-dom'
import { LoggedLayout } from '../layouts/LoggedLayout'
import { SignInPage } from '../pages/authentication'
import { HomePage } from '../pages/main/Home'

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
          path: '/1',
          element: <HomePage />
        },
        {
          path: '/2',
          element: <HomePage />
        },
        {
          path: '/3',
          element: <HomePage />
        },
        {
          path: '/4',
          element: <HomePage />
        },
        {
          path: '/5',
          element: <HomePage />
        },
        {
          path: '/6',
          element: <HomePage />
        }
      ]
    }
  ])
}
