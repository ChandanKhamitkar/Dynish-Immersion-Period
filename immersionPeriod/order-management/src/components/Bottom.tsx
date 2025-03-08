import OrderCard from "./bottom/OrderCard";
import { TabContext } from "@/context/TabContext";
import { TabTypes } from "@/utils/tabTypes";
import { useContext, useState } from "react";
import { data as initialData } from "@/utils/data";
import { motion, AnimatePresence, spring } from "framer-motion";

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
        // Find the current order's status
        const currentOrder = orders.find(order => order.id === orderID);
        if (!currentOrder) return;
    
        const currentStatus = currentOrder.status;
        const nextStatus =
            currentStatus === TabTypes.New ? TabTypes.Cooking :
            currentStatus === TabTypes.Cooking ? TabTypes.Ready :
            currentStatus === TabTypes.Ready ? "Done" : currentStatus;
    
        // Trigger exit animation before updating state
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order.id === orderID
                    ? { ...order, isExiting: true }
                    : order
            )
        );
    
        // Delay actual state update to allow animation
        setTimeout(() => {
            setOrders(prevOrders =>
                prevOrders.map(order =>
                    order.id === orderID
                        ? { ...order, status: nextStatus, isExiting: false }
                        : order
                )
            );
        }, 300); // Wait for animation to complete -> Imp 
        
        // Auto-switch tab if moving from New → Cooking or Cooking → Ready
        setTimeout(() => {
            if (currentStatus === TabTypes.New) {
                setTabSelected(TabTypes.Cooking);
            } else if (currentStatus === TabTypes.Cooking) {
                setTabSelected(TabTypes.Ready);
            }
        }, 600); // Wait for animation to complete -> Imp 


    };
    

    // Filter orders by status & search query
    const filteredOrders = orders.filter(order =>
        searchQuery
            ? order.id.toLowerCase().includes(searchQuery.toLowerCase()) 
            : order.status === tabSelected 
    );

    // Define animation variants for tab switching
    const tabVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? "-100%" : "100%",
            opacity: 0,
        }),
    };

    const cardVariants = {
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.3, ease: "easeOut" },
        },
    };

    const direction = tabsArray.indexOf(tabSelected); // Determines slide direction

    return (
        <div className="w-full flex-grow flex flex-col space-y-6 px-3 sm:px-6 pt-3 py-6 overflow-hidden select-none">
            
            {/* Cards Container with Drag Gesture & Vertical Scroll */}
            <motion.div
                className="w-full flex h-full overflow-hidden cursor-grab"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                    if (info.offset.x < -50) handleSwipe("left"); 
                    if (info.offset.x > 50) handleSwipe("right"); 
                }}
            >
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={tabSelected}
                        className="w-full flex flex-col space-y-6 overflow-y-auto scrollbar-hide pb-6"
                        variants={tabVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, type: spring }}
                        custom={direction}
                        style={{ maxHeight: "calc(100vh - 100px)", paddingBottom: "1rem" }}
                    >
                        <AnimatePresence>
                            {filteredOrders.length > 0 ? (
                                filteredOrders.map((order) => (
                                    <motion.div
                                        key={order.id}
                                        variants={cardVariants}
                                        exit="exit"
                                        animate={{ opacity: 1, scale: 1 }}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
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
                                <p className="text-gray-400 text-center w-full">
                                    No Orders are available
                                </p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
