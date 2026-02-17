import React, { useState } from 'react';
import { Search, FileText, Download, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const documents = [
    { id: 1, name: 'Resolución de licencia ambiental' },
    { id: 2, name: 'Estudio de impacto ambiental' },
    { id: 3, name: 'Plan de manejo ambiental' },
    { id: 4, name: 'Informe de avance trimestral Q3' },
    { id: 5, name: 'Planos técnicos del trazado' },
    { id: 6, name: 'Cronograma actualizado' },
    { id: 7, name: 'Informe de socialización comunitaria' },
    { id: 8, name: 'Especificaciones técnicas torres' },
    { id: 9, name: 'Análisis de riesgos ambientales' },
    { id: 10, name: 'Permisos de servidumbre' },
    { id: 11, name: 'Informe de monitoreo ambiental' },
    { id: 12, name: 'Actas de reunión con comunidades' },
];

const ITEMS_PER_PAGE = 5;

export default function DocumentList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredDocs = documents.filter(doc =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredDocs.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedDocs = filteredDocs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const goToPage = (page) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    };

    return (
        <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                        <span className="p-2 bg-[#00853E]/10 rounded-lg">
                            <FileText className="w-5 h-5 text-[#00853E]" />
                        </span>
                        Documentos
                    </h2>
                    <p className="text-sm text-gray-500 mt-1 ml-12">{documents.length} documentos disponibles</p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
                <div className="flex gap-2 max-w-md">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                            type="text"
                            placeholder="Buscar documentos..."
                            value={searchTerm}
                            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                            className="pl-10 h-11 border-gray-200 focus:border-[#00853E] focus:ring-[#00853E]/20"
                        />
                    </div>
                    <Button
                        className="h-11 px-5 bg-[#00853E] hover:bg-[#006d32]"
                        onClick={() => setCurrentPage(1)}
                    >
                        Buscar
                    </Button>
                </div>
            </div>

            {/* Document List */}
            <div className="grid gap-3 mb-6">
                {paginatedDocs.map((doc) => (
                    <div
                        key={doc.id}
                        className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#00853E]/30 hover:shadow-md transition-all duration-200 group"
                    >
                        <div className="p-3 bg-[#00853E]/10 rounded-lg text-[#00853E] group-hover:bg-[#00853E] group-hover:text-white transition-colors">
                            <FileText className="w-5 h-5" />
                        </div>

                        <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 truncate group-hover:text-[#00853E] transition-colors">
                                {doc.name}
                            </h4>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-9 w-9 text-gray-400 hover:text-[#00853E] hover:bg-[#00853E]/10"
                            >
                                <ExternalLink className="w-4 h-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-9 w-9 text-gray-400 hover:text-[#00853E] hover:bg-[#00853E]/10"
                            >
                                <Download className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                ))}

                {paginatedDocs.length === 0 && (
                    <div className="text-center py-12 bg-gray-50 rounded-xl">
                        <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500">No se encontraron documentos</p>
                        <p className="text-sm text-gray-400 mt-1">Intenta con otros términos de búsqueda</p>
                    </div>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-9 w-9"
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="icon"
                            className={`h-9 w-9 ${currentPage === page ? 'bg-[#00853E] hover:bg-[#006d32]' : ''}`}
                            onClick={() => goToPage(page)}
                        >
                            {page}
                        </Button>
                    ))}

                    <Button
                        variant="outline"
                        size="icon"
                        className="h-9 w-9"
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            )}
        </section>
    );
}