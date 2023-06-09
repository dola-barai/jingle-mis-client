
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";


import router from './Routes/Route.jsx';
import AuthProvider from './Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <AuthProvider>
      <div className=''>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>

  </div>
)
