import { Representative } from "@/type/representative";
import React from "react";

export default function Representatives({ representatives, search }:{ representatives:any[], search:string }) {
  return (
    <>
      <main className="rep-container">
        {representatives
          .filter((elu) => {
            //we filter the api response to only display the representatives cards that meet certain characteristics
            if (search === "") {
              return elu;
            } else if (
              elu.depute.groupe_sigle.toLowerCase() === search.toLowerCase()
            ) {
              return elu;
            } else if (
              elu.depute.nom.toLowerCase().includes(search.toLowerCase())
            ) {
              return elu;
            } else if (elu.depute.num_deptmt === search) {
              return elu;
            } else if (
              elu.depute.nom_circo.toLowerCase() === search.toLowerCase()
            ) {
              return elu;
            }
          })
          .map((elu) => (
            <article className="rep-card" key={elu.depute.id}>
              <header className="rep-header">
                <div className="identite">
                  <h3 className="nom">
                    <a href={elu.depute.url_an} target="blank">
                      {elu.depute.nom}
                    </a>
                  </h3>
                  <h5 className="birth">
                    {String(elu.depute.date_naissance).slice(0, 4)}
                  </h5>
                </div>
                <div className="parti-politique">
                  <h4 className={elu.depute.groupe_sigle}>
                    {elu.depute.groupe_sigle}
                  </h4>
                </div>
              </header>
              <div className="profile-pic">
                <img
                  className="profile-pic"
                  src={`https://www.nosdeputes.fr/depute/photo/${elu.depute.prenom.toLowerCase()}-${
                    elu.depute.nom_de_famille
                  }/1000`}
                  alt="profil du député"
                />
              </div>
              <footer className="rep-footer">
                <div className="localisation">
                  <h4 className="nom-circo">
                    {elu.depute.nom_circo}
                    <h5>{elu.depute.num_deptmt}</h5>
                  </h4>
                  <h5 className="num-circo">Circo n°{elu.depute.num_circo}</h5>
                </div>
                <div className="lien-site">
                  <a
                    href={`https://twitter.com/${elu.depute.twitter}`}
                    target="_blank"
                  >{`@${elu.depute.twitter.toLowerCase()}`}</a>
                </div>
              </footer>
            </article>
          ))}
      </main>
    </>
  );
}
