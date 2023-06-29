import Image from "next/image";
import style from "./styles.module.css";

import logoImg from "../../../public/images/logo.svg";
import menuClosed from "../../../public/images/icon-hamburger.svg";
import menuopen from "../../../public/images/icon-close.svg";
import React, { useState } from "react";
import Button from "../Button";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  function handleToggleMenu(e: React.ChangeEvent<HTMLInputElement>) {
    setToggleMenu(e.target.checked);
  }

  return (
    <header className={style.headerContainer}>
      <div className={style.header + " box"}>
        <div>
          <Image src={logoImg} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              Home
              <div className={style.navbarToggle}></div>
            </li>

            <li>
              Sobre
              <div className={style.navbarToggle}></div>
            </li>

            <li>
              Contato
              <div className={style.navbarToggle}></div>
            </li>
            <li>
              Blob
              <div className={style.navbarToggle}></div>
            </li>
            <li>
              Carreiras
              <div className={style.navbarToggle}></div>
            </li>
          </ul>
        </nav>

        <Button>Solicitar Convite</Button>

        <menu className={style.containerMenuMobile}>
          <div className={style.containerToggleMenu}>
            <Image src={toggleMenu ? menuopen : menuClosed} alt="mudar menu" />

            <input type="checkbox" onChange={(e) => handleToggleMenu(e)} />
          </div>

          {toggleMenu && (
            <div className={style.optionsMenu}>
              <div>
                <ul>
                  <li>Home</li>
                  <li>Sobre</li>
                  <li>Contato</li>
                  <li>Blog</li>
                  <li>Carreira</li>
                </ul>
              </div>
            </div>
          )}
        </menu>
      </div>
    </header>
  );
}
