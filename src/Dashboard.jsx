import React from 'react';
import Password from './component/Password';
import ProductList from './component/ProductList';
import UserList from './component/UserList';
import AddUserForm from './component/AddUserForm';
import { useNavigate } from 'react-router-dom'




const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate(); // 🔁 Hook
  return (
    <>
    <div className='flex w-screen justify-between'>
      <h1>Welcome to the Dashboard 🎉</h1>
      <button className='pr-5' style={{marginRight : '30px',background: 'gray',color :'white'}} onClick={onLogout}>Logout</button>
    </div>
    <div className='p-2 bg-green-400 rounded-2xl w-40 ms-1.5 text-center text-white cursor-pointer' onClick={()=> navigate('/create-database')}>Create Database</div>
    <AddUserForm />
{/* <ProductList /> */}
<UserList />

    </>
  );
};

export default Dashboard;
