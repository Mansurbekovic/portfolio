import React, { useState } from 'react';
import { Search, Globe, CheckCircle2, ArrowUpRight, Eye } from 'lucide-react';
import { getProjects, type LiveProject } from '../data/projectsData';
import { ProjectDemoModal } from '../components/ProjectDemoModal';
import { useLanguage } from '../context/LanguageContext';

export const ProjectsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDemo, setSelectedDemo] = useState<LiveProject | null>(null);
  const { language, t } = useLanguage();

  const projects = getProjects(language);

  // Group categories dynamically from the current language's projects
  const uniqueCategories = [t.catAll, ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = projects.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || selectedCategory === t.catAll || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Header */}
        <div className="border-b border-[var(--border-subtle)] pb-8 mb-10">
          <div className="text-xs font-mono font-semibold text-[var(--accent-amber)] uppercase tracking-wider mb-2">
            {t.projectsHeaderBadge}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4">
            {t.projectsHeaderTitle}
          </h1>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            {t.projectsHeaderSubtitle}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Categories */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {uniqueCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-[5px] text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat || (selectedCategory === 'All' && cat === t.catAll)
                    ? 'bg-[#111827] dark:bg-[var(--accent-amber)] text-white dark:text-[#111827] font-bold shadow-xs'
                    : 'bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.projectsSearchPlaceholder}
              className="w-full pl-9 pr-3 py-1.5 rounded-[5px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-amber)]"
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
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-[4px] bg-[var(--bg-muted)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="mb-5 space-y-1.5">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-[var(--text-muted)]">
                      <CheckCircle2 className="w-3 h-3 text-[#10B981] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] bg-[var(--bg-muted)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Preview & Direct Visit */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedDemo(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-[5px] bg-[var(--bg-muted)] hover:bg-[var(--border-subtle)] text-[var(--text-primary)] text-xs font-mono font-medium transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                  <span>{t.btnPreview}</span>
                </button>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-[5px] bg-[#111827] dark:bg-[var(--accent-amber)] text-white dark:text-[#111827] font-semibold text-xs hover:opacity-90 transition-all"
                >
                  <Globe className="w-3.5 h-3.5 text-[#F59E0B] dark:text-[#111827]" />
                  <span>{t.btnVisitSite}</span>
                  <ArrowUpRight className="w-3 h-3 text-white/70 dark:text-[#111827]/70" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-[var(--text-muted)] text-sm">
            {t.projectsEmptyText}
          </div>
        )}

        {/* In-Place Project Demo Modal */}
        <ProjectDemoModal
          project={selectedDemo}
          onClose={() => setSelectedDemo(null)}
        />

      </div>
    </div>
  );
};
