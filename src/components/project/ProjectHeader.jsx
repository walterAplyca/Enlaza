import React from 'react';
import { MapPin, Zap, ArrowRight } from 'lucide-react';

export default function ProjectHeader({ project }) {
    return (
        <section className="mb-8">
            {/* Title Section */}
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#00853E]/10 text-[#00853E] text-xs font-semibold rounded-full uppercase tracking-wide">
                        En desarrollo
                    </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3">
                    Chivor II Norte 230 kV
                </h1>


            </div>

            {/* Main Image */}
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
                <img
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=500&fit=crop"
                    alt="Torres de transmisión eléctrica en paisaje montañoso"
                    className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/90 text-sm max-w-2xl">
                        Línea de transmisión que fortalece el Sistema Interconectado Nacional en la región centro-oriental del país.
                    </p>
                </div>
            </div>

            {/* Introduction Text */}
            <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                    El proyecto Chivor II Norte 230 kV es una infraestructura estratégica de transmisión eléctrica
                    que conecta las regiones de Cundinamarca y Boyacá, mejorando la capacidad y confiabilidad del
                    sistema eléctrico nacional. Esta línea de transmisión representa un avance significativo en el
                    desarrollo energético del país.
                </p>
                <a href="#" className="inline-flex items-center gap-2 mt-4 text-[#00853E] font-medium text-sm hover:gap-3 transition-all">
                    Leer más sobre el proyecto
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </section>
    );
}