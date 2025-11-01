import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/covoiturages", "Covoiturages", "/pages/covoiturages.html"),
    new Route("/itineraires", "itineraires", "/pages/itineraires.html"),
    new Route("/leaDetail", "lea Detail", "/pages/Detail/leaDetail.html"),
    new Route("/alexDetail", "alex Detail", "/pages/Detail/alexDetail.html"),
    new Route("/jeffDetail", "jeff Detail", "/pages/Detail/jeffDetail.html"),
    new Route("/creationCompte", "création de Compte", "/pages/creationCompte.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Ecoride";