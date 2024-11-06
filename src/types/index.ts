export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  clientId: string;
  avatar?: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  fields: FormField[];
  currentEditor?: string;
  lastModified: Date;
  status: 'draft' | 'in_progress' | 'completed';
  clientId: string;
}

export interface FormField {
  id: string;
  type: 'text' | 'number' | 'select' | 'file' | 'date';
  label: string;
  required: boolean;
  value: string;
  validation?: string;
  options?: string[];
}

export interface Report {
  id: string;
  name: string;
  templates: Template[];
  workflow: WorkflowStep[];
  status: 'draft' | 'in_progress' | 'completed';
  createdAt: Date;
  modifiedAt: Date;
  clientId: string;
}

export interface WorkflowStep {
  id: string;
  name: string;
  assignee: string;
  status: 'pending' | 'in_progress' | 'completed';
  order: number;
  dependsOn?: string[];
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  details: string;
  timestamp: Date;
  entityId: string;
  entityType: 'template' | 'report' | 'workflow';
  clientId: string;
}