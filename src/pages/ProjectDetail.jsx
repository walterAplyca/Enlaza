import React from 'react';
import HeroBanner from '@/components/project/HeroBanner';
import ProjectSidebar from '@/components/project/ProjectSidebar';
import ProjectHeader from '@/components/project/ProjectHeader';
import ProgressSection from '@/components/project/ProgressSection';
import VideoSection from '@/components/project/VideoSection';
import DocumentsTabsSection from '@/components/project/DocumentsTabsSection';
import OtherProcedures from '@/components/project/OtherProcedures';
import ImageGallery from '@/components/project/ImageGallery';

const breadcrumbs = [
    { label: 'Proyectos', href: '#' },
    { label: 'En desarrollo', href: '#' },
    { label: 'Chivor II Norte 230 kV', href: '#' },
];

export default function ProjectDetail() {
    return (
        <div className="min-h-screen bg-[#F5F7FA]">


            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="lg:w-72 xl:w-80 flex-shrink-0 order-2 lg:order-1">
                        <ProjectSidebar />
                    </div>

                    {/* Main Content Area */}
                    <main className="flex-1 min-w-0 order-1 lg:order-2">
                        {/* Project Header with Title, Location, Main Image */}
                        <ProjectHeader />

                        {/* Progress Section with Map */}
                        <ProgressSection />

                        {/* Documents Tabs Section */}
                        <DocumentsTabsSection />

                        {/* Other Environmental Procedures */}
                        <OtherProcedures />

                        {/* Video Section */}
                        <VideoSection />



                        {/* Image Gallery */}
                        <ImageGallery />
                    </main>
                </div>
            </div>

            {/* Spacer for footer */}
            <div className="h-8" />
        </div>
    );
}