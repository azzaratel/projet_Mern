import React from "react";

import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
function Home() {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/photos-gratuite/choque-jolie-femme-posant-apres-shopping_197531-16460.jpg?w=740&t=st=1689336324~exp=1689336924~hmac=3c44735bc92c7f0e6ac89f4c094ebbb1dfd72b1cb525196851afbfeae6cd9699"
              alt="First slide"
              style={{ height: "1000px" }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/photos-gratuite/assortiment-elements-du-vendredi-noir_23-2149074076.jpg?w=826&t=st=1689336432~exp=1689337032~hmac=03307cc408f92b8f1bcd9c110d7cbce8ce570fbeb40cee372627d8f783a497b7"
              alt="Second slide"
              style={{ height: "1000px" }}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h1 className="h11"> Our services</h1>
        <div className="ga">
          <div className="wrapper">
            <div className="cols">
              <div
                className="col"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div className="container">
                  <div
                    className="front"
                    style={{
                      backgroundImage:
                        "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTM05qTvFgQCpj55VCxL3xywgOKMzGegyFDsT3Sp79h0YMcGXdw3nwBzsuO93Ow44HbEk&usqp=CAU)",
                    }}
                  >
                    <div className="inner2">
                      <p>Produits Cosmétiques</p>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner22"></div>
                  </div>
                </div>
              </div>
              <div
                className="col"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div className="container">
                  <div
                    className="front"
                    style={{
                      backgroundImage:
                        "url(https://t3.ftcdn.net/jpg/02/12/63/96/240_F_212639674_94RhRUJI8fnhndG1Xww17EHeANcIkhFj.jpg?fbclid=IwAR0ulQMW9kvGhVnjfw5nEX_sKIpDKoa9gILpB1fZl8HNLIjO1xgxKnIiUPs)",
                    }}
                  >
                    <div className="inner2">
                      <p>Produits électroménagere</p>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner2"></div>
                  </div>
                </div>
              </div>
              <div
                className="col"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div className="container">
                  <div
                    className="front"
                    style={{
                      backgroundImage:
                        "url(https://as1.ftcdn.net/v2/jpg/04/22/46/66/1000_F_422466688_T0OhZyKSBT3qlFfAi0tsNQyqq1QL3Y0M.jpg?fbclid=IwAR1qdDpW9dlKWaEc_XRj2D9bBWEz6KegERhGHUj4QTyT31Wcj9zhyK29vgo)",
                    }}
                  >
                    <div className="inner2">
                      <p>Produits alimentaire</p>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="articles">
        <article>
          <div className="article-wrapper">
            <figure>
              <img
                style={{
                  maxWidth: "100%",
                  minWidth: "100%",
                  maxHeight: "100%",
                  minHeight: "100%",
                }}
                src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/1937/1.jpg?2710"
                alt=""
              />
            </figure>
            <div className="article-body">
              <h2>
                Florence Machine café à capsule Nespresso -1400 W 800 ml -Rouge
              </h2>
              <p>
                un café sensationnel à chaque tasse avec la machine Florence
                capsules Nespresso Qualité professionnelle à la maison : La
                machine florence CN-1400GO Coffee est la machine idéale pour les
                amateurs de café
              </p>
              <a href="#" className="read-more">
                Read more{" "}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>

        <article>
          <div className="article-wrapper">
            <figure>
              <img
                style={{
                  maxWidth: "100%",
                  minWidth: "100%",
                  maxHeight: "100%",
                  minHeight: "100%",
                }}
                src="https://cosmetique.tn/16967-large_default/pack-ecran-solaire-blur-spf50-brume-uriage-spf50-huile-seche-spf50-gelee-moussante-physiopure-55ml-gratuit-svr.jpg"
                alt=""
              />
            </figure>
            <div className="article-body">
              <h2>
                Pack Ecran solaire blur spf50+ & brume uriage spf50+ & huile
                sèche spf50 & Gelée moussante Physiopure 55ml Gratuit - SVR
              </h2>
              <p>
                L'écran SVR SUN SECURE Blur est l’association parfaite d’une
                haute protection solaire SPF50 et d’une crème mousse, qui unifie
                le teint, floute les imperfections, et donne à la peaux un
                aspect veloutée.{" "}
              </p>
              <a href="#" className="read-more">
                Read more{" "}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img
                style={{
                  maxWidth: "100%",
                  minWidth: "100%",
                  maxHeight: "100%",
                  minHeight: "100%",
                }}
                src="https://cosmetique.tn/16978-large_default/pack-aloha-summer-bag-inoderma.jpg"
                alt=""
              />
            </figure>
            <div className="article-body">
              <h2>Pack aloha summer bag - inoderma</h2>
              <p>
                ALOHA BY INODERMA Huile au Monoï de Tahiti Pailletée PINK 100ML
                : Aloha est une huile au Monoï de Tahiti d’origine Polynésienne,
                obtenue grâce à la macération de fleurs de Tiaré dans l’huile de
                noix de coco. Dotée d’un parfum doux et envoûtant, Aloha est
                appréciée pour ses vertus hydratantes, adoucissantes et
                assouplissantes.{" "}
              </p>
              <a href="#" className="read-more">
                Read more{" "}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>

        <article>
          <div className="article-wrapper">
            <figure>
              <img
                style={{
                  maxWidth: "100%",
                  minWidth: "100%",
                  maxHeight: "100%",
                  minHeight: "100%",
                }}
                src="https://scontent.ftun14-1.fna.fbcdn.net/v/t1.6435-9/160954188_142321674441676_7101534555203526594_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=u76CS4f9lIoAX_mpoF_&_nc_ht=scontent.ftun14-1.fna&oh=00_AfD8N7WDM6xiVWRk1tWiShmuWIeAzxdfNN2WOENfuvUgMQ&oe=64E3365D"
                alt=""
              />
            </figure>
            <div className="article-body">
              <h2>
                Coffret ecran solaire teinté beige eclat spf50 + phytovera gel
                apaisant gratuit -phyteal-
              </h2>
              <p>
                PHYTEAL ECRAN TEINTE BEIGE ECLAT SPF 50, 50 ML Tube de 50 ml.
                Protection solaire, fond de teint à fort pouvoir couvrant et
                soin hydratant.
              </p>
              <a href="#" className="read-more">
                Read more{" "}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img
                style={{
                  maxWidth: "100%",
                  minWidth: "100%",
                  maxHeight: "100%",
                  minHeight: "100%",
                }}
                src="https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/h/k/hk12-frozen_176_1.jpg"
                alt=""
              />
            </figure>
            <div className="article-body">
              <h2>
                MINI HACHOIR PREMIUM EDITION SWISSCOOK BL-2096 150W - ROUGE
              </h2>
              <p>
                Mini Hachoir Premium Edition SWISSCOOK - Puissance: 150 Watts -
                Capacité du bol: 375 ml - Voltage: 230 - 2 lames en acier
                inoxydable - Matériau du revêtement: Plastic - Démontage facile
                - Réglages - Fermeture avec système de sécurité - Couvercle avec
                ouverture de remplissage - Couleur: Rouge - Garantie: 1 an
              </p>
              <a href="#" className="read-more">
                Read more{" "}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img
                style={{
                  maxWidth: "100%",
                  minWidth: "100%",
                  maxHeight: "100%",
                  minHeight: "100%",
                }}
                src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/8296/1.jpg?5428"
                alt=""
              />
            </figure>
            <div className="article-body">
              <h2>
                {" "}
                Ferrero Rocher Fines gaufrettes chocolat lait et noisettes -30
                pièces
              </h2>
              <p>
                Ferrero Rocher sublime vos fêtes, et vos moments de partages
                privilégiés en y apportant une touche magique, raffinée et
                gourmande. FERRERO ROCHER : Fines gaufrettes enrobées de
                chocolat au lait et noisettes broyées et fourrées noisette{" "}
              </p>
              <a href="#" className="read-more">
                Read more{" "}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Home;
