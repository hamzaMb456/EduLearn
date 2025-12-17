import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center gap-2 cursor-pointer">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">EL</span>
            </div>
            <span class="text-xl font-bold text-gray-900 hidden sm:inline">EduLearn</span>
          </a>

          <!-- Navigation -->
          <nav class="hidden md:flex items-center gap-8">
            <a href="#courses" class="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">Courses</a>
            <a href="#certifications" class="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">Certifications</a>
            <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">About</a>
            <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">Contact</a>
          </nav>

          <!-- CTA Buttons -->
          <div class="flex items-center gap-4">
            <button class="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm hidden sm:inline">
              Sign In
            </button>
            <button class="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-blue-200 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: []
})
export class HeaderComponent {}
