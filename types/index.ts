export interface City {
  name: string
  lat:  number
  lng:  number
  major: boolean
}

export interface Arc {
  startLat: number
  startLng: number
  endLat:   number
  endLng:   number
  color:    string
}

export interface FormData {
  nombre:       string
  email:        string
  organizacion: string
  razon:        string
  perfil:       string
}

export interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  error?: string
}
