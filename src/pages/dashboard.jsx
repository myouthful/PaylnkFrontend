import AccounDetailsCard from "../components/AccountDetailsCard";
import BottomNavigation from "../components/BottomNavigation";
import Header from "../components/header";
import QuickAction from "../components/QuickAction";

function Dashboard(params) {
    return(
        <div className="flex-col gap-5 flex overflow-x-hidden justify-center items-center">
            <Header />
            <AccounDetailsCard />
            <QuickAction />
            <BottomNavigation />
        </div>
    )
}


export default Dashboard;