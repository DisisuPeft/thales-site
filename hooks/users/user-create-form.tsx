import { useForm } from "react-hook-form";

export interface UserFormData {
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  genero: number;
  edad: number;
  fecha_nacimiento: string;
  telefono: string;
  email: string;
  status: number;
  roles: number[];
}

export function useUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<UserFormData>({
    defaultValues: {
      nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      genero: 0,
      edad: 0,
      fecha_nacimiento: "",
      telefono: "",
      email: "",
      status: 1,
      roles: [],
    },
  });

  const roles = watch("roles");

  const setRoles = (selectedRoles: string[]) => {
    setValue("roles", selectedRoles.map(Number));
  };

  return {
    register,
    handleSubmit,
    errors,
    roles,
    setRoles,
  };
}
