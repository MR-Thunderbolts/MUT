"use client";

import { useState } from "react";

// Custom SVG Icons
function AscensorIcon({ className }: { className?: string }) {
    return (
        <svg width="100%" height="100%" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_3013_1246)">
                <path d="M61.75 11.875H14.25C12.9383 11.875 11.875 12.9383 11.875 14.25V61.75C11.875 63.0617 12.9383 64.125 14.25 64.125H61.75C63.0617 64.125 64.125 63.0617 64.125 61.75V14.25C64.125 12.9383 63.0617 11.875 61.75 11.875Z" stroke="currentColor" strokeWidth="4.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M54.625 64.125V30.875H21.375V64.125" stroke="currentColor" strokeWidth="4.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M38 64.125V30.875" stroke="currentColor" strokeWidth="4.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M33.25 21.375H42.75" stroke="currentColor" strokeWidth="4.75" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_3013_1246">
                    <rect width="76" height="76" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

function BanosIcon({ className }: { className?: string }) {
    return (
        <svg width="100%" height="100%" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_3013_1231)">
                <path fillRule="evenodd" clipRule="evenodd" d="M39.5792 8.30444H40.195C40.6983 8.30444 41.1102 8.71591 41.1102 9.21941V66.7812C41.1102 67.2846 40.6983 67.6961 40.195 67.6961H39.5792C39.076 67.6961 38.6641 67.2846 38.6641 66.7812V9.21941C38.6641 8.71591 39.076 8.30444 39.5792 8.30444Z" fill="currentColor" />
                <path d="M21.2931 48.5552L21.2951 65.2354C21.2951 68.2663 16.7539 68.2663 16.7539 65.2354L16.752 48.6705H10.6542L17.1733 26.0519H16.1612L12.3691 38.8119C11.4664 41.5948 7.64551 40.4515 8.51965 37.4713L12.7301 23.6089C13.1813 22.0282 15.1806 19.2257 18.6412 19.2257H25.2664C28.6963 19.2257 30.7045 22.0516 31.2235 23.6089L35.4357 37.458C36.2781 40.4365 32.4871 41.67 31.5846 38.7667L27.7937 26.0519H26.6979L33.2694 48.6705H27.1619V65.2578C27.1619 68.2663 22.6396 68.2513 22.6396 65.2578V48.5552H21.2931ZM22.0052 18.0024C24.6649 18.0024 26.8213 15.8464 26.8213 13.1864C26.8213 10.5267 24.6649 8.37061 22.0052 8.37061C19.3458 8.37061 17.1893 10.5267 17.1893 13.1864C17.1893 15.8464 19.3458 18.0024 22.0052 18.0024Z" fill="currentColor" />
                <path d="M50.8725 19.2837C47.3925 19.2837 44.5938 22.122 44.5938 25.6621V40.7503C44.5938 43.6837 48.8867 43.6837 48.8867 40.7503V26.9536H49.9032V64.731C49.9032 68.653 55.6198 68.5375 55.6198 64.731V42.8017H56.6044V64.731C56.6044 68.5375 62.3527 68.653 62.3527 64.731V26.9536H63.3453V40.7503C63.3453 43.7064 67.6157 43.7063 67.6081 40.7503V25.7522C67.6081 22.4879 65.0731 19.2906 61.2523 19.2906L50.8725 19.2837ZM56.1314 18.1992C58.8452 18.1992 61.0455 15.9987 61.0455 13.2848C61.0455 10.5707 58.8452 8.37061 56.1314 8.37061C53.4173 8.37061 51.2172 10.5707 51.2172 13.2848C51.2172 15.9987 53.4173 18.1992 56.1314 18.1992Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_3013_1231">
                    <rect width="76" height="76" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

function CajeroIcon({ className }: { className?: string }) {
    return (
        <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_3013_1238)">
                <path d="M32 18V22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 42V46" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M26 42H35C36.3261 42 37.5979 41.4732 38.5355 40.5355C39.4732 39.5979 40 38.3261 40 37C40 35.6739 39.4732 34.4021 38.5355 33.4645C37.5979 32.5268 36.3261 32 35 32H29C27.6739 32 26.4021 31.4732 25.4645 30.5355C24.5268 29.5979 24 28.3261 24 27C24 25.6739 24.5268 24.4021 25.4645 23.4645C26.4021 22.5268 27.6739 22 29 22H38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_3013_1238">
                    <rect width="64" height="64" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

function MetroIcon({ className }: { className?: string }) {
    return (
        <svg width="100%" height="100%" viewBox="0 0 53 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M43.429 0H9.14295C6.71894 0.002773 4.395 0.966935 2.68097 2.68097C0.966935 4.395 0.002773 6.71894 0 9.14295V45.7147C0.002773 48.1388 0.966935 50.4627 2.68097 52.1767C4.395 53.8908 6.71894 54.8549 9.14295 54.8577H12.5715L8.45712 60.3435C8.0934 60.8285 7.93725 61.4381 8.02302 62.0383C8.10878 62.6384 8.42943 63.1799 8.91443 63.5436C9.39944 63.9073 10.0091 64.0635 10.6092 63.9777C11.2093 63.8919 11.7508 63.5713 12.1145 63.0863L18.286 54.8577H34.286L40.4574 63.0863C40.8212 63.5713 41.3626 63.8919 41.9628 63.9777C42.5629 64.0635 43.1725 63.9073 43.6575 63.5436C44.1425 63.1799 44.4632 62.6384 44.5489 62.0383C44.6347 61.4381 44.4786 60.8285 44.1148 60.3435L40.0005 54.8577H43.429C45.853 54.8549 48.177 53.8908 49.891 52.1767C51.605 50.4627 52.5692 48.1388 52.572 45.7147V9.14295C52.5692 6.71894 51.605 4.395 49.891 2.68097C48.177 0.966935 45.853 0.002773 43.429 0ZM13.7144 45.7147C13.0363 45.7147 12.3734 45.5137 11.8096 45.1369C11.2458 44.7602 10.8063 44.2247 10.5468 43.5982C10.2873 42.9717 10.2194 42.2823 10.3517 41.6173C10.484 40.9522 10.8105 40.3413 11.29 39.8618C11.7695 39.3823 12.3805 39.0557 13.0455 38.9234C13.7106 38.7911 14.4 38.859 15.0265 39.1185C15.653 39.378 16.1885 39.8175 16.5652 40.3813C16.9419 40.9451 17.143 41.608 17.143 42.2861C17.143 43.1955 16.7818 44.0675 16.1388 44.7105C15.4958 45.3535 14.6237 45.7147 13.7144 45.7147ZM24.0002 27.4288H4.57147V16.0002H24.0002V27.4288ZM38.8575 45.7147C38.1794 45.7147 37.5165 45.5137 36.9527 45.1369C36.3889 44.7602 35.9494 44.2247 35.6899 43.5982C35.4304 42.9717 35.3625 42.2823 35.4948 41.6173C35.6271 40.9522 35.9536 40.3413 36.4331 39.8618C36.9126 39.3823 37.5236 39.0557 38.1886 38.9234C38.8537 38.7911 39.5431 38.859 40.1696 39.1185C40.7961 39.378 41.3316 39.8175 41.7083 40.3813C42.0851 40.9451 42.2861 41.608 42.2861 42.2861C42.2861 43.1955 41.9249 44.0675 41.2819 44.7105C40.6389 45.3535 39.7669 45.7147 38.8575 45.7147ZM48.0005 27.4288H28.5717V16.0002H48.0005V27.4288Z" fill="currentColor" />
        </svg>
    );
}

function SalidaIcon({ className }: { className?: string }) {
    return (
        <svg width="100%" height="100%" viewBox="0 0 53 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M51.6986 33.8857L40.2516 47.8857C39.8427 48.3858 39.288 48.6668 38.7098 48.6667C38.1315 48.6667 37.5769 48.3857 37.168 47.8856C36.7591 47.3855 36.5294 46.7071 36.5294 45.9999C36.5294 45.2926 36.7592 44.6143 37.1681 44.1143L44.8929 34.6667H19.6234C19.0451 34.6667 18.4906 34.3857 18.0817 33.8856C17.6728 33.3855 17.443 32.7072 17.443 32C17.443 31.2928 17.6728 30.6145 18.0817 30.1144C18.4906 29.6143 19.0451 29.3333 19.6234 29.3333H44.8929L37.1681 19.8857C36.7592 19.3857 36.5294 18.7074 36.5294 18.0001C36.5294 17.2929 36.7591 16.6146 37.168 16.1144C37.5769 15.6143 38.1315 15.3333 38.7098 15.3333C39.288 15.3332 39.8427 15.6142 40.2516 16.1143L51.6986 30.1143C52.1075 30.6144 52.3372 31.2927 52.3372 32C52.3372 32.7073 52.1075 33.3856 51.6986 33.8857ZM23.9842 58.6667H4.36076V5.33333H23.9842C24.5624 5.33333 25.117 5.05238 25.5259 4.55228C25.9348 4.05219 26.1646 3.37391 26.1646 2.66667C26.1646 1.95942 25.9348 1.28115 25.5259 0.781049C25.117 0.280952 24.5624 0 23.9842 0H4.36076C3.20462 0.00161713 2.09621 0.56404 1.2787 1.56388C0.461183 2.56373 0.00132223 3.91934 0 5.33333V58.6667C0.00132223 60.0807 0.461183 61.4363 1.2787 62.4361C2.09621 63.436 3.20462 63.9984 4.36076 64H23.9842C24.5624 64 25.117 63.7191 25.5259 63.219C25.9348 62.7189 26.1646 62.0406 26.1646 61.3333C26.1646 60.6261 25.9348 59.9478 25.5259 59.4477C25.117 58.9476 24.5624 58.6667 23.9842 58.6667Z" fill="currentColor" />
        </svg>
    );
}

export default function MapLegendModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-y-0" : "translate-y-[calc(100%-60px)]"
                }`}
            style={{ maxHeight: "80vh" }}
        >
            {/* Handle / Header */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="h-[60px] flex flex-col items-center justify-center cursor-pointer bg-brand-coral rounded-t-3xl"
            >
                <div className="w-12 h-1.5 bg-white/50 rounded-full mb-2" />
                <span className="text-white font-bold text-sm">Leyenda</span>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-60px)] bg-brand-cream">
                <div className="grid grid-cols-2 gap-4">
                    <LegendItem icon={AscensorIcon} label="Ascensor" color="text-brand-dark" />
                    <LegendItem icon={BanosIcon} label="Baños" color="text-brand-dark" />
                    <LegendItem icon={CajeroIcon} label="Cajero" color="text-brand-dark" />
                    <LegendItem icon={MetroIcon} label="Metro" color="text-brand-dark" />
                    <LegendItem icon={SalidaIcon} label="Salida" color="text-brand-dark" />
                </div>
            </div>
        </div>
    );
}

function LegendItem({ icon: Icon, label, color }: { icon: any, label: string, color: string }) {
    return (
        <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
            <div className={`w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center ${color}`}>
                <Icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-brand-dark">{label}</span>
        </div>
    );
}
