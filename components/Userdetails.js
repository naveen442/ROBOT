import getrobot from '../pages/until/getrobot';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Image from 'next/image'
const Userdetails=({data})=>{
  console.log(data);

  return (
     <div className='container'>

    <Card >
    <Card.Body>
      <Image  width={300} 
    height={300} src={getrobot(data.id)} alt={data.id}/>
      <Card.Text>
     Email: {data.email}
      </Card.Text>
      <Card.Text>
      street:{data.address.street}
      </Card.Text>
      <Card.Text>
      city:{data.address.city}
      </Card.Text>
    </Card.Body>
  </Card> 
  </div>
    )
}
export default Userdetails;

