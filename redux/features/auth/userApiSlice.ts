import { apiSlice } from "@/redux/services/apiSlice";
import { PaginatedResponse } from "../types/paginated";

export interface User {
  uuid: string;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  genero: number;
  genero_name: string;
  edad: number;
  fecha_nacimiento: string;
  telefono: string;
  email: string;
  status: number;
}

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<
      PaginatedResponse<User>,
      { q: string; page: number }
    >({
      query: ({ q, page }) => `/sistema/usuarios/?q=${q}&page=${page}`,
    }),
  }),
});

export const { useGetUsersQuery } = userApiSlice;
