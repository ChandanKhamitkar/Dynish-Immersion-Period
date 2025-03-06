import OrderCard from "./bottom/OrderCard";
import { TabContext, TabTypes } from "@/app/page";
import { useContext } from "react";
import { data } from "@/utils/data";

export default function Bottom() {
    const { tabSelected, searchQuery } = useContext(TabContext);

    // Filter orders by status & search query
    const filteredOrders = data.filter(order => 
        searchQuery 
            ? order.id.toLowerCase().includes(searchQuery.toLowerCase()) // Ignore tabSelected if searching
            : order.status === tabSelected // Show based on selected tab if no search query
    );

    return (
        <div className="w-full flex-grow bg-[#F2F7F6] flex flex-col justify-start items-start space-y-6 rounded-t-4xl drop-shadow-2xl px-6 pt-3 py-6 overflow-y-scroll">
            {/* Draggable */}
            <div className="sticky top-0 w-full">
                <div className="w-2/5 h-1 bg-[#D9D9D9]/[0.8] rounded-4xl mx-auto mb-3"></div>
            </div>

            {/* Cards */}
            {
                filteredOrders.length > 0 ?
                filteredOrders.map(
                        (order, index) =>
                            <OrderCard key={index}
                                orderID={order.id}
                                dateTime={order.dateTime}
                                status={TabTypes[order.status as keyof typeof TabTypes]}
                                items={order.items}
                                prepTime={order.prepTime}
                                amount={order.amount} />
                    )
                    :
                    <p className="text-gray-400 text-center w-full">No Orders are available</p>
            }
        </div>
    );
};
