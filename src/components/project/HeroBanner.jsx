import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

const tabs = [
    { id: 'desarrollo', label: 'En desarrollo', active: true },
    { id: 'operacion', label: 'En operación', active: false },
    { id: 'convocatorias', label: 'Convocatorias', active: false },
];

export default function HeroBanner({ breadcrumbs = [] }) {
    return (
        <div className="bg-gradient-to-r from-[#005A9E] to-[#00853E] relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Tabs */}
                <div className="flex gap-1 pt-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`px-5 py-2.5 text-sm font-medium rounded-t-lg transition-all duration-200 ${tab.active
                                    ? 'bg-white text-[#005A9E] shadow-lg'
                                    : 'bg-white/20 text-white hover:bg-white/30'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Breadcrumbs */}
                <div className="bg-white rounded-t-lg rounded-tr-lg shadow-sm">
                    <nav className="flex items-center gap-2 px-5 py-3 text-sm">
                        <a href="#" className="text-[#005A9E] hover:text-[#00853E] transition-colors">
                            <Home className="w-4 h-4" />
                        </a>
                        {breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={index}>
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                                <a
                                    href={crumb.href}
                                    className={`transition-colors ${index === breadcrumbs.length - 1
                                            ? 'text-gray-600 font-medium'
                                            : 'text-[#005A9E] hover:text-[#00853E]'
                                        }`}
                                >
                                    {crumb.label}
                                </a>
                            </React.Fragment>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}