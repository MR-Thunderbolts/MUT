"use client";

interface PageHeaderProps {
    title: string;
    subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <div className="w-full flex flex-col items-center justify-center text-center gap-2 pt-0 pb-6 px-4">
            <h1 className="text-3xl font-black text-brand-dark leading-none">
                {title}
            </h1>
            <p className="text-sm text-brand-dark/80 font-medium max-w-[80%] leading-tight">
                {subtitle}
            </p>
        </div>
    );
}
