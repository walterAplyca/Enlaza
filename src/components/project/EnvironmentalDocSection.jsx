import React from 'react';
import { Leaf, BookOpen, ExternalLink, FolderDown } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText } from 'lucide-react';

const licenseDocuments = [
    {
        id: 'resolucion-licencia',
        title: 'Resolución de licencia ambiental',
        documents: [
            { name: 'Resolución 0123 de 2023 - Otorgamiento' },
            { name: 'Auto de inicio de trámite' },
            { name: 'Concepto técnico de evaluación' },
        ]
    },
    {
        id: 'modificaciones',
        title: 'Modificaciones a la licencia',
        documents: [
            { name: 'Resolución 0456 de 2024 - Primera modificación' },
            { name: 'Solicitud de modificación' },
            { name: 'Estudio técnico de soporte' },
            { name: 'Concepto de viabilidad' },
        ]
    },
    {
        id: 'seguimiento',
        title: 'Informes de seguimiento',
        documents: [
            { name: 'Informe de cumplimiento ambiental ICA Q1 2024' },
            { name: 'Informe de cumplimiento ambiental ICA Q2 2024' },
            { name: 'Informe de cumplimiento ambiental ICA Q3 2024' },
            { name: 'Acta de visita de seguimiento ANLA' },
        ]
    },
];

function DocumentAccordion({ items, iconColor }) {
    return (
        <Accordion type="multiple" className="space-y-2">
            {items.map((item) => (
                <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden"
                >
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-100 transition-colors text-sm [&[data-state=open]]:bg-gray-100">
                        <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4" style={{ color: iconColor }} />
                            <span className="font-medium text-gray-800 text-left">{item.title}</span>
                            <span className="ml-2 px-2 py-0.5 bg-white text-gray-500 text-xs rounded-full">
                                {item.documents.length}
                            </span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3">
                        <div className="pt-1 space-y-1">
                            {item.documents.map((doc, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="flex items-center gap-2 p-2 rounded-md hover:bg-white transition-colors group"
                                >
                                    <FileText className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                                    <span className="flex-1 text-sm text-gray-700 group-hover:text-[#00853E] transition-colors">
                                        {doc.name}
                                    </span>
                                    <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#00853E] transition-colors flex-shrink-0" />
                                </a>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default function EnvironmentalDocsSection() {
    return (
        <>
            {/* Documentos de Licencia Ambiental Section */}
            <section className="mb-10">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                            <span className="p-2 bg-[#00853E]/10 rounded-lg">
                                <Leaf className="w-5 h-5 text-[#00853E]" />
                            </span>
                            Documentos de licencia ambiental
                        </h2>
                        <p className="text-sm text-gray-500 mt-1 ml-12">Documentación relacionada con la licencia ambiental del proyecto</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                    <DocumentAccordion items={licenseDocuments} iconColor="#00853E" />
                </div>
            </section>

            {/* Estudio de Impacto Ambiental Section - External Link Card */}
            <section className="mb-10">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                            <span className="p-2 bg-[#005A9E]/10 rounded-lg">
                                <BookOpen className="w-5 h-5 text-[#005A9E]" />
                            </span>
                            Estudio de impacto ambiental
                        </h2>
                        <p className="text-sm text-gray-500 mt-1 ml-12">Accede al repositorio completo del EIA</p>
                    </div>
                </div>

                <a
                    href="https://example.com/eia-documents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                >
                    <div className="bg-gradient-to-br from-[#005A9E] to-[#003d6d] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center gap-5">
                            <div className="p-4 bg-white/15 rounded-xl backdrop-blur-sm">
                                <FolderDown className="w-10 h-10 text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-semibold text-lg mb-1">
                                    Repositorio de documentos EIA
                                </h3>
                                <p className="text-white/80 text-sm">
                                    Descarga todos los capítulos y anexos del Estudio de Impacto Ambiental desde nuestro repositorio externo.
                                </p>
                            </div>
                            <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                                <ExternalLink className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>
                </a>
            </section>
        </>
    );
}