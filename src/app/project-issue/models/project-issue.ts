export interface Project {
  id: number;
  projectname: string;
  projectcode: string;
}

export interface User {
  id: number;
  username: string;
}

export interface Comment {
  id: number;
  comment: string;
  comment_on: Date;
  commentor: User;
  file_name: string;
}

export interface ProjectIssue {
  id: number;
  project: Project;
  created_by: User;
  assignee: User;
  description: string;
  issue_title: string;
  status: string;
  topic_type: string;
  created_on: Date;
  updated_on: Date;
  comments: Comment[]
}
