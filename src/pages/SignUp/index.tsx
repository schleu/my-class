import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Text } from "../../components/Input/Text";
import { Password } from "../../components/Input/password";
import { AppRoutes } from "../../constants/AppRoutes";
import { useCompany } from "../../hooks/useCompany";
import { useLogin } from "../../hooks/useLogin";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FaArrowLeft } from "react-icons/fa";

export function SignUpPage() {
  const { logoUrl } = useCompany();
  const { makeLogin, user } = useLogin();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.id) navigate(AppRoutes.CLASS_DASHBOARD);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const passwordMinLen = 8;
  const passwordMaxLen = 16;

  const schema = z
    .object({
      name: z.string({
        errorMap: () => ({ message: "Campo obrigatório" }),
      }),
      email: z
        .string({
          errorMap: () => ({ message: "Campo obrigatório" }),
        })
        .email("Email inválido"),
      password: z
        .string({
          errorMap: () => ({ message: "Campo obrigatório" }),
        })
        .min(
          passwordMinLen,
          `Deve conter no mínimo ${passwordMinLen} characteres;`
        )
        .max(
          passwordMaxLen,
          `Deve conter no máximo ${passwordMaxLen} characteres;`
        )
        .regex(/([a-zA-z])/g, "Deve conter ao menos 1 letra;")
        .regex(/([A-Z])/g, "Deve conter ao menos 1 letra maiúscula;")
        .regex(/([!,@,#,$,%,&,*])/g, "Deve conter carácter especial @!#$%&*;"),
      confirmPassword: z.string({
        errorMap: () => ({ message: "Campo obrigatório" }),
      }),
    })
    .superRefine(({ password, confirmPassword }, ctx) => {
      if (password !== confirmPassword) {
        ctx.addIssue({
          code: "custom",
          path: ["confirmPassword"],
          message: "As senhas devem ser iguais.",
        });
      }
    });
  type FormType = z.infer<typeof schema>;

  function onSubmit(form: FormType) {
    setLoading(true);
    makeLogin(form.email, form.password);

    setTimeout(() => {
      setLoading(false);

      //   setTimeout(() => {
      //     navigate(AppRoutes.CLASS_DASHBOARD);
      //   }, 500);
    }, 3000);
  }

  const formik = useFormik<FormType>({
    initialValues: {
      name: "John Doe",
      email: "jonhdoe@myclass.com",
      password: "John123456@",
      confirmPassword: "John123456@2",
    },
    onSubmit,
    validationSchema: toFormikValidationSchema(schema),
  });

  return (
    <div className="bg-light-100">
      <div className="w-full h-screen max-w-screen-cut mx-auto flex">
        <div className="w-full h-screen flex flex-col justify-center items-center ">
          <Link to={AppRoutes.HOME} className="mb-10 md:mb-20 lg:hidden">
            <img src={logoUrl} alt="" className="w-[300px]" />
          </Link>

          <form
            onSubmit={formik.handleSubmit}
            className="
            max-w-[500px] w-full flex flex-col justify-center items-center 
            rounded-xl py-6 px-10 shadow-2xl gap-2 bg-light-100
        "
          >
            <Text
              label="Nome"
              placeholder="Insira seu nome"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.errors.name}
            />

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
              showSegurity
              passwordSegurity={{
                minLen: passwordMinLen,
                maxLen: passwordMaxLen,
                haveLetter: true,
                haveSpecialCharacter: true,
                haveUppercase: true,
              }}
            />

            <Password
              label="Confirmar senha"
              placeholder="Insira sua senha"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={formik.errors.confirmPassword}
            />

            <p>
              Ao se registrar, você aceita nossos{" "}
              <Link className="font-bold" to={AppRoutes.TERMS_OF_USE}>
                termos de uso
              </Link>{" "}
              e a nossa{" "}
              <Link className="font-bold" to={AppRoutes.POLICY_PRIVACY}>
                política de privacidade
              </Link>
              .
            </p>

            <Button className="w-full" isLoading={loading} type="submit">
              Criar
            </Button>
          </form>
        </div>

        <div className="w-full h-screen hidden lg:flex flex-col gap-10 items-center justify-center">
          <div className="w-[400px] h-screen hidden lg:flex flex-col gap-10 items-start justify-center">
            <Link to={AppRoutes.HOME} className="">
              <img src={logoUrl} alt="" className="w-[300px]" />
            </Link>

            <h1 className="text-5xl font-bold">
              Mais de 600 mil devs já estão conectados.
            </h1>

            <p className="text-lg font-semibold">
              Junte-se a milhares de devs e acelere na direção dos seus
              objetivos
            </p>
            <Link to={AppRoutes.SIGN_IN} className="flex gap-2 items-center">
              <FaArrowLeft />
              Voltar para login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
