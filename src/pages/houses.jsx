import Card from "../components/card";
import img from '../assets/img2.jpg'
import img2 from '../assets/img1.jpg'
import { useState } from "react";

const Houses = () => {
    const [search, setSearch] = useState('')

    const houses = [
        {'price':1200 , 'location': "kisii", 'postImg':img},
        {'price':1200 , 'location': "nakuru", 'postImg':img2},
        {'price':2000 , 'location': "kisii", 'postImg':img},
        {'price':2000 , 'location': "kisii", 'postImg':img2},
        {'price':2000 , 'location': "kisii", 'postImg':img2},
        {'price':1300 , 'location': "kisii", 'postImg':img2},
        {'price':3000 , 'location': "migori", 'postImg':img},
        {'price':3000 , 'location': "migori", 'postImg':img2},
        {'price':3000 , 'location': "migori", 'postImg':img},
        {'price':1300 , 'location': "kisii", 'postImg':img2},
    ]

    return ( 
        <div className="h-[100vh] mt-[90px] flex">
            <div className="w-full md:w-[70%] h-fit min-h-full bg-slate-500">
                <div className="h-[40%] mb-1 relative">
                    <img className=" " src={img2 } alt="" />
                    <div className="absolute md:top-[40%] top-[20%] left-[15%] md:left-[30%] text-[#fff] font-semibold text-[24px] bg-[#000000a2] p-[10px]">BOOK, HIRE, RENT</div>
                    <div className="border-l-[7px] m-5 p-[10px] border-pink-600 "> 
                    <span className="text-pink-500 font-bold text-[24px]">AIM</span>
                        <p>We offer single, two and three bedroom House well fitted.The apartments/houses are fitted with modern facilities such as showers, free parking and hanglines.</p>
                    </div>
                </div>
                    <form className="md:hidden w-[90%] flex items-center justify-center">
                        <input onChange={(e)=>setSearch(e.target.value)} className="focus:outline-none py-1 px-3" type="search" placeholder="Search Location" />
                        <button type="submit" className=" border-t border-r border-b  p-0.5" > search</button>
                    </form>
                    <h2 className="m-[10px] text-[24px] font-bold">Highlights</h2>
                <div className="flex flex-wrap items-center justify-center">
                            {houses.map((house, index)=>{
                                if (search === '') {
                                    return(
                                        <Card key={index} location = {house.location} price={house.price} postImg={house.postImg} />
                                    )
                                } else if (house.location.toLocaleLowerCase() === search.toLocaleLowerCase()) {
                                        return(
                                        <Card key={index} location = {house.location.toLocaleUpperCase()} price={house.price} postImg={house.postImg} />
                                    )
                                    
                                } else{
                                    return null
                                }
                                
                            })}
                </div>
            </div>
            <div className="bg-slate-400 w-[30%] fixed right-0 h-full md:flex md:flex-col hidden">
                <div className="mt-3">
                    <form className="w-[90%] flex items-center justify-center">
                        <input onChange={(e)=>setSearch(e.target.value)} className="focus:outline-none py-1 px-3" type="search" placeholder="Search Location" />
                        <button type="submit" className=" border-t border-r border-b  p-0.5" > search</button>
                    </form>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Houses;