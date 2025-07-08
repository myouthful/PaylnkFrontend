import search from "../assets/icons/pages/search.png"

function SearchContacts(){
    return(
       <div className="bg-white flex items-center gap-[4px] rounded-[30px] border-[1px] w-[87%] h-[44px] border-gray ">
         <img className="w-[24px] h-[24px] " src={search} alt="search icon" />
         <input type="text" name="" id="" className="text-lightgray w-[50%] h-[43px] border-none outline-none font-poppins font-normal text-[14px] " placeholder="Search contacts..." />
       </div>
    )
}

export default SearchContacts;