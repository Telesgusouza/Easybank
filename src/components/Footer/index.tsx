import style from "./style.module.css";
import Image from "next/image";

import logoImg from "../../../public/images/logoWhite.svg";

import Facebook from "../Svg/Facebook";
import Instagram from "../Svg/Instagram";
import Twitter from "../Svg/Twitter";
import Pinterest from "../Svg/Pinterest";
import Youtube from "../Svg/Youtube";
import Button from "../Button";

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className="box">
        <section className={style.containerLeft}>
          <div>
            <Image src={logoImg} alt="logo do site" />
            <ul className={style.socialMidia}>
              <li>
                <Facebook />
              </li>
              <li>
                <Youtube />
              </li>
              <li>
                <Twitter />
              </li>
              <li>
                <Pinterest />
              </li>
              <li>
                <Instagram />
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Sobre nós</li>
              <li>Contatos</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>carreiras</li>
              <li>Suporte</li>
              <li>Política de Privacidade</li>
            </ul>
          </div>
        </section>

        <section className={style.containerRight}>
          <Button>Solicitar convite</Button>

          <span>&copy; Easybank. Todos os direitos reservados</span>
        </section>
      </div>
    </footer>
  );
}
