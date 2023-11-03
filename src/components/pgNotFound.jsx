import { useNavigate } from "react-router-dom";

const PgNotFound = () => {

    const navigate = useNavigate()

    return ( 
        <div className="flex flex-col md:flex-row items-center justify-evenly md:h-[100vh] h-full backdrop-blur-[2] bg-broken object-cover text-[#ffff]">
            <div className="flex items-center md:mt-0 mt-[90px] justify-center md:w-[540px] w-[80%]  border-[5px] border-pink-700 text-pink-500 md:h-[340px] h-[210px] bg-[#0000008a]">
                
                <h1 className="md:text-[50px] text-[24px]">404|</h1>
                <p className="md:text-[40px] text-[22px]">Page Not Found <span className="text-[40px] font-bold">:(</span></p>
            </div>
            <div className="md:w-[50%] w-fit flex flex-col">
                <p className="text-[28px]">The developer is working on this page. It will be available to you as soon as it's done. </p>
                <p className="text-[24px]">Thank You : )</p>
                <button onClick={()=>navigate('/')} className='bg-[#f71bd2b9] w-fit p-[8px] self-center rounded-md hover:bg-transparent hover:text-pink-500 hover:border-b-[3px] hover:border-pink-600 hover:rounded-none'>Go Back</button>
            </div>
            
        </div>
     );
}
 
export default PgNotFound;