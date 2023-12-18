import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Button } from "../../components/Button";
import { Text } from "../../components/Input/Text";
import { Password } from "../../components/Input/password";
import { AppRoutes } from "../../constants/AppRoutes";
import { useCompany } from "../../hooks/useCompany";
import { useLogin } from "../../hooks/useLogin";

export function SignInPage() {
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
      password: "John123456@",
    },
    onSubmit,
    validationSchema: toFormikValidationSchema(schema),
  });

  return (
    <div className="w-full h-screen flex justify-center bg-light-100">
      <div className="w-full h-screen max-w-screen-cut flex">
        <div className="w-full h-screen hidden lg:flex flex-col gap-10 items-center justify-center ">
          <div className="max-w-[400px] w-full h-screen hidden lg:flex flex-col gap-10 items-start justify-center">
            <Link to={AppRoutes.HOME} className="">
              <img src={logoUrl} alt="" className="w-[300px]" />
            </Link>

            <h1 className="text-5xl font-bold">Faça seu login na plataforma</h1>

            <Link to={AppRoutes.HOME} className="flex gap-2 items-center">
              Ir para tela inicial
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="w-full h-screen flex flex-col justify-center items-center  px-4 ">
          <Link to={AppRoutes.HOME} className="mb-10 md:mb-20 lg:hidden">
            <img src={logoUrl} alt="" className="w-[300px]" />
          </Link>

          <form
            onSubmit={formik.handleSubmit}
            className="
            max-w-[500px] w-full 
            flex flex-col justify-center items-center 
            rounded-xl py-6 px-10 shadow-2xl
            gap-2 bg-light-100
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

            <Button className="w-full mt-2" isLoading={loading} type="submit">
              Entrar
            </Button>
            <p className="text-sm mt-4">
              Não tem uma conta?{" "}
              <Link to={AppRoutes.SIGN_UP} className="font-bold">
                Registre-se
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
