export interface FormData {
  nombre: string
  email: string
  organizacion: string
  razon: string
  perfil: string
}

export interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  error?: string
}
