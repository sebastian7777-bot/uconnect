export interface FormData {
  nombre: string
  email: string
  perfil: string
  por_que: string
  como_nos_encontraste: string
}

export interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

export interface TorusConfig {
  rotation: [number, number, number]
  speed: number
  offset: number
  radius: number
}
