import type {NextPage} from 'next';
import {  Text, } from "@nextui-org/react";
import Card from '@mui/material/Card';
import  CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';

import Grid from '@mui/material';
import {Typography} from '@mui/material'

export default function InfoCard (props:any){ 

const { title, label, imageURL, studentCount } = props;
const img:any =imageURL;
    return (
<> 

        <Card sx={{border:1  }}>
        <CardHeader css={{position: "absolute", top: 5}}>
                  Estudiantes
            </CardHeader>
           
 <CardMedia
  component="img"
  height="450"
  
   src= {img}
  alt="imagen aqui"/>
    
            <CardContent>
           

<Typography color="black" textAlign={'center'}>{title} se resivieron ok los props </Typography >
<Typography  color="black" textAlign={'center'}> {label} Estudiando </Typography>
 <Typography color="black"  textAlign={'center'}>
 {studentCount} Students
 </Typography>
 <div>  
 <Typography color="black"  textAlign={'center'}>
  <Button variant='contained' > 
     
     Enroll In Course
    
    </Button>
    </Typography>

    </div>
    </CardContent>
    </Card>
       
        </>
    )
}



















































































