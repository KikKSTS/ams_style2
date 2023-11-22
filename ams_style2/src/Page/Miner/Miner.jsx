import React from 'react'
import MinerContent1 from './MinerContent1'
import MinerContent2 from './MinerContent2'
import MinerContent3 from './MinerContent3'
import MinerContent4 from './MinerContent4'
import MinerContent5 from './MinerContent5'
import Footer from '../components/Footer'


const Miner = () => {
  return (
    <div className='w-full flex flex-col justify-start items-center'>
        <MinerContent1 />
        <MinerContent2 />
        <MinerContent3 />
        <MinerContent4 />
        <MinerContent5 />
     

    </div>
  )
}

export default Miner