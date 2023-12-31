import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routes/Routes'

function App() {

  return (
    <section className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router} />
    </section>
  )
}

export default App
