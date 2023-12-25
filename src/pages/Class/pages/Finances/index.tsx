import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { Text } from "../../../../components/Input/Text";
import { Section } from "../../../../components/Section";

import CreditCard from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Button } from "../../../../components/Button";
import { useLogin } from "../../../../hooks/useLogin";
import { ModalForm } from "../../components/ModalForm";

export function FinancesPage() {
  const { user } = useLogin();

  const messageRequired = {
    errorMap: () => ({ message: "Campo obrigatório" }),
  };

  const schemaCard = z.object({
    name: z.string(messageRequired),
    number: z.string(messageRequired),
    expire: z.string(messageRequired),
    cvc: z.string(messageRequired),
    save: z.boolean().nullable(),
  });

  const schemaBillingAddres = z.object({
    name: z.string(messageRequired),
    phone: z.string(messageRequired),
    address: z.string(messageRequired),
    zipCode: z.string(messageRequired),
    state: z.string(messageRequired),
    country: z.string(messageRequired),
  });
  const schema = z.object({
    schemaCard,
    schemaBillingAddres,
  });

  type FormType = z.infer<typeof schema>;

  function onSubmit(form: FormType) {
    console.info(form);
  }

  const formik = useFormik<FormType>({
    initialValues: {
      schemaCard: {
        name: user?.fullName,
        cvc: "123",
        expire: "1230",
        number: "4100000000000000",
        save: false,
      },
      schemaBillingAddres: {
        address: user?.location?.street.name,
        zipCode: String(user?.location?.postcode),
        name: user?.fullName,
        phone: user?.phone,
        state: user?.location?.state,
        country: user?.location?.country,
      },
    } as FormType,
    onSubmit,
    validationSchema: toFormikValidationSchema(schema),
  });

  return (
    <Section title="Finanças">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-[1000px] flex flex-col gap-10"
      >
        <ModalForm title="Dados">
          <div className="w-full flex flex-wrap md:flex-nowrap gap-10">
            <CreditCard
              acceptedCards={["visa", "mastercard"]}
              name={formik.values.schemaCard.name}
              cvc={formik.values.schemaCard.cvc}
              number={formik.values.schemaCard.number}
              expiry={formik.values.schemaCard.expire}
            />

            <div className="flex-1">
              <Text
                name="schemaCard.name"
                label="Nome do próprietário"
                onChange={formik.handleChange}
                value={formik.values.schemaCard.name}
                error={formik.errors.schemaCard?.name}
              />

              <div className="w-full flex flex-wrap md:flex-nowrap gap-10">
                <Text
                  name="schemaCard.number"
                  label="Número do cartão"
                  onChange={formik.handleChange}
                  value={formik.values.schemaCard.number}
                  error={formik.errors.schemaCard?.number}
                  mask={"9999 9999 9999 9999"}
                />
                <div className="w-full flex flex-wrap md:flex-nowrap gap-10">
                  <Text
                    name="schemaCard.expire"
                    label="Data"
                    onChange={formik.handleChange}
                    value={formik.values.schemaCard.expire}
                    error={formik.errors.schemaCard?.expire}
                    mask={"99 / 99"}
                    className="w-28"
                  />
                  <Text
                    name="schemaCard.cvc"
                    label="CVC"
                    onChange={formik.handleChange}
                    value={formik.values.schemaCard.cvc}
                    error={formik.errors.schemaCard?.cvc}
                    mask={"999"}
                    className="w-28"
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalForm>

        <ModalForm title="Endereço de Cobrança">
          <Text
            name="name"
            label="Nome"
            onChange={formik.handleChange}
            value={formik.values.schemaBillingAddres.name}
            error={formik.errors.schemaBillingAddres?.name}
          />

          <div className="w-full flex flex-wrap md:flex-nowrap gap-10">
            <Text
              name="schemaBillingAddres.zipCode"
              label="CEP"
              onChange={formik.handleChange}
              value={formik.values.schemaBillingAddres.zipCode}
              error={formik.errors.schemaBillingAddres?.zipCode}
              mask={"99999-999"}
            />

            <Text
              name="schemaBillingAddres.phone"
              label="Telefone"
              onChange={formik.handleChange}
              value={formik.values.schemaBillingAddres.phone}
              error={formik.errors.schemaBillingAddres?.phone}
              mask={"(99) 99999-9999"}
            />
          </div>

          <Text
            name="address"
            label="Rua"
            onChange={formik.handleChange}
            value={formik.values.schemaBillingAddres.address}
            error={formik.errors.schemaBillingAddres?.address}
          />

          <div className="w-full flex flex-wrap md:flex-nowrap gap-10">
            <Text
              name="schemaBillingAddres.state"
              label="Estado"
              onChange={formik.handleChange}
              value={formik.values.schemaBillingAddres.state}
              error={formik.errors.schemaBillingAddres?.state}
            />
            <Text
              name="schemaBillingAddres.country"
              label="País"
              onChange={formik.handleChange}
              value={formik.values.schemaBillingAddres.country}
              error={formik.errors.schemaBillingAddres?.country}
            />
          </div>
        </ModalForm>

        <Button type="submit">Salvar</Button>
      </form>
    </Section>
  );
}
