import { DetalleVenta } from '../../historial-venta/interfaces/detalle-venta';

export interface Venta {
  idVenta?: number;
  numeroDocumento?: string;
  tipoPago: string;
  fechaRegistro?: string;
  totalTexto: string;
  detalleVenta: DetalleVenta[];
}
