import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
    return (
        <>
        <Navbar />
        <div className='p-12'>
            <div className='bg-gray-200 h-96 w-full rounded-xl'></div>
            
            
        </div>
        <div className='flex p-12 my-12 gap-10'>
            <div className='bg-gray-200 h-96 w-2/5 rounded-xl'></div>
            <div className='bg-gray-200 h-96 w-3/5 rounded-xl'></div>
        </div>
            <Footer />
        </>
    );
};
export default Dashboard;
