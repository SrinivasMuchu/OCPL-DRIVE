import React from 'react';
import HouseIcon from '@mui/icons-material/House';
import './Account.css'

const Account = (props) => {

  return (
    <div className='account'>
      
      <h1 className='title-acc'>Account</h1>
      <h2 className='name-con'>Name:<span>{`${props.name}` }</span></h2>
      <h2 className='name-con'>Thanks for Registering </h2>
      <h5 className='name-con'>now you can go to our home page</h5>
      <button className='home-btn'><a href='/' style={{textDecoration:"none"}}><HouseIcon/>Home</a></button>
    </div>
  );
}

export default Account;
