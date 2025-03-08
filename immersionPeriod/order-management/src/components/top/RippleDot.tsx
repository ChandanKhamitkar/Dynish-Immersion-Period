
export default function RippleDot() {
    return (
<div className="relative flex items-center justify-center">
            {/* Heartbeat  */}
            <span className="absolute w-4 h-4 bg-[#00C951] rounded-full opacity-75 animate-ping"></span>

            {/* Main Dot */}
            <span className="relative w-3 h-3 rounded-full bg-[#00C951]"></span>
        </div>
    );
};


