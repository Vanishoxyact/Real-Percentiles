import React from 'react';
import ReactDOM from 'react-dom';
import Main from './ui/main';

const title = 'My Simple Express React Webpack Babel Setup Environment';

ReactDOM.render(
   <div>
      {title}<Main/>
   </div>,
  document.getElementById('app')
);