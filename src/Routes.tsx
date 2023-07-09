import { type RouteObject } from 'react-router-dom'
import { Header } from './Components'
import { HomePage, NewCategory, NewVideo } from './Pages'
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Header />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/newcat', element: <NewCategory/> },
      { path: '/newvideo', element: <NewVideo/> }
    ]
  }
]
