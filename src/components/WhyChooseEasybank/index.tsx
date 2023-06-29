import Image from "next/image";
import style from "./style.module.css";

import bankingImg from "../../../public/images/icon-online.svg";
import budgetingImg from "../../../public/images/icon-budgeting.svg";
import imgOnboarding from "../../../public/images/icon-onboarding.svg";
import imgApi from "../../../public/images/icon-api.svg";

export default function WhyChooseEasybank() {
  return (
    <section className={style.container}>
      <div className={style.maxBox}>
        <article className={style.contentMain}>
          <h2>Por que escolher Easybank?</h2>
          <p>
            Aproveitamos o Open Banking para transformar sua conta bancária em
            seu centro financeiro. Ao controle suas finanças como nunca antes.
          </p>
        </article>

        <ul className={style.containerOptions}>
          <li>
            <Image src={bankingImg} alt="logo" />
            <h3>Banco online</h3>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </li>

          <li>
            <Image src={budgetingImg} alt="logo" />
            <h3>Orçamento Simples</h3>
            <p>
              Veja exatamente para onde vai o seu dinheiro todos os meses.
              Receba notificações quando estiver perto de atingir seus limites.
            </p>
          </li>

          <li>
            <Image src={imgOnboarding} alt="logo" />
            <h3>Integração rápida</h3>
            <p>
              Não fazemos filiais. Abra sua conta online em minutos e comece a
              assumir o controle de suas finanças imediatamente.
            </p>
          </li>

          <li>
            <Image src={imgApi} alt="logo" />
            <h3>API aberta</h3>
            <p>
              Gerencie suas economias, investimentos, pensões e muito mais de
              uma conta. Monitorando seu dinheiro nunca foi tão fácil.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
