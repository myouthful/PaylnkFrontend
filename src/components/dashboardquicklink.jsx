import settingsoutline from '../assets/icons/pages/settingsoutline.svg';
import notification from '../assets/icons/pages/notification.svg'


function DashboardQuickLink() {
    return(
        <div className='hidden min-[1200px]:flex w-[89%] items-center px-[20px] justify-between ' >
         <div className='flex justify-between items-center '>
            <img className='w-[22px] h-[22px] ' src={settingsoutline} alt="" />
         </div>

         <div className='flex justify-between items-center '>
            <img className='w-[22px] h-[22px] ' src={notification} alt="" />
         </div>
        </div>
    )
}


export default DashboardQuickLink