import React, { useState } from 'react';
import { FileText, Leaf, BookOpen, FileCheck, ExternalLink, AlertCircle } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const tabs = [
    {
        id: 'documentos',
        label: 'Documentos',
        icon: FileText,
        description: 'Documentación técnica y administrativa del proyecto, incluyendo informes de avance, planos y especificaciones.',
        externalLink: 'https://example.com/documentos-generales',
        hasAccordion: false,
    },
    {
        id: 'licencia',
        label: 'Licencia ambiental',
        icon: Leaf,
        description: 'Resoluciones, modificaciones e informes de seguimiento relacionados con la licencia ambiental otorgada por la ANLA.',
        externalLink: 'https://example.com/licencia-ambiental',
        hasAccordion: false,
    },
    {
        id: 'eia',
        label: 'Estudio de impacto ambiental',
        icon: BookOpen,
        description: 'Capítulos y anexos del Estudio de Impacto Ambiental (EIA) aprobado para el proyecto.',
        externalLink: 'https://example.com/eia-completo',
        hasAccordion: false,
    },
    {
        id: 'tramites',
        label: 'Otros trámites',
        icon: FileCheck,
        description: 'Gestiones y permisos adicionales relacionados con el proyecto.',
        hasAccordion: true,
    },
];

const tramitesData = [
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
            { name: 'Resolución de autorización' },
        ]
    },
    {
        id: 'sustraccion',
        title: 'Sustracción de reserva forestal',
        documents: [
            { name: 'Solicitud de sustracción' },
            { name: 'Plan de compensación' },
            { name: 'Resolución de aprobación' },
        ]
    },
];

function TramitesAccordion() {
    return (
        <Accordion type="multiple" className="space-y-3">
            {tramitesData.map((item) => (
                <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
                >
                    <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-gray-100 transition-colors [&[data-state=open]]:bg-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-[#1aa04b]/10">
                                <FileCheck className="w-5 h-5 text-[#1aa04b]" />
                            </div>
                            <span className="font-semibold text-gray-900">{item.title}</span>
                            <span className="ml-2 px-2.5 py-0.5 bg-white text-gray-500 text-xs rounded-full border border-gray-200">
                                {item.documents.length}
                            </span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-4">
                        <div className="pt-2 space-y-2">
                            {item.documents.map((doc, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors group border border-transparent hover:border-gray-200"
                                >
                                    <FileText className="w-4 h-4 text-[#1aa04b] flex-shrink-0" />
                                    <span className="flex-1 font-medium text-gray-700 group-hover:text-[#1aa04b] transition-colors">
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
    );
}

function TabContent({ tab }) {
    const Icon = tab.icon;

    if (tab.hasAccordion) {
        return (
            <div className="py-2">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-[#1aa04b]/10 rounded-lg">
                        <Icon className="w-5 h-5 text-[#1aa04b]" />
                    </div>
                    <p className="text-gray-600">{tab.description}</p>
                </div>
                <TramitesAccordion />
            </div>
        );
    }

    return (
        <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1aa04b]/10 to-[#148a3d]/10 rounded-2xl mb-4">
                <Icon className="w-8 h-8 text-[#1aa04b]" />
            </div>
            <p className="text-gray-600 max-w-lg mx-auto mb-6">{tab.description}</p>
            <a
                href={tab.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1aa04b] text-white font-medium rounded-lg hover:bg-[#148a3d] transition-colors shadow-lg hover:shadow-xl"
            >
                <ExternalLink className="w-5 h-5" />
                Acceder a los documentos
            </a>
        </div>
    );
}

export default function DocumentsTabsSection() {
    const [activeTab, setActiveTab] = useState('documentos');

    const currentTab = tabs.find(t => t.id === activeTab);

    return (
        <section className="mb-10">
            {/* Highlighted Section Header */}
            <div className="bg-[#1aa04b] rounded-t-2xl p-6">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white">Centro de documentos</h2>
                        <p className="text-white/80 text-sm mt-1">Información legal y ambiental del proyecto</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-b-2xl border-x border-b border-gray-200 shadow-lg overflow-hidden">
                {/* Tabs Navigation */}
                <div className="border-b border-gray-200 bg-gray-50">
                    <div className="flex overflow-x-auto">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold border-b-3 transition-all whitespace-nowrap ${isActive
                                        ? 'border-b-4 border-[#1aa04b] text-[#1aa04b] bg-white'
                                        : 'border-b-4 border-transparent text-gray-600 hover:text-gray-900 hover:bg-[#e7e7e7]'
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                    <TabContent tab={currentTab} />
                </div>
            </div>
        </section>
    );
}