import AccounDetailsCard from "../components/AccountDetailsCard";
import BottomNavigation from "../components/BottomNavigation";
import DashboardQuickLink from "../components/dashboardquicklink";
import Header from "../components/header";
import PaymentAndTransfer from "../components/paymentAndTransferCard";
import QuickAction from "../components/QuickAction";
import RecentTransactions from "../components/RecentTransactions";

function Dashboard(params) {
    return(
        <div className="flex-col gap-5 flex overflow-x-hidden pb-[70px] bg-[#F6F9FC] justify-center items-center">
            <Header />
            <DashboardQuickLink />
            <AccounDetailsCard />
            <PaymentAndTransfer />
            <RecentTransactions />
            {/* <BottomNavigation /> */}
        </div>
    )
}


export default Dashboard;