import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

export default function VideoSection() {
    return (
        <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                        <span className="p-2 bg-[#1aa04b]/10 rounded-lg">
                            <Play className="w-5 h-5 text-[#1aa04b]" />
                        </span>
                        La convivencia con la infraestructura de energía eléctrica ¡Es posible!
                    </h2>
                </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg bg-gray-900 aspect-video">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Video del proyecto Chivor II Norte"
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-medium text-gray-900 mb-1">
                    Socialización del proyecto Chivor II Norte 230 kV - UPME 03-2010
                </h3>
                <p className="text-sm text-gray-600">
                    Video informativo sobre el proceso de socialización y avance del proyecto en las comunidades de Cundinamarca y Boyacá.
                </p>
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm text-[#1aa04b] hover:text-[#148a3d] font-medium transition-colors"
                >
                    Ver en YouTube
                    <ExternalLink className="w-3.5 h-3.5" />
                </a>
            </div>
        </section>
    );
}