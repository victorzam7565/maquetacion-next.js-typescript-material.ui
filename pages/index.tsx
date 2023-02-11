import { Inter } from '@next/font/google'
import ResponsiveAppBar from '@/components/navbar'
import ComplexGrid from '@/components/grid'
import Flexbox from 'flexbox-react';
import InfoCard from '@/components/infoCard'
import type { NextPage } from 'next'
import Footer from '@/components/footer';
//Practica material-ui y flexbox para maquetar en next.js

const inter = Inter({ subsets: ['latin'] })
const Home: NextPage = () =>  {

  return (
<>

<Flexbox flexDirection="column" minHeight="100vh">
  <Flexbox element="header" height="60px">
  <ResponsiveAppBar/>
  </Flexbox>
 

  <Flexbox flexGrow={1}>
  <ComplexGrid/>
  </Flexbox>

  <Flexbox flexGrow={1} flexDirection="column" minHeight="50vh">

  <InfoCard
label='estamos aqui'
title='aqui'
imageURL={"https://littlevisuals.co/images/sunset.jpg" }
studentCount='321454554'
/>
</Flexbox>

  <Flexbox element="footer" height="auto" flexGrow={1} flexDirection="column" >
  
  <Footer/>

  </Flexbox>
</Flexbox>

</>
)
  }

   export default  Home ;
  
    
    
    
 
 

 
 














































































































