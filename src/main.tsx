import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './Context/Store'
import { routes } from './Routes'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

export type RootState = ReturnType<typeof store.getState>

// Inferred dispatch type: Dispatch & ThunkDispatch<RootState, undefined, AnyAction>
export type AppDispatch = typeof store.dispatch
