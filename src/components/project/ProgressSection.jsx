import React, { useState } from 'react';
import { TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ProgressSection() {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [showFullBenefits, setShowFullBenefits] = useState(false);

    const descriptionText = `El proyecto Chivor II Norte 230 kV avanza según lo planificado, con trabajos activos en los departamentos de Cundinamarca y Boyacá. Las actividades actuales incluyen la instalación de torres de transmisión, tendido de conductores y trabajos de adecuación en las subestaciones asociadas. El siguiente mapa muestra el estado actual del avance por tramos. Durante el último trimestre se han completado importantes hitos en la construcción, incluyendo la cimentación de 45 torres adicionales y el tendido de 23 kilómetros de conductor en el tramo norte del proyecto. Los equipos de trabajo continúan avanzando de acuerdo con el cronograma establecido, manteniendo los estándares de calidad y seguridad requeridos.`;

    const benefitsText = `Este proyecto traerá múltiples beneficios para la región y el país. Entre los principales beneficios se encuentran: mayor confiabilidad del sistema eléctrico nacional, reducción de pérdidas técnicas en la transmisión de energía, generación de más de 500 empleos directos durante la fase de construcción, impulso al desarrollo económico de las comunidades de Cundinamarca y Boyacá, integración de fuentes de generación de energía renovable al sistema interconectado nacional, y mejora en la calidad del servicio eléctrico para más de 2 millones de usuarios en la región centro-oriental del país. Adicionalmente, el proyecto contempla inversiones sociales y ambientales que beneficiarán directamente a las comunidades del área de influencia.`;

    const truncateText = (text, maxLength = 200) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    };

    return (
        <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                        <span className="p-2 bg-[#1aa04b]/10 rounded-lg">
                            <TrendingUp className="w-5 h-5 text-[#1aa04b]" />
                        </span>
                        Conoce cómo avanza el proyecto
                    </h2>
                    <p className="text-sm text-gray-500 mt-1 ml-12">Seguimiento del estado actual de la obra</p>
                </div>
            </div>

            {/* Description Block */}
            <div className="mb-4 p-5 bg-white rounded-xl border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Descripción</h3>
                <p className="text-gray-700 leading-relaxed">
                    {showFullDescription ? descriptionText : truncateText(descriptionText)}
                </p>
                {descriptionText.length > 200 && (
                    <Button
                        variant="link"
                        className="p-0 h-auto mt-2 text-[#1aa04b] hover:text-[#148a3d]"
                        onClick={() => setShowFullDescription(!showFullDescription)}
                    >
                        {showFullDescription ? (
                            <><ChevronUp className="w-4 h-4 mr-1" /> Ver menos</>
                        ) : (
                            <><ChevronDown className="w-4 h-4 mr-1" /> Ver más</>
                        )}
                    </Button>
                )}
            </div>

            {/* Benefits Block */}
            <div className="mb-6 p-5 bg-white rounded-xl border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Beneficios</h3>
                <p className="text-gray-700 leading-relaxed">
                    {showFullBenefits ? benefitsText : truncateText(benefitsText)}
                </p>
                {benefitsText.length > 200 && (
                    <Button
                        variant="link"
                        className="p-0 h-auto mt-2 text-[#1aa04b] hover:text-[#148a3d]"
                        onClick={() => setShowFullBenefits(!showFullBenefits)}
                    >
                        {showFullBenefits ? (
                            <><ChevronUp className="w-4 h-4 mr-1" /> Ver menos</>
                        ) : (
                            <><ChevronDown className="w-4 h-4 mr-1" /> Ver más</>
                        )}
                    </Button>
                )}
            </div>

            {/* Map Container */}
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                    <button className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-sm font-medium text-gray-700 rounded-lg shadow-md hover:bg-white transition-colors">
                        Ver a pantalla completa
                    </button>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop"
                    alt="Mapa de avance del proyecto"
                    className="w-full h-[400px] sm:h-[500px] object-cover"
                />

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Leyenda</p>
                    <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-xs">
                            <span className="w-3 h-3 bg-[#1aa04b] rounded-full" />
                            <span className="text-gray-600">Tramos completados</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="w-3 h-3 bg-[#1aa04b]/60 rounded-full" />
                            <span className="text-gray-600">En construcción</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="w-3 h-3 bg-gray-300 rounded-full" />
                            <span className="text-gray-600">Pendiente</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}