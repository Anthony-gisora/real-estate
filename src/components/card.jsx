const Card = ({postImg, location, price}) => {
    return ( 
         postImg ?
            <div className="w-[75%] md:h-[240px] md:w-[240px] m-2  bg-[#00000081] flex flex-col rounded-md hover:bg-white hover:scale-125">
                <div className="h-[80%]  self-center rounded-md ">
                    <img className="w-full h-full object-cover rounded-t-md "  src={postImg} alt="" />
                </div>
                <div className="flex items-center justify-between px-2">
                    <div className="">
                        <p>{location}</p>
                        <p>{price}</p>
                    </div>
                    <div className=" self-end flex flex-col items-center">
                        <div className="">
                            info
                        </div>
                        <div className="">
                            <i>call</i>
                            <i>whatsApp</i>
                        </div>
                    </div>
                </div>
            </div>
            :
            null
     );
}
 
export default Card;