import React from "react";
import Title from "./title";
import AreaChart from "../area charts/Area Chart";

function Tableau_bord() {
  return (
    <div>
      <Title
        statitique="Statistique des annonces"
        title1={{
          name: "Total Annonce ajoutées",
          total: "255",
          time: "cette année",
        }}
        title2={{
          name: "Annonce ajoutées aujourd'hui",
          total: "23",
          time: "23/04/2021",
        }}
        title3={{
          name: "Total Annonce supprimées",
          total: "6",
          time: "cette année",
        }}
        title4={{
          name: "Annonce supprimées aujourd'hui",
          total: "2",
          time: "23/04/2021",
        }}
      />
      <div
        className="row"
        style={{ display: "flex", padding: "1%", margin: "0" }}
      >
        <div className="col-sm-4">
          <Title
            statitique="Statistique des utilisateurs"
            title1={{
              name: "Total des  utilisateurs inscrits",
              total: "352",
            }}
            title2={{
              name: "Utilsateurs inscrits aujourd'hui",
              total: "25",
            }}
            title3={{ name: "Total utilisateurs Banni", total: "7" }}
            title4={{ name: "Utilisateurs supprimé aujourd'hui", total: "5" }}
          />
        </div>
        <div className="col-sm-8">
          <AreaChart />
        </div>
      </div>
    </div>
  );
}

export default Tableau_bord;
