import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Text } from "../../components/Input";
import { Password } from "../../components/Input/password";
import { AppRoutes } from "../../constants/AppRoutes";
import { useCompany } from "../../hooks/useCompany";
import { useLogin } from "../../hooks/useLogin";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

export function LoginPage() {
  const { logoUrl } = useCompany();
  const { makeLogin, user } = useLogin();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.id) navigate(AppRoutes.CLASS_DASHBOARD);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const schema = z.object({
    email: z
      .string({
        errorMap: () => ({ message: "Campo obrigatório" }),
      })
      .email("Email inválido"),
    password: z
      .string({
        errorMap: () => ({ message: "Campo obrigatório" }),
      })
      .min(1, "Campo obrigatório"),
  });

  type FormType = z.infer<typeof schema>;

  function onSubmit(form: FormType) {
    setLoading(true);
    makeLogin(form.email, form.password);

    setTimeout(() => {
      setLoading(false);

      setTimeout(() => {
        navigate(AppRoutes.CLASS_DASHBOARD);
      }, 500);
    }, 3000);
  }

  const formik = useFormik<FormType>({
    initialValues: {
      email: "jonhdoe@myclass.com",
      password: "123456",
    },
    onSubmit,
    validationSchema: toFormikValidationSchema(schema),
  });

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
      <Link to={AppRoutes.HOME} className="mb-10 md:mb-20">
        <img src={logoUrl} alt="" className="w-[300px]" />
      </Link>

      <form
        onSubmit={formik.handleSubmit}
        className="
            max-w-[500px] max-h-[300px] h-screen w-full 
            flex flex-col justify-center items-center 
            rounded-xl py-6 px-10 shadow-2xl
            gap-4 bg-light-100
        "
      >
        <Text
          label="Email"
          placeholder="Insira seu email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />

        <Password
          label="Senha"
          placeholder="Insira sua senha"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />

        <Button className="w-full" isLoading={loading} type="submit">
          Entrar
        </Button>
      </form>
    </div>
  );
}
