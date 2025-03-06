import OrderCard from "./bottom/OrderCard";
import { TabContext, TabTypes } from "@/app/page";
import { useContext, useState } from "react";
import { data as initialData } from "@/utils/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Bottom() {
    const { tabSelected, setTabSelected, searchQuery } = useContext(TabContext);
    const [orders, setOrders] = useState(initialData);

    const tabsArray = [TabTypes.New, TabTypes.Cooking, TabTypes.Ready];

    const handleSwipe = (direction: "left" | "right") => {
        const currentIndex = tabsArray.indexOf(tabSelected);
        if (direction === "left" && currentIndex < tabsArray.length - 1) {
            setTabSelected(tabsArray[currentIndex + 1]); 
        } else if (direction === "right" && currentIndex > 0) {
            setTabSelected(tabsArray[currentIndex - 1]); 
        }
    };

    const updateOrderStatus = (orderID: string) => {
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order.id === orderID
                    ? {
                        ...order,
                        status:
                            order.status === TabTypes.New ? TabTypes.Cooking :
                            order.status === TabTypes.Cooking ? TabTypes.Ready :
                            order.status === TabTypes.Ready ? "Done" : "",
                    }
                    : order
            )
        );
    };

    // Filter orders by status & search query
    const filteredOrders = orders.filter(order =>
        searchQuery
            ? order.id.toLowerCase().includes(searchQuery.toLowerCase()) 
            : order.status === tabSelected 
    );

    return (
        <div className="w-full flex-grow bg-[#F2F7F6] flex flex-col justify-start items-start space-y-6 rounded-t-4xl drop-shadow-2xl px-6 pt-3 py-6 overflow-y-scroll">
            {/* Draggable Indicator */}
            <div className="sticky top-0 w-full">
                <div className="w-2/5 h-1 bg-[#D9D9D9]/[0.8] rounded-4xl mx-auto mb-3"></div>
            </div>

            {/* Cards with Drag Gesture */}
            <motion.div
                className="w-full flex flex-col space-y-6"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                    if (info.offset.x < -50) handleSwipe("left"); 
                    if (info.offset.x > 50) handleSwipe("right"); 
                }}
            >
                <AnimatePresence>
                    {filteredOrders.length > 0 ? (
                        filteredOrders.map((order) => (
                            <motion.div
                                key={order.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 40 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="w-full"
                            >
                                <OrderCard
                                    orderID={order.id}
                                    dateTime={order.dateTime}
                                    status={TabTypes[order.status as keyof typeof TabTypes]}
                                    items={order.items}
                                    prepTime={order.prepTime}
                                    amount={order.amount}
                                    updateOrderStatus={updateOrderStatus}
                                />
                            </motion.div>
                        ))
                    ) : (
                        <motion.p
                            className="text-gray-400 text-center w-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            No Orders are available
                        </motion.p>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
