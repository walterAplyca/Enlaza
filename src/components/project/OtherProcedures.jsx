import React from 'react';
import { FileCheck, FileText, ExternalLink } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const procedures = [
    {
        id: 'modificacion',
        title: 'Modificación de licencia ambiental',
        documents: [
            { name: 'Solicitud de modificación' },
            { name: 'Concepto técnico ANLA' },
            { name: 'Resolución de modificación' },
        ]
    },
    {
        id: 'ocupacion',
        title: 'Permiso de ocupación de cauce',
        documents: [
            { name: 'Solicitud de permiso' },
            { name: 'Estudio hidrológico' },
            { name: 'Planos de cruce de cauce' },
            { name: 'Resolución de autorización' },
        ]
    },
    {
        id: 'sustraccion',
        title: 'Sustracción de reserva forestal',
        documents: [
            { name: 'Solicitud de sustracción' },
            { name: 'Estudio de caracterización forestal' },
            { name: 'Plan de compensación' },
        ]
    },
];

export default function OtherProcedures() {
    return (
        <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                        <span className="p-2 bg-[#1aa04b]/10 rounded-lg">
                            <FileCheck className="w-5 h-5 text-[#1aa04b]" />
                        </span>
                        Otros trámites ambientales
                    </h2>
                    <p className="text-sm text-gray-500 mt-1 ml-12">Gestiones adicionales relacionadas con el proyecto</p>
                </div>
            </div>

            <Accordion type="multiple" className="space-y-3">
                {procedures.map((procedure) => (
                    <AccordionItem
                        key={procedure.id}
                        value={procedure.id}
                        className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                    >
                        <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-gray-50 transition-colors [&[data-state=open]]:bg-gray-50">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-[#1aa04b]/10">
                                    <FileCheck className="w-5 h-5 text-[#1aa04b]" />
                                </div>
                                <span className="font-semibold text-gray-900">{procedure.title}</span>
                                <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">
                                    {procedure.documents.length}
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-5 pb-4">
                            <div className="pt-2 space-y-2">
                                {procedure.documents.map((doc, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                    >
                                        <FileText className="w-4 h-4 text-[#1aa04b] flex-shrink-0" />
                                        <span className="flex-1 font-medium text-gray-900 group-hover:text-[#1aa04b] transition-colors">
                                            {doc.name}
                                        </span>
                                        <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-[#1aa04b] transition-colors flex-shrink-0" />
                                    </a>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}