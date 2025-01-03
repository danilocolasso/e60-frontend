export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at?: string;
  updated_at?: string;
  email_verified_at?: string;
}

export const roles: Record<User['role'], string> = {
  master: 'MASTER',
  admin: 'ADMINISTRADOR',
  user: 'USUÁRIO',
  agency: 'AGÊNCIA',
  reception: 'RECEPÇÃO',
}