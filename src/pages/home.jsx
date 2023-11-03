import { useNavigate } from "react-router-dom";

const Home =()=>{

    const navigate = useNavigate()

    return (
        <div className='flex flex-col md:flex-row items-center justify-evenly md:h-[100vh] h-[100vh] bg-hero text-[#ffff]'>
            <div className="mt-[95px] md:mt-0 md:space-y-10 border-[3px] md:p-[28px] p-[10px] border-white h-fit min-h-[150px] md:min-h-[240px] md:w-[340px] flex justify-center flex-col">
                <h1 className='md:text-[32px] text-[24px] font-semibold font-serif'>Welcome</h1>
                <p className='md:text-[22px] text-[24px] font-semibold font-serif text-[#f71bd2]'>Own, Rent & Hire</p>
            </div>
            <div className="md:w-[40%] w-[90%] text-[24px] flex justify-center items-center flex-col">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam laudantium ad asperiores cumque deserunt error eius incidunt. Rerum, animi ducimus?</p>
                <button onClick={()=> navigate('/houses')} className='bg-[#f71bd2b9] w-fit mt-[9px] md:mt-0 p-[8px] self-center rounded-md hover:bg-transparent hover:text-pink-500 hover:border-b-[3px] hover:border-pink-600 hover:rounded-none'>View</button>
                
            </div>
        </div>
    )
}

export default Home;