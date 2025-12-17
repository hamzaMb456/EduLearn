import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="pt-16 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md">
        <!-- Header -->
        <div class="text-center mb-8">
          <a routerLink="/" class="inline-flex items-center gap-2 mb-6">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold">EL</span>
            </div>
            <span class="text-2xl font-bold text-gray-900">EduLearn</span>
          </a>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p class="text-gray-600">Sign in to your account to continue learning</p>
        </div>

        <!-- Login Form Card -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <form (ngSubmit)="handleLogin()" #loginForm="ngForm">
            <!-- Email Input -->
            <div class="mb-6">
              <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                [(ngModel)]="email"
                placeholder="you@example.com"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <!-- Password Input -->
            <div class="mb-2">
              <label for="password" class="block text-sm font-semibold text-gray-900 mb-2">
                Password
              </label>
              <input
                [type]="showPassword ? 'text' : 'password'"
                id="password"
                name="password"
                [(ngModel)]="password"
                placeholder="Enter your password"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <!-- Show Password Toggle -->
            <div class="mb-6 flex items-center">
              <input
                type="checkbox"
                id="showPassword"
                (change)="showPassword = !showPassword"
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <label for="showPassword" class="ml-2 text-sm text-gray-600 cursor-pointer">
                Show password
              </label>
            </div>

            <!-- Forgot Password Link -->
            <div class="mb-6">
              <a href="#" class="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                Forgot your password?
              </a>
            </div>

            <!-- Sign In Button -->
            <button
              type="submit"
              class="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-200 transition-all transform hover:scale-105 mb-4"
            >
              Sign In
            </button>

            <!-- Social Login -->
            <div class="relative mb-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <button
                type="button"
                class="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
              >
                <span class="text-xl">🔵</span>
                <span class="ml-2 text-sm font-medium text-gray-700">Google</span>
              </button>
              <button
                type="button"
                class="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
              >
                <span class="text-xl">👨‍💼</span>
                <span class="ml-2 text-sm font-medium text-gray-700">GitHub</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Sign Up Link -->
        <div class="text-center mt-6">
          <p class="text-gray-600">
            Don't have an account?
            <a routerLink="/signup" class="text-blue-600 hover:text-blue-700 font-semibold">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class LoginComponent {
  email = signal('');
  password = signal('');
  showPassword = signal(false);

  handleLogin() {
    if (this.email() && this.password()) {
      alert('Login successful! This is a demo.');
    }
  }
}
