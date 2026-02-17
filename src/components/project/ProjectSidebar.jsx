import React from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';

export default function ProjectSidebar({ project }) {
    return (
        <aside className="lg:sticky lg:top-6 space-y-6">
            {/* Project Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-[#1aa04b] px-5 py-4">
                    <h2 className="text-white font-semibold text-lg">Proyecto</h2>
                </div>

                <div className="p-5 space-y-4">
                    {/* Quick Info */}
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-[#1aa04b]/10 rounded-lg">
                                <Building2 className="w-4 h-4 text-[#1aa04b]" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Código</p>
                                <p className="text-sm font-medium text-gray-900">UPME 03-2010</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-[#1aa04b]/10 rounded-lg">
                                <MapPin className="w-4 h-4 text-[#1aa04b]" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Ubicación</p>
                                <p className="text-sm font-medium text-gray-900">Cundinamarca y Boyacá</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-[#1aa04b]/10 rounded-lg">
                                <Calendar className="w-4 h-4 text-[#1aa04b]" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Estado</p>
                                <p className="text-sm font-medium text-[#1aa04b]">En desarrollo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </aside>
    );
}