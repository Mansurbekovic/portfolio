import React, { useState } from 'react';
import { Search, Globe, CheckCircle2, ArrowUpRight, Eye } from 'lucide-react';
import { LIVE_PROJECTS, type LiveProject } from '../data/projectsData';
import { ProjectDemoModal } from '../components/ProjectDemoModal';

export const ProjectsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDemo, setSelectedDemo] = useState<LiveProject | null>(null);

  const categories = [
    'All',
    'Multiplayer Gaming',
    'Modern Web Apps',
    'FinTech & Accounting',
    'EdTech Platform',
    'E-Commerce',
    'Sports Analytics'
  ];

  const filteredProjects = LIVE_PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Header */}
        <div className="border-b border-[#E8E2D7] pb-8 mb-10">
          <div className="text-xs font-mono font-semibold text-[#D97706] uppercase tracking-wider mb-2">
            Verified Production Deployments
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-4">
            Live Showcase Projects
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-2xl">
            Explore 6 real, live web applications built and deployed by Muhammadislom Rustambekov. Every project is fully accessible online with instant links and in-page preview.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Categories */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-[5px] text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#111827] text-white font-semibold'
                    : 'bg-[#FFFFFF] border border-[#E8E2D7] text-[#4B5563] hover:text-[#111827] hover:border-[#D5CBBF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or tags..."
              className="w-full pl-9 pr-3 py-1.5 rounded-[5px] bg-[#FFFFFF] border border-[#E8E2D7] text-xs text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#D97706]"
            />
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="minimal-card p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{project.emoji}</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-[4px] bg-[#F3EFEA] text-[#6B7280] border border-[#E8E2D7]">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#111827] mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="mb-5 space-y-1.5">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#6B7280]">
                      <CheckCircle2 className="w-3 h-3 text-[#059669] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] bg-[#F9FAFB] text-[#4B5563] border border-[#E5E7EB]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Preview & Direct Visit */}
              <div className="pt-4 border-t border-[#F3EFEA] flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedDemo(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-[5px] bg-[#F3EFEA] hover:bg-[#E8E2D7] text-[#111827] text-xs font-mono font-medium transition-all"
                >
                  <Eye className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Preview</span>
                </button>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-[5px] bg-[#111827] text-white font-medium text-xs hover:bg-[#1F2937] transition-all"
                >
                  <Globe className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Visit Site</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9CA3AF]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* In-Place Project Demo Modal */}
        <ProjectDemoModal
          project={selectedDemo}
          onClose={() => setSelectedDemo(null)}
        />

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-[#6B7280] text-sm">
            No projects matched your search criteria. Try clearing the filter or search term.
          </div>
        )}

      </div>
    </div>
  );
};
