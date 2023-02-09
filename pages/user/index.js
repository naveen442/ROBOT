import Header from '@/components/Header';
import Userlist from '@/components/Userlist'
import React, { useState } from 'react'

export async function getStaticProps() {

  const res=await fetch("https://jsonplaceholder.typicode.com/users");
  const users=await res.json();
  
  return {
    props: {
      users,
    }, // will be passed to the page component as props
  }
} 
const user = ({users}) => {
  // const [users,setusers]=useState([]);

  return (
    <div>
     <Userlist users={users}/>

    </div>
  )
}

export default user
