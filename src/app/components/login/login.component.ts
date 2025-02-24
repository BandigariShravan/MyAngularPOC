import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';  // ✅ Import Router
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule, RouterModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {  // ✅ Inject Router
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (response) => {
          console.log('Login Successful:', response);
          this.successMessage = 'Login Successful!';
          this.errorMessage = '';

          // ✅ Redirect to Dashboard (or any other page)
          this.router.navigate(['/sample']);
        },
        error: (error) => {
          console.error('Login Failed:', error);
          this.errorMessage = 'Invalid credentials. Try again.';
          this.successMessage = '';
        }
      });
    }
  }
}
