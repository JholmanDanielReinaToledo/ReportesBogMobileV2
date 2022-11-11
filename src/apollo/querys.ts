import {gql} from '@apollo/client';

export const ALL_REPORTES = gql`
  query allReportes {
    allInconvenientes {
      nodes {
        id
        descripcion
        fechaCreacion
      }
    }
  }
`;

export const REPORTES_BY_USUARIO_ID = gql`
  query inconvenientesByUsuarioId($id: BigInt!) {
    allInconvenientes(condition: {idUsuario: $id}) {
      nodes {
        id
        descripcion
        idEstado
        estadoReporteByIdEstado {
          id
          descripcion
        }
        fechaCreacion
        idDireccion
        direccionByIdDireccion {
          id
          cruceDesde
          numeroDesde
          letraDesde
          orientacionDesde
          cruceHasta
          numeroHasta
          letraHasta
          orientacionHasta
          numero
          complemento
          localizacion
        }
      }
    }
  }
`;
