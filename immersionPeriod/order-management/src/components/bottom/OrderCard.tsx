import { TabTypes } from "@/utils/tabTypes";
import { RiBillLine } from "react-icons/ri";
import { IoWarningOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";

type FoodItem = {
    name: string;
    quantity: number
}

interface OrderCardProps {
    orderID: string;
    dateTime: string;
    status: TabTypes;
    items: FoodItem[];
    prepTime: string;
    amount: number;
    updateOrderStatus: (orderID: string) => void;
}

export default function OrderCard(props: OrderCardProps) {
    return (
        <div className="w-full h-fit px-5 py-3 flex flex-col justify-start items-start rounded-xl text-left bg-white shadow-md hover:scale-105 transition-transform duration-300 ease-out">
            {/* Order Id */}
            <p className="text-[#1e2939] font-semibold text-sm sm:text-base mb-1 w-full"><span>Order {props.orderID}</span> <span className="bg-[#f3f4f6] rounded px-3 py-2 text-[10px] sm:text-xs font-semibold float-right">Takeaway</span></p>

            {/* Timings */}
            <p className="text-[#78736F] text-[10px] sm:text-sm font-light mb-2">Placed on {props.dateTime}</p>

            {/* Ordered items */}
            <div className="mb-3 flex flex-col justify-start gap-2">
                {
                    props.items.map((item, index) => <p key={index} className="text-[#444562] font-semibold text-wrap text-xs flex items-center tracking-wide"><span><IoWarningOutline size={20} className="text-red-600"/></span> <span className="ml-1">{item.name}</span> <span className="text-[#7F7771] font-semibold tracking-wider text-xs ml-1">x {item.quantity}</span></p>)
                }
            </div>
            
            {/* Preparation Time */}
            <div className="w-full flex justify-between items-center">
                <p className="flex space-x-1 items-center text-xs"><span>⌛</span>Prep Time:<span className="text-black text-sm font-medium ml-1">{props.prepTime}</span></p>
                
                {/* Amount */}
                <p className="text-[#FF690F] font-semibold text-sm sm:text-base">₹{props.amount}</p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-black/80 rounded-4xl  my-5"></div>

            {/* Actions buttons */}
            <div className="w-full flex justify-between items-center">
                <p className={`flex space-x-1 items-center cursor-pointer ${props.status === 'New' ? "hidden" : ""}`}>
                    <RiBillLine className="text-[#7F7771]" />
                    <span className="text-xs">{props.status === 'Cooking' ? "Print KOT" : "Get Bill"}</span>
                </p>
                <div
                    onClick={() => props.updateOrderStatus(props.orderID)}
                    className={`px-5 py-2 rounded-lg 
                    ${props.status === 'New'
                            ? "bg-[#2B7FFF]" :
                            props.status === 'Cooking'
                                ? "bg-[#F4B400]"
                                : "bg-[#34A853]"} text-white text-xs sm:text-sm font-semibold cursor-pointer tracking-wide self-end flex justify-center items-center`}> <span className="mr-2"><FaRegCheckCircle size={16}/></span>
                    {props.status === 'New' ? "Start" : props.status === 'Cooking' ? "Ready" : props.status === 'Ready' ? "Complete" : "Done"}</div>
            </div>
        </div>
    );
};
