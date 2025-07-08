import PaymentStatusCard from "../components/transactionstatus"
import Header from "../components/header"
import BottomNavigation from "../components/BottomNavigation"

function TransactionreceiptPage(){
    return(
        <div  className="w-screen gap-8 flex-col overflow-x-hidden flex items-center mb-[180px] ">
         <Header />
         <PaymentStatusCard />
         <BottomNavigation />
        </div>
    )
}

export default TransactionreceiptPage;