import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { Text } from "../../../../components/Input/Text";
import { Section } from "../../../../components/Section";
import { Button } from "../../../../components/Button";
import { useLogin } from "../../../../hooks/useLogin";
import { ModalForm } from "../../components/ModalForm";

export function ProfilePage() {
  const { user } = useLogin();

  const messageRequired = {
    errorMap: () => ({ message: "Campo obrigatório" }),
  };

  const schema = z.object({
    firstName: z.string(messageRequired),
    lastName: z.string(messageRequired),
    email: z.string(messageRequired).email("Email inválido"),
    phone: z.string(messageRequired),
    street: z.string(messageRequired),
    postcode: z.string(messageRequired),
    city: z.string(messageRequired),
    number: z.string(messageRequired),
    state: z.string(messageRequired),
    country: z.string(messageRequired),
  });

  type FormType = z.infer<typeof schema>;

  function onSubmit(form: FormType) {
    console.info(form);
  }

  const formik = useFormik<FormType>({
    initialValues: {
      ...user,
      street: user?.location?.street.name,
      number: String(user?.location?.street.number),
      postcode: String(user?.location?.postcode),
      city: user?.location?.city,
      state: user?.location?.state,
      country: user?.location?.country,
    } as FormType,
    onSubmit,
    validationSchema: toFormikValidationSchema(schema),
  });

  return (
    <Section title="Perfil">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-[1000px] flex flex-col gap-10"
      >
        <ModalForm title="Dados Pessoais">
          <div className="w-full flex flex-wrap md:flex-nowrap gap-10">
            <Text
              name="firstName"
              label="Primeiro nome"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              error={formik.errors.firstName}
            />
            <Text
              name="lastName"
              label="Último Nome"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={formik.errors.lastName}
            />
          </div>
          <Text
            name="email"
            label="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
          />
          <Text
            name="phone"
            label="Telefone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            error={formik.errors.phone}
            mask={"(99) 99999-9999"}
          />
        </ModalForm>

        <ModalForm title="Endereço">
          <Text
            name="street"
            label="Rua"
            onChange={formik.handleChange}
            value={formik.values.street}
            error={formik.errors.street}
          />
          <div className="w-full flex flex-wrap md:flex-nowrap gap-10">
            <Text
              name="postcode"
              label="CEP"
              onChange={formik.handleChange}
              value={formik.values.postcode}
              error={formik.errors.postcode}
              mask={"99999-9999"}
            />
            <Text
              name="city"
              label="Cidade"
              onChange={formik.handleChange}
              value={formik.values.city}
              error={formik.errors.city}
            />
            <Text
              name="number"
              label="Numero"
              onChange={formik.handleChange}
              value={formik.values.number}
              error={formik.errors.number}
            />
          </div>
          <div className="w-full flex flex-wrap md:flex-nowrap gap-10">
            <Text
              name="state"
              label="Estado"
              onChange={formik.handleChange}
              value={formik.values.state}
              error={formik.errors.state}
            />
            <Text
              name="country"
              label="País"
              onChange={formik.handleChange}
              value={formik.values.country}
              error={formik.errors.country}
            />
          </div>
        </ModalForm>

        <Button type="submit">Salvar</Button>
      </form>
    </Section>
  );
}
