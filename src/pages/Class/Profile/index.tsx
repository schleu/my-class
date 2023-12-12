import { Text } from "../../../components/Input";
import { Section } from "../../../components/Section";
import { ModalProfile } from "./Modal";

export function ProfilePage() {
  return (
    <Section title="Perfil">
      <div className="w-full max-w-[1000px] flex flex-col gap-10">
        <ModalProfile title="Dados Pessoais">
          <div className="w-full flex gap-10">
            <Text name="firstName" label="Primeiro nome" />
            <Text name="lastName" label="Último Nome" />
          </div>
          <Text name="email" label="Email" />
          <Text name="phone" label="Telefone" />
        </ModalProfile>

        <ModalProfile title="Endereço">
          <Text name="street" label="Rua" />
          <div className="w-full flex gap-10">
            <Text name="postcode" label="CEP" />
            <Text name="city" label="Cidade" />
            <Text name="number" label="Numero" />
          </div>
          <div className="w-full flex gap-10">
            <Text name="state" label="Estado" />
            <Text name="country" label="País" />
          </div>
        </ModalProfile>
      </div>
    </Section>
  );
}
