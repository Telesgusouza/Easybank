import Image from "next/image";
import style from "./style.module.css";

import imgMoney from '../../../public/images/image-currency.jpg';
import ImgDinner from '../../../public/images/image-restaurant.jpg';
import imgPlane from '../../../public/images/image-plane.jpg';
import imga from '../../../public/images/image-confetti.jpg';

export default function LatestArticle() {
  return (
    <section className={style.container}>
      <div className="box">
        <h2>Artigo mais recente</h2>

        <ul className={style.containerOptions} >
          <li>
            <Image src={imgMoney} alt="foto" />
            <div>
              <span>Por Claire Robison</span>
              <h3>Receba dinheiro em qualquer moeda sem taxas</h3>
              <p>
                O mundo está ficando menor e estamos nos tornando mais móveis.
                Então, por que você deveria ser forçado a receber dinheiro
                apenas em um único …
              </p>
            </div>
          </li>

          <li>
            <Image src={ImgDinner} alt="foto" />
            <div>
              <span>Por Wilson Hutton</span>
              <h3>Mime-se sem se preocupar com dinheiro</h3>
              <p>
                Nosso recurso de orçamento simples permite que você separe seus
                gastos e defina limites realistas a cada mês. Isso significa que
                você…
              </p>
            </div>
          </li>

          <li>
            <Image src={imgPlane} alt="foto" />
            <div>
              <span>Por Wilson Hutton</span>
              <h3>Leve o seu cartão Easybank onde quer que vá</h3>
              <p>
                Queremos que você aproveite suas viagens. É por isso que não
                cobramos nenhuma taxa nas compras enquanto estiver no exterior.
                Vamos até mostrar…
              </p>
            </div>
          </li>

          <li>
            <Image src={imga} alt="foto" />
            <div>
              <span>Por Claire Robinson</span>
              <h3>
                Nossas contas Beta exclusivas para convidados já estão no ar!
              </h3>
              <p>
                Depois de muito trabalho de toda a equipe, estamos empolgados em
                lançar nosso beta fechado. É fácil solicitar um convite pelo
                site...
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
