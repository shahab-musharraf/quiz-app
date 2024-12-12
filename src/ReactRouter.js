import React from 'react';

import {BrowserRouter, Route, Routes}  from 'react-router-dom';

const ReactRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<div>HOme Page</div>} />
            <Route path='/contact' element={<div>Contact Page</div>} />
            <Route path='/about' element={<div>About Page</div>} />
            <Route path='*' element={<div>Page Nhi mila</div>} />
        </Routes>
    </BrowserRouter>
  )
}

export default ReactRouter