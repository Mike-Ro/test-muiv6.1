// src/app/layout.js

import '@mui/material-pigment-css/styles.css';

export default function RootLayout(props) {
  return (
    <html lang="en">
    <body>
    {props.children}
    </body>
    </html>
  );
}
