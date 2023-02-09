import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'next/image'
import getrobot from '../pages/until/getrobot';
import { useRouter } from 'next/router';
// import { useRouter } from 'next/router'
const Userlist = ({users}) => {
  const [data,setData]=useState('');

  const clickbtn=(e)=>{
 setData(e.target.value);
//  users.filter(e => e.name.toLowerCase().includes(data))
//  console.log(users)
  }
 
    const router = useRouter();
  return (
    <div className='container mt-3'>
     <input type="text" className="mb-4" value={data}onChange={clickbtn}/>
    <div className="row 5">
    {users.filter((e)=>{
          if(e.name.toLowerCase().includes(data.toLowerCase())){
            return e;
        }}).map((user)=>{
            return(
    <div key={user.id} className="col-sm-12 col-lg-4 mb-5">
          <Card >
      <Card.Body>
        <Card.Title>name:{user.name}</Card.Title>
        <Image  width={200} 
      height={200} src={getrobot(user.id)} alt={user.id}/>
        <Card.Text>
       Email: {user.email}
        </Card.Text>
        <Card.Text>
        street:{user.address.street}
        </Card.Text>
        <Card.Text>
        city:{user.address.city}
        </Card.Text>
        <Button variant="primary" onClick={()=>router.push(`/user/${user.id}`)}>click</Button>
      </Card.Body>
    </Card>
      </div> 
          
            )
        })}
       
    </div>
    </div>
  )
}

export default Userlist
