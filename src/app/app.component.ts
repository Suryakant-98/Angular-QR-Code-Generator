import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'QrCode';

  qrData = '';
  downloadLink: SafeUrl = '';

  onChangeURL(url: SafeUrl) {
    this.downloadLink = url;
  }

  clearInput() {
    this.qrData = '';
  }
}
