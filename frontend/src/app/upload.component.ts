import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html'
})
export class UploadComponent {
  description = '';
  assumptions = '';
  file: File | null = null;
  result: any;

  constructor(private api: ApiService) {}

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  submit() {
    if (!this.file) return;
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('description', this.description);
    formData.append('assumptions', this.assumptions);
    this.api.analyze(formData).subscribe(res => this.result = res);
  }
}
