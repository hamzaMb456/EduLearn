import { Routes } from "@angular/router";
import { LandingComponent } from "./pages/landing";
import { LoginComponent } from "./pages/login";
import { SignupComponent } from "./pages/signup";
import { SupportComponent } from "./pages/support";

export const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "support", component: SupportComponent },
  { path: "**", redirectTo: "" },
];
