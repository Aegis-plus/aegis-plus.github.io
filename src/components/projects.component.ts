
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 bg-ctp-mantle">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-ctp-text mb-4">Quest Log</h2>
          <p class="text-ctp-subtext0 max-w-2xl mx-auto">Completed missions and ongoing campaigns. Check out what I've built.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Project 1: AIGEN -->
          <div class="bg-ctp-base rounded-xl overflow-hidden shadow-lg border border-ctp-surface0 group hover:-translate-y-2 transition-all duration-300">
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-bold text-ctp-text">AIGEN</h3>
                <span class="px-2 py-1 text-xs rounded-full bg-ctp-mauve/20 text-ctp-mauve border border-ctp-mauve/30">Image</span>
              </div>
              <p class="text-ctp-text text-sm font-bold mb-1 tracking-wide">SYNTHESIZE REALITY</p>
              <p class="text-ctp-subtext0 text-xs italic mb-3">Input data stream. Generate visual output.</p>
              <p class="text-ctp-subtext0 text-sm mb-4 line-clamp-4">
                A web application that leverages AI models through the g4f.dev API to generate images from text prompts. Features include Model Selection, Rate Limiting Awareness, and Generation History.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="text-xs font-mono text-ctp-subtext1 bg-ctp-surface0 px-2 py-1 rounded">React</span>
                <span class="text-xs font-mono text-ctp-subtext1 bg-ctp-surface0 px-2 py-1 rounded">Vite</span>
                <span class="text-xs font-mono text-ctp-subtext1 bg-ctp-surface0 px-2 py-1 rounded">TypeScript</span>
                <span class="text-xs font-mono text-ctp-subtext1 bg-ctp-surface0 px-2 py-1 rounded">g4f.dev API</span>
              </div>
              <div class="flex gap-3">
                <a href="https://aigen.aegis-plus.my.id" target="_blank" class="flex-1 text-center py-2 bg-ctp-blue text-ctp-base font-bold rounded-lg hover:bg-ctp-blue/90 transition-colors text-sm">Live Demo</a>
                <a href="https://github.com/Aegis-plus/AIGEN" target="_blank" class="flex-1 text-center py-2 border border-ctp-surface1 text-ctp-text font-medium rounded-lg hover:bg-ctp-surface0 transition-colors text-sm">GitHub</a>
              </div>
            </div>
          </div>

          <!-- Project 2: Synapse -->
          <div class="bg-ctp-base rounded-xl overflow-hidden shadow-lg border border-ctp-surface0 group hover:-translate-y-2 transition-all duration-300">
            <div class="p-6">
               <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-bold text-ctp-text">Synapse</h3>
                <span class="px-2 py-1 text-xs rounded-full bg-ctp-green/20 text-ctp-green border border-ctp-green/30">Chat</span>
              </div>
              <p class="text-ctp-text text-sm font-bold mb-1 tracking-wide">AI CHAT INTERFACE</p>
              <p class="text-ctp-subtext0 text-xs italic mb-3">Intelligent conversations with rich code visualization.</p>
              <p class="text-ctp-subtext0 text-sm mb-4 line-clamp-4">
                Synapse is a chat AI interface built with Vite and React. It features a powerful markdown renderer and syntax highlighter, enabling users to view formatted text and code snippets seamlessly within the chat.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="text-xs font-mono text-ctp-subtext1 bg-ctp-surface0 px-2 py-1 rounded">React</span>
                <span class="text-xs font-mono text-ctp-subtext1 bg-ctp-surface0 px-2 py-1 rounded">Vite</span>
                <span class="text-xs font-mono text-ctp-subtext1 bg-ctp-surface0 px-2 py-1 rounded">Markdown</span>
              </div>
              <div class="flex gap-3">
                <a href="https://chat.aegis-plus.my.id/" target="_blank" class="flex-1 text-center py-2 bg-ctp-blue text-ctp-base font-bold rounded-lg hover:bg-ctp-blue/90 transition-colors text-sm">Live Demo</a>
                <a href="https://github.com/Aegis-plus/Synapse" target="_blank" class="flex-1 text-center py-2 border border-ctp-surface1 text-ctp-text font-medium rounded-lg hover:bg-ctp-surface0 transition-colors text-sm">GitHub</a>
              </div>
            </div>
          </div>

          <!-- Project 3: MindFlow -->
          <div class="bg-ctp-base rounded-xl overflow-hidden shadow-lg border border-ctp-surface0 group hover:-translate-y-2 transition-all duration-300">
            <div class="p-6">
               <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-bold text-ctp-text">MindFlow</h3>
                <span class="px-2 py-1 text-xs rounded-full bg-ctp-pink/20 text-ctp-pink border border-ctp-pink/30">Notes</span>
              </div>
              <p class="text-ctp-text text-sm font-bold mb-1 tracking-wide">MOBILE FIRST NOTES</p>
              <p class="text-ctp-subtext0 text-xs italic mb-3">Smart formatting & intelligent search.</p>
              <p class="text-ctp-subtext0 text-sm mb-4 line-clamp-4">
                An AI-powered note-taking app that transforms messy thoughts into organized insights. Features smart formatting, intelligent search, and beautiful design built for mobile-first experiences.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="text-xs font-mono text-ctp-subtext1 bg-ctp-surface0 px-2 py-1 rounded">React</span>
                <span class="text-xs font-mono text-ctp-subtext1 bg-ctp-surface0 px-2 py-1 rounded">Vite</span>
                <span class="text-xs font-mono text-ctp-subtext1 bg-ctp-surface0 px-2 py-1 rounded">AI</span>
                <span class="text-xs font-mono text-ctp-subtext1 bg-ctp-surface0 px-2 py-1 rounded">PWA</span>
              </div>
              <div class="flex gap-3">
                <a href="https://note.aegis-plus.my.id/" target="_blank" class="flex-1 text-center py-2 bg-ctp-blue text-ctp-base font-bold rounded-lg hover:bg-ctp-blue/90 transition-colors text-sm">Live Demo</a>
                <a href="https://github.com/Aegis-plus/Mindflow" target="_blank" class="flex-1 text-center py-2 border border-ctp-surface1 text-ctp-text font-medium rounded-lg hover:bg-ctp-surface0 transition-colors text-sm">GitHub</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {}
