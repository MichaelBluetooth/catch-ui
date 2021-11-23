import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProjectIssue } from '../models/project-issue';

@Injectable({ providedIn: 'root' })
export class IssueService {
  constructor(private http: HttpClient, private router: Router) {}

  comment(issueId: number, comment: string, file?: File): void {
    if (file) {
      const formData = new FormData();
      formData.set;
      formData.set('json', JSON.stringify({ comment }));
      formData.set('imagefile', file);
      this.http.post(`issues/${issueId}/comment`, formData).subscribe(() => {
        this.router.navigate(['/issues', issueId]);
      });
    } else {
      this.http.post(`issues/${issueId}/comment`, { comment }).subscribe(() => {
        this.router.navigate(['/issues', issueId]);
      });
    }
  }

  updateStatus(issueId: number, newStatus: string): void {
    this.http
      .put(`issues/${issueId}/status`, { status: newStatus })
      .subscribe(() => {
        this.router.navigate(['/issues', issueId]);
      });
  }

  getIssueUserOptions(projectId: number): Observable<any> {
    //TODO: only get users assigned to this project...
    return this.http.get('users').pipe(map((r: any) => r['results']));
  }

  updateIssue(issueId: number, update: any) {
    this.http.put(`issues/${issueId}`, update).subscribe(() => {
      this.router.navigate(['/issues', issueId]);
    });
  }

  createIssue(newIssue: any) {
    this.http
      .post<ProjectIssue>('issues/', newIssue)
      .subscribe((newIssue: ProjectIssue) => {
        this.router.navigate(['/issues', newIssue.id]);
      });
  }
}
