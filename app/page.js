import Image from 'next/image'
import graph from "./assets/graph.png"
import copy from "./assets/copy.png"
import log from "./assets/log.png"
import graph1 from "./assets/graph.svg"
import graph2 from "./assets/graph2.svg"
import graph3 from "./assets/empty.svg"

export default function Home() {
  return (
    <>
    <main className=' bg-[#1A192D] h-screen w-full bg-hero bg-contain bg-center  bg-no-repeat    flex flex-col justify-around items-center ' >
   <div> <h1 className=' font-bold text-white text-5xl'>working our magic</h1> <p className=' text-center text-white mt-10 font-light'>Your transaction is being processed</p></div>

 <div className=' w-[1000px]   '>
    <div className="org   p-5    ">
      
       <div className=' flex  justify-between mx-3  '><h4 className='shadowbox gradient-border-mask px-7 py-3 '><b>order id:</b>  pR7h3raq71otwFuCqvSpqf <Image  className='inline ml-2' src={copy}></Image></h4> <h4 className='gradient-border-mask px-7 py-3  shadowbox'><b>Creation time:</b>  21/09/2023, 19:14:37</h4></div>

<div className='  m-3  gradient-border-mask  style p-4   '>
  
  <div className='minibg gradient-border-mask flex items-center m-auto justify-around  py-10 '>
  <div className='flex flex-col' ><Image  src={graph1}></Image> <button className='gradient-border-mask btnbg px-5 py-2 mt-3 text-white text-xs '>Order Received</button></div>
<div className='flex flex-col'><Image  src={graph1}></Image>  <button className='gradient-border-mask btnbg px-5 py-2 mt-3 text-white text-xs '>funds received</button></div>
<div className='flex flex-col'><Image  src={graph2}></Image>  <button className='gradient-border-mask btnbg px-5 py-2 mt-3 text-white text-xs '>anonymizing</button></div>
<div className='flex flex-col'><Image  src={graph3}></Image>  <button className='gradient-border-mask btnbg px-5 py-2 mt-3 text-white text-xs '>converting</button></div>
<div className='flex flex-col'><Image  src={graph3}></Image>  <button className='gradient-border-mask btnbg px-5 py-2 mt-3 text-white text-xs '>completed</button></div>

</div>

<div className='gradient-border-mask shadowbox  max-w-sm m-auto text-center my-3 ' >
<h3 className='px-8 py-3'> <span className='text font-bold'>  Todays Average Swap Time : </span> <span className=' text-white font-bold'>30 minutes</span></h3>
</div>

</div>


<div className='shadowbox bordergrad px-7 py-3 mx-5 flex justify-between   '> 
<p className=' text-white font-bold'>Recipient Wallet: </p> 
 <p className=' font-light'> 0xferv3552mnjud953234sddn2323434bdffswfd8  </p>
  <p className=' font-light'>  will receive</p> <p className=' font-bold text-white'>175.7936</p> 
  <Image src={log}></Image> <p className=' text-white'>AVAX</p> </div>

    </div></div></main></>
  )
}
