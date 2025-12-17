import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="pt-16 min-h-screen bg-white">
      <!-- Header Section -->
      <section class="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-12 sm:py-16">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">How Can We Help?</h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Get support from our team or explore our knowledge base
          </p>
        </div>
      </section>

      <!-- Support Options Grid -->
      <section class="py-16 sm:py-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <!-- Knowledge Base -->
            <div class="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-all group">
              <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                📚
              </div>
              <h3 class="text-2xl font-semibold text-gray-900 mb-3">Knowledge Base</h3>
              <p class="text-gray-600 mb-6">
                Browse our comprehensive collection of guides, tutorials, and FAQs
              </p>
              <button class="px-6 py-2 text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2">
                Explore <span>→</span>
              </button>
            </div>

            <!-- Contact Support -->
            <div class="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-all group">
              <div class="w-16 h-16 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                💬
              </div>
              <h3 class="text-2xl font-semibold text-gray-900 mb-3">Contact Support</h3>
              <p class="text-gray-600 mb-6">
                Reach out to our support team for personalized assistance
              </p>
              <button (click)="scrollToContact()" class="px-6 py-2 text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center gap-2">
                Send Message <span>→</span>
              </button>
            </div>

            <!-- Community Forum -->
            <div class="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-all group">
              <div class="w-16 h-16 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:bg-pink-600 group-hover:text-white transition-all">
                👥
              </div>
              <h3 class="text-2xl font-semibold text-gray-900 mb-3">Community Forum</h3>
              <p class="text-gray-600 mb-6">
                Connect with other learners and get help from the community
              </p>
              <button class="px-6 py-2 text-pink-600 font-semibold hover:text-pink-700 inline-flex items-center gap-2">
                Visit Forum <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-16 sm:py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p class="text-lg text-gray-600">Find answers to common questions</p>
          </div>

          <div class="space-y-4">
            <!-- FAQ Item 1 -->
            <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                (click)="toggleFaq(0)"
                class="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span class="font-semibold text-gray-900 text-left">How do I reset my password?</span>
                <span [ngClass]="{'rotate-180': expandedFaq() === 0}" class="text-2xl transition-transform">
                  ▼
                </span>
              </button>
              <div *ngIf="expandedFaq() === 0" class="px-6 py-4 bg-gray-50 text-gray-600 border-t border-gray-200">
                <p>Click on "Forgot Password" on the login page, enter your email, and follow the instructions sent to your inbox. The reset link is valid for 24 hours.</p>
              </div>
            </div>

            <!-- FAQ Item 2 -->
            <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                (click)="toggleFaq(1)"
                class="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span class="font-semibold text-gray-900 text-left">Can I download course materials?</span>
                <span [ngClass]="{'rotate-180': expandedFaq() === 1}" class="text-2xl transition-transform">
                  ▼
                </span>
              </button>
              <div *ngIf="expandedFaq() === 1" class="px-6 py-4 bg-gray-50 text-gray-600 border-t border-gray-200">
                <p>Yes! Course materials are available for download in the course settings. You can access them offline after enrollment. Some courses may have restrictions based on licensing agreements.</p>
              </div>
            </div>

            <!-- FAQ Item 3 -->
            <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                (click)="toggleFaq(2)"
                class="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span class="font-semibold text-gray-900 text-left">Is there a mobile app?</span>
                <span [ngClass]="{'rotate-180': expandedFaq() === 2}" class="text-2xl transition-transform">
                  ▼
                </span>
              </button>
              <div *ngIf="expandedFaq() === 2" class="px-6 py-4 bg-gray-50 text-gray-600 border-t border-gray-200">
                <p>Yes! Our mobile app is available on iOS and Android. You can continue learning on the go with offline access to course materials and synchronized progress across devices.</p>
              </div>
            </div>

            <!-- FAQ Item 4 -->
            <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                (click)="toggleFaq(3)"
                class="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span class="font-semibold text-gray-900 text-left">What's your refund policy?</span>
                <span [ngClass]="{'rotate-180': expandedFaq() === 3}" class="text-2xl transition-transform">
                  ▼
                </span>
              </button>
              <div *ngIf="expandedFaq() === 3" class="px-6 py-4 bg-gray-50 text-gray-600 border-t border-gray-200">
                <p>We offer a 30-day money-back guarantee for all courses. If you're not satisfied, contact our support team for a full refund with no questions asked.</p>
              </div>
            </div>

            <!-- FAQ Item 5 -->
            <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                (click)="toggleFaq(4)"
                class="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span class="font-semibold text-gray-900 text-left">How do I verify my certificate?</span>
                <span [ngClass]="{'rotate-180': expandedFaq() === 4}" class="text-2xl transition-transform">
                  ▼
                </span>
              </button>
              <div *ngIf="expandedFaq() === 4" class="px-6 py-4 bg-gray-50 text-gray-600 border-t border-gray-200">
                <p>Each certificate has a unique verification ID. Employers and institutions can verify your credentials on our verification portal using this ID. Your certificate is valid indefinitely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Form Section -->
      <section id="contact" class="py-16 sm:py-20 bg-white">
        <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Send us a Message</h2>
            <p class="text-lg text-gray-600">We typically respond within 24 hours</p>
          </div>

          <div class="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <form (ngSubmit)="handleContactSubmit()" #contactForm="ngForm">
              <!-- Name Input -->
              <div class="mb-6">
                <label for="contactName" class="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  [(ngModel)]="contactName"
                  placeholder="John Doe"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  required
                />
              </div>

              <!-- Email Input -->
              <div class="mb-6">
                <label for="contactEmail" class="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  [(ngModel)]="contactEmail"
                  placeholder="you@example.com"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  required
                />
              </div>

              <!-- Subject Input -->
              <div class="mb-6">
                <label for="subject" class="block text-sm font-semibold text-gray-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  [(ngModel)]="subject"
                  placeholder="How can we help?"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  required
                />
              </div>

              <!-- Message Input -->
              <div class="mb-6">
                <label for="message" class="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  [(ngModel)]="message"
                  placeholder="Please describe your issue or question..."
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-white"
                  required
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-200 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- Contact Info Section -->
      <section class="py-16 sm:py-20 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Email -->
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✉️
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:support@edulearn.com" class="text-blue-600 hover:text-blue-700 font-semibold">
                support@edulearn.com
              </a>
              <p class="text-gray-600 text-sm mt-2">Response within 24 hours</p>
            </div>

            <!-- Phone -->
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                📞
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+1234567890" class="text-purple-600 hover:text-purple-700 font-semibold">
                +1 (234) 567-890
              </a>
              <p class="text-gray-600 text-sm mt-2">Mon-Fri, 9AM-6PM EST</p>
            </div>

            <!-- Live Chat -->
            <div class="text-center">
              <div class="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💬
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
              <button class="text-pink-600 hover:text-pink-700 font-semibold">
                Start Chat
              </button>
              <p class="text-gray-600 text-sm mt-2">Average wait: 2 minutes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class SupportComponent {
  expandedFaq = signal<number | null>(null);
  contactName = '';
  contactEmail = '';
  subject = '';
  message = '';

  toggleFaq(index: number) {
    if (this.expandedFaq() === index) {
      this.expandedFaq.set(null);
    } else {
      this.expandedFaq.set(index);
    }
  }

  scrollToContact() {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  handleContactSubmit() {
    if (this.contactName && this.contactEmail && this.subject && this.message) {
      alert('Thank you for your message! We will get back to you soon.');
      this.contactName = '';
      this.contactEmail = '';
      this.subject = '';
      this.message = '';
    }
  }
}
