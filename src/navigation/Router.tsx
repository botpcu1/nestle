import { useRoutes } from 'react-router-dom'
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
      children: [
        {
          path: '',
          element: <HomePage />
        }
      ]
    }
  ])
}
