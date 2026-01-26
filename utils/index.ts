type LogType = "error" | "success" | "warning";

export function logMessage(
    type: LogType = "error",
    message: string = "Something happened"
): void {

    // Get or create wrapper
    let wrapper = document.getElementById('error-log-wrapper') as HTMLDivElement | null;

    if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.id = 'error-log-wrapper';
        wrapper.className = `
        fixed top-4 left-1/2 transform -translate-x-1/2 z-50
        w-[340px] flex flex-col-reverse items-center space-y-reverse space-y-[-2px]
        pointer-events-none
        `;
        document.body.appendChild(wrapper);
    }

    // Styles per log type
    const typeStyles: Record<LogType, string> = {
        error: "bg-red-600 text-white",
        success: "bg-green-600 text-white",
        warning: "bg-yellow-500 text-white",
    };

    // Create log box
    const logBox = document.createElement('div');
    const offset = wrapper.children.length > 3 ? 3 : wrapper.children.length;

    logBox.draggable = true;
    logBox.className = `
        absolute w-full animate-fade-in rounded-md transition-all pointer-events-auto
        top-20
    `;
    logBox.className += wrapper.children.length > 3 ? ' shadow-sm' : ' shadow-md';

    // Slight stacking offset
    logBox.style.transform = `translateY(-${offset * 5}px)`;
    logBox.style.zIndex = `${1000 + offset}`;

    // Message element
    const messageEl = document.createElement('div');
    messageEl.className = `
        w-full flex
        text-sm flex justify-between items-center
        bg-[#78C589] rounded-md border-[0.53px] border-[#78C589]
    `;
    messageEl.innerHTML = `
        <span class="w-[96%] flex items-center py-4 px-4 bg-white text-[#00AC36] font-medium text-[12.77px] rounded-tl-md rounded-bl-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="19" viewBox="0 0 13 19" fill="none">
            <path d="M6.90909 5.18182H5.18182V6.90909H6.90909V5.18182ZM6.04545 8.63636C5.57045 8.63636 5.18182 9.025 5.18182 9.5V12.9545C5.18182 13.4295 5.57045 13.8182 6.04545 13.8182C6.52045 13.8182 6.90909 13.4295 6.90909 12.9545V9.5C6.90909 9.025 6.52045 8.63636 6.04545 8.63636ZM10.3636 0.00863636L1.72727 0C0.777273 0 0 0.777273 0 1.72727V17.2727C0 18.2227 0.777273 19 1.72727 19H10.3636C11.3136 19 12.0909 18.2227 12.0909 17.2727V1.72727C12.0909 0.777273 11.3136 0.00863636 10.3636 0.00863636ZM10.3636 15.5455H1.72727V3.45455H10.3636V15.5455Z" fill="#78C589"/>
        </svg>
        &nbsp;&nbsp;${message}
        </span>
    `;

    logBox.appendChild(messageEl);
    wrapper.appendChild(logBox);

    // Auto remove after 4s
    setTimeout(() => {
        logBox.classList.remove('animate-fade-in');
        logBox.classList.add('animate-slide-out-up');

        setTimeout(() => logBox.remove(), 300);
    }, 4000);
}
