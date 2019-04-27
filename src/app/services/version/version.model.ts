// Model Version
import { Recurso } from '../recurso/recurso.model';

export class Version {
  id: number;
  numero: number;
  fechaCreacion: string;
  creadoPor: string;
  imagen: string;
  url: string;
  esFinal: boolean;
  nombreRed: string;
  nombreConectate: string;
  archivos: string;
}

export class CrearVersionModel {
  nombre: string;
  redId: number;
  consecutivo: number;
  creado_por: string;
  fechaCreacion: string;
  imagen: string;
  archivos: string;
  recursosSeleccionados: Array<Recurso>;
  recursos: Array<number>;
}
