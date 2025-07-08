import BottomNavigation from "../components/BottomNavigation";
import Header from "../components/header";
import Settings from "../components/profile";
import ProfileCard from "../components/profilecard";


function ProfilePage() {
    return(
        <div className="flex-col overflow-x-hidden flex items-center gap-6 ">
         <Header/>
         <ProfileCard />
         <Settings />
         <BottomNavigation />
        </div>
    )
}


export default ProfilePage;