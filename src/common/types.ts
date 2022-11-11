export type User = {
  activo: boolean;
  correoElectronico: string;
  id: number;
  identificacion: string;
  token: string;
};

export type UserLogin = {
  identificacion: string;
  password: string;
};

export type Reporte = {
  id: number;
  descripcion: string;
  idEstado: number;
  estadoReporteByIdEstado: {
    descripcion: string;
  };
  fechaCreacion: Date;
  idDireccion?: number;
};
