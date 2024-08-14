import { Component, NgZone, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUpload } from '../modal/file-upload';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
  providers: [MessageService]
})
export class FileUploadComponent implements OnInit{

  uploadedFiles: any[] = [];


  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
  }

  onUpload(event: { originalEvent: HttpEvent<any>; files: File[] }) {
    if (event.originalEvent.type === HttpEventType.Response) {
      for (let file of event.files) {
        this.uploadedFiles.push(file);
      }
      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
  }


}
