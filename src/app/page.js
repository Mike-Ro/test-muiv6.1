// src/app/page.js

import {styled} from '@mui/material-pigment-css';

// https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-3-migrating-nexthead
export const metadata = {
  title: "Home page title",
}

const Heading = styled('div')({
  fontSize: '4rem',
  fontWeight: 'bold',
  padding: '10px 0px',
});

export default function page() {
  return <Heading>Hello</Heading>;
}
