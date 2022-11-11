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
