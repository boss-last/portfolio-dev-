import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project { id: number; name: string; members: number; }

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private http = inject(HttpClient);
  private base = 'http://localhost:4000/api';
  list(): Observable<Project[]> { return this.http.get<Project[]>(`${this.base}/projects`); }
  create(data: Partial<Project>) { return this.http.post(`${this.base}/projects`, data); }
}
