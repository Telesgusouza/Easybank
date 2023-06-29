import style from "./style.module.css";

import desktopBgImg from "../../../public/images/bg-intro-desktop.svg";
import mobileBgImg from "../../../public/images/bg-intro-mobile.svg";

import phoneImg from "../../../public/images/image-mockups.png";
import Image from "next/image";
import Button from "../Button";

export default function Main() {
  return (
    <main className={style.containerMain}>
      <div className={style.container + " box"}>
        <section className={style.containerRight}>
          <Image src={phoneImg} alt="" />
        </section>

        <section className={style.containerLeft}>
          <article>
            <h1>Banca digital de última geração</h1>
            <p>
              Leve sua vida financeira online. Sua conta Easybank será um balcão
              único para gastar, economizar, orçar, investir e muito mais.
            </p>
            <Button>Solicitar convite</Button>
          </article>
        </section>
      </div>
    </main>
  );
}
