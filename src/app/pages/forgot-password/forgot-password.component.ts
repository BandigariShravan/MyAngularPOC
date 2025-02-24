import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';

  onSubmit() {
    if (this.email) {
      console.log('Reset link sent to:', this.email);
      alert('A password reset link has been sent to ' + this.email);
      // Here, you can add API call logic to send reset link
    } else {
      alert('Please enter a valid email address.');
    }
  }
}
