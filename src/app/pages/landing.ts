import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pt-16">
      <!-- Hero Section -->
      <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <!-- Decorative background elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div class="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Left Content -->
            <div class="space-y-6 sm:space-y-8">
              <div class="space-y-4">
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Learn from the <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">World's Best</span>
                </h1>
                <p class="text-lg sm:text-xl text-gray-600 max-w-2xl">
                  Access thousands of courses, professional certifications, and degrees from prestigious universities. Transform your career and unlock your potential.
                </p>
              </div>

              <div class="flex flex-col sm:flex-row gap-4">
                <button class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-base hover:shadow-lg hover:shadow-blue-200 transition-all transform hover:scale-105">
                  Start Learning Today
                </button>
                <button class="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold text-base hover:bg-blue-50 transition-all">
                  Explore Courses
                </button>
              </div>

              <!-- Stats -->
              <div class="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <p class="text-2xl sm:text-3xl font-bold text-gray-900">50K+</p>
                  <p class="text-gray-600 text-sm">Active Students</p>
                </div>
                <div>
                  <p class="text-2xl sm:text-3xl font-bold text-gray-900">500+</p>
                  <p class="text-gray-600 text-sm">Expert Courses</p>
                </div>
                <div>
                  <p class="text-2xl sm:text-3xl font-bold text-gray-900">98%</p>
                  <p class="text-gray-600 text-sm">Satisfaction Rate</p>
                </div>
              </div>
            </div>

            <!-- Right Image -->
            <div class="relative">
              <div class="relative z-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl p-1 shadow-2xl">
                <div class="bg-white rounded-3xl p-8 sm:p-12">
                  <div class="space-y-4">
                    <div class="flex items-center gap-4">
                      <div class="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                        <span class="text-2xl">🎓</span>
                      </div>
                      <div>
                        <p class="font-semibold text-gray-900">Advanced Learning</p>
                        <p class="text-sm text-gray-600">From industry experts</p>
                      </div>
                    </div>
                    <div class="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="courses" class="py-20 sm:py-32 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 sm:mb-20">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose EduLearn?
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive learning solutions with world-class instructors and flexible learning paths.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Feature Card 1 -->
            <div class="p-8 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all group">
              <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                📚
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">500+ Courses</h3>
              <p class="text-gray-600">
                Explore a vast catalog of courses across programming, business, design, and more from top universities.
              </p>
            </div>

            <!-- Feature Card 2 -->
            <div class="p-8 border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-lg transition-all group">
              <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-xl mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                🏆
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Certifications</h3>
              <p class="text-gray-600">
                Earn recognized certifications that boost your resume and advance your career with industry-standard credentials.
              </p>
            </div>

            <!-- Feature Card 3 -->
            <div class="p-8 border border-gray-200 rounded-xl hover:border-pink-300 hover:shadow-lg transition-all group">
              <div class="w-12 h-12 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-xl mb-4 group-hover:bg-pink-600 group-hover:text-white transition-all">
                🎯
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Expert Instructors</h3>
              <p class="text-gray-600">
                Learn directly from industry professionals and university professors with real-world experience.
              </p>
            </div>

            <!-- Feature Card 4 -->
            <div class="p-8 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all group">
              <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                ⏰
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Learn at Your Pace</h3>
              <p class="text-gray-600">
                Study anytime, anywhere with flexible scheduling and lifetime access to course materials.
              </p>
            </div>

            <!-- Feature Card 5 -->
            <div class="p-8 border border-gray-200 rounded-xl hover:border-green-300 hover:shadow-lg transition-all group">
              <div class="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-xl mb-4 group-hover:bg-green-600 group-hover:text-white transition-all">
                👥
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p class="text-gray-600">
                Connect with a global community of learners and get support from peers and mentors.
              </p>
            </div>

            <!-- Feature Card 6 -->
            <div class="p-8 border border-gray-200 rounded-xl hover:border-orange-300 hover:shadow-lg transition-all group">
              <div class="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-xl mb-4 group-hover:bg-orange-600 group-hover:text-white transition-all">
                💼
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Career Support</h3>
              <p class="text-gray-600">
                Get job-ready with career guidance, interview prep, and connections to top employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Certifications Section -->
      <section id="certifications" class="py-20 sm:py-32 bg-gradient-to-br from-slate-50 to-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 sm:mb-20">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Professional Certifications
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Earn credentials that matter. Our certifications are recognized by leading companies worldwide.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Certification Card 1 -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div class="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden flex items-center justify-center">
                <span class="text-6xl">💻</span>
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-semibold text-gray-900 mb-2">Web Development</h3>
                <p class="text-gray-600 mb-4">Master full-stack development with React, Node.js, and modern web technologies.</p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-blue-600 font-semibold">6-8 weeks</span>
                  <button class="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <!-- Certification Card 2 -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div class="h-48 bg-gradient-to-br from-purple-400 to-purple-600 relative overflow-hidden flex items-center justify-center">
                <span class="text-6xl">🤖</span>
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
                <p class="text-gray-600 mb-4">Deep dive into artificial intelligence, machine learning, and data science fundamentals.</p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-purple-600 font-semibold">8-10 weeks</span>
                  <button class="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <!-- Certification Card 3 -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div class="h-48 bg-gradient-to-br from-pink-400 to-pink-600 relative overflow-hidden flex items-center justify-center">
                <span class="text-6xl">📊</span>
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-semibold text-gray-900 mb-2">Business Analytics</h3>
                <p class="text-gray-600 mb-4">Learn data-driven decision making and advanced analytics for modern businesses.</p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-pink-600 font-semibold">6 weeks</span>
                  <button class="px-6 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <!-- Certification Card 4 -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div class="h-48 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden flex items-center justify-center">
                <span class="text-6xl">🎨</span>
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-semibold text-gray-900 mb-2">UI/UX Design</h3>
                <p class="text-gray-600 mb-4">Create stunning user experiences with design principles and industry-leading tools.</p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-green-600 font-semibold">7 weeks</span>
                  <button class="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- University Partners Section -->
      <section class="py-20 sm:py-32 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 sm:mb-20">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Partner Universities
            </h2>
            <p class="text-lg text-gray-600">Learn from the world's most prestigious institutions</p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center">
            <div class="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 font-semibold">Harvard</div>
            <div class="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 font-semibold">MIT</div>
            <div class="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 font-semibold">Stanford</div>
            <div class="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 font-semibold">Yale</div>
            <div class="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 font-semibold">Oxford</div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning with EduLearn. Start your journey today and unlock endless possibilities.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-base hover:bg-blue-50 transition-all transform hover:scale-105">
              Get Started Free
            </button>
            <button class="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-base hover:bg-white hover:bg-opacity-10 transition-all">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-900 text-gray-400 py-16 sm:py-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div class="flex items-center gap-2 mb-4">
                <div class="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-sm">EL</span>
                </div>
                <span class="text-white font-bold">EduLearn</span>
              </div>
              <p class="text-sm">Transforming education through innovative online learning platforms.</p>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-4">Courses</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="#" class="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Data Science</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Design</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-4">Company</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="#" class="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-4">Legal</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p class="text-sm">&copy; 2024 EduLearn. All rights reserved.</p>
            <div class="flex gap-6 mt-4 sm:mt-0">
              <a href="#" class="hover:text-white transition-colors">Twitter</a>
              <a href="#" class="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" class="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: []
})
export class LandingComponent {}
