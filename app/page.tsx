import Representatives from "./components/representatives";
import SearchBar from "./components/searchBar";

export type Depute = {
  depute: {
    adresses: {
      adresse: string;
    }[];
    anciens_autres_mandats: any[];
    anciens_mandats: {
      mandat: string;
    }[];
    autres_mandats: any[];
    collaborateurs: {
      collaborateur: string;
    }[];
    date_naissance: string;
    emails: {
      email: string;
    }[];
    groupe_sigle: string;
    id: number;
    id_an: string;
    lieu_naissance: string;
    mandat_debut: string;
    nb_mandats: number;
    nom: string;
    nom_circo: string;
    nom_de_famille: string;
    num_circo: number;
    num_deptmt: string;
    parti_ratt_financier: string;
    place_en_hemicycle: string;
    prenom: string;
    profession: string;
    sexe: string;
    sites_web: {
      site: string;
    }[];
    slug: string;
    twitter: string;
    url_an: string;
    url_nosdeputes: string;
    url_nosdeputes_api: string;
  };
};

async function fetchRepresentative(): Promise<Depute[]> {
  try {
    const res = await fetch("https://www.nosdeputes.fr/deputes/json");
    if (!res.ok) throw new Error("Error while fetching");
    const data = await res.json();

    return data.deputes;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
export default async function App() {
  const representatives = await fetchRepresentative();
  return (
    <>
      <SearchBar />
      <h1>Les députés de la 15e législature:</h1>
      <Representatives representatives={representatives} />
    </>
  );
}
