import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-signup",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div
      class="pt-16 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="w-full max-w-md">
        <!-- Header -->
        <div class="text-center mb-8">
          <a routerLink="/" class="inline-flex items-center gap-2 mb-6">
            <div
              class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
            >
              <span class="text-white font-bold">EL</span>
            </div>
            <span class="text-2xl font-bold text-gray-900">EduLearn</span>
          </a>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p class="text-gray-600">
            Join thousands of learners transforming their careers
          </p>
        </div>

        <!-- Signup Form Card -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <form (ngSubmit)="handleSignup()" #signupForm="ngForm">
            <!-- Full Name Input -->
            <div class="mb-6">
              <label
                for="fullName"
                class="block text-sm font-semibold text-gray-900 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                [(ngModel)]="fullName"
                placeholder="John Doe"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <!-- Email Input -->
            <div class="mb-6">
              <label
                for="email"
                class="block text-sm font-semibold text-gray-900 mb-2"
              >
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
            <div class="mb-6">
              <label
                for="password"
                class="block text-sm font-semibold text-gray-900 mb-2"
              >
                Password
              </label>
              <input
                [type]="showPassword ? 'text' : 'password'"
                id="password"
                name="password"
                [(ngModel)]="password"
                placeholder="Create a strong password"
                (input)="checkPasswordStrength()"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
              <!-- Password Strength Indicator -->
              <div class="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  [ngClass]="{
                    'bg-red-500': passwordStrength === 'weak',
                    'bg-yellow-500': passwordStrength === 'medium',
                    'bg-green-500': passwordStrength === 'strong',
                  }"
                  [style.width]="
                    passwordStrength === 'weak'
                      ? '33%'
                      : passwordStrength === 'medium'
                        ? '66%'
                        : '100%'
                  "
                  class="h-full transition-all duration-300"
                ></div>
              </div>
              <p class="text-xs text-gray-600 mt-1">
                <span
                  [ngClass]="{
                    'text-red-500': passwordStrength === 'weak',
                    'text-yellow-500': passwordStrength === 'medium',
                    'text-green-500': passwordStrength === 'strong',
                  }"
                >
                  {{ passwordStrength || "Enter a password" }}
                </span>
              </p>
            </div>

            <!-- Confirm Password Input -->
            <div class="mb-2">
              <label
                for="confirmPassword"
                class="block text-sm font-semibold text-gray-900 mb-2"
              >
                Confirm Password
              </label>
              <input
                [type]="showPassword ? 'text' : 'password'"
                id="confirmPassword"
                name="confirmPassword"
                [(ngModel)]="confirmPassword"
                placeholder="Confirm your password"
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
              <label
                for="showPassword"
                class="ml-2 text-sm text-gray-600 cursor-pointer"
              >
                Show password
              </label>
            </div>

            <!-- Terms Checkbox -->
            <div class="mb-6 flex items-start">
              <input
                type="checkbox"
                id="terms"
                [(ngModel)]="agreeToTerms"
                name="agreeToTerms"
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 mt-1"
                required
              />
              <label
                for="terms"
                class="ml-2 text-sm text-gray-600 cursor-pointer"
              >
                I agree to the
                <a
                  href="#"
                  class="text-blue-600 hover:text-blue-700 font-semibold"
                  >Terms of Service</a
                >
                and
                <a
                  href="#"
                  class="text-blue-600 hover:text-blue-700 font-semibold"
                  >Privacy Policy</a
                >
              </label>
            </div>

            <!-- Sign Up Button -->
            <button
              type="submit"
              class="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-200 transition-all transform hover:scale-105 mb-4"
            >
              Create Account
            </button>

            <!-- Social Signup -->
            <div class="relative mb-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <button
                type="button"
                class="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
              >
                <span class="text-xl">🔵</span>
                <span class="ml-2 text-sm font-medium text-gray-700"
                  >Google</span
                >
              </button>
              <button
                type="button"
                class="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
              >
                <span class="text-xl">👨‍💼</span>
                <span class="ml-2 text-sm font-medium text-gray-700"
                  >GitHub</span
                >
              </button>
            </div>
          </form>
        </div>

        <!-- Sign In Link -->
        <div class="text-center mt-6">
          <p class="text-gray-600">
            Already have an account?
            <a
              routerLink="/login"
              class="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class SignupComponent {
  fullName = "";
  email = "";
  password = "";
  confirmPassword = "";
  showPassword = false;
  agreeToTerms = false;
  passwordStrength = "";

  checkPasswordStrength() {
    if (this.password.length < 6) {
      this.passwordStrength = "weak";
    } else if (this.password.length < 10) {
      this.passwordStrength = "medium";
    } else {
      this.passwordStrength = "strong";
    }
  }

  handleSignup() {
    if (
      this.fullName &&
      this.email &&
      this.password &&
      this.confirmPassword &&
      this.agreeToTerms
    ) {
      if (this.password === this.confirmPassword) {
        alert("Account created successfully! This is a demo.");
      } else {
        alert("Passwords do not match!");
      }
    }
  }
}
