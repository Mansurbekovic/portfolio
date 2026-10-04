import React, { useState, useEffect } from 'react';
import { Shield, Cpu, ChevronRight, X, Code2 } from 'lucide-react';
import { apiService } from '../services/api';
import type { ProjectItem } from '../types';

export const ProjectShowcase: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Cybersecurity', 'Cryptographic Storage', 'Creative Engineering', 'Frontier AI'];

  useEffect(() => {
    apiService.getProjects().then(setProjects);
  }, []);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3">
            PORTFOLIO ARTIFACTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            High-Stakes Solutions.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              Pioneering Artifacts.
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Whether showcasing enterprise-grade AI solutions or pioneering creative projects, Antigravity delivers an ultra-secure and unforgettable digital presence.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-mono text-xs transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,242,254,0.4)]'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-8 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shadow-xl hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(0,242,254,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <Shield className="w-3.5 h-3.5" />
                    <span>{project.security_rating}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech_stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-black/40 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                <span className="font-bold">INSPECT ARCHITECTURE SPECIFICATION</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl rounded-2xl border border-cyan-500/40 bg-slate-950 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  {selectedProject.security_rating}
                </span>
              </div>

              <h3 className="text-3xl font-extrabold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed mb-6">
                {selectedProject.full_description}
              </p>

              {/* Architecture Blueprint Box */}
              <div className="p-5 rounded-xl bg-slate-900 border border-cyan-500/20 mb-6 font-mono text-xs text-slate-300">
                <div className="text-cyan-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>Architecture Overview</span>
                </div>
                <p className="leading-relaxed">
                  {selectedProject.architecture_overview}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Core Engineering Capabilities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-mono text-slate-200 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                      <span className="text-cyan-400 mt-0.5">›</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                {selectedProject.github_url && (
                  <a
                    href={selectedProject.github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono text-xs hover:border-cyan-400 transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="ml-auto px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold font-mono text-xs hover:bg-cyan-400 transition-colors"
                >
                  Close Specification
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
