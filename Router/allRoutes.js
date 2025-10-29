import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/covoiturages", "Covoiturages", "/pages/covoiturages.html"),
    new Route("/itineraires", "Itineraires", "/pages/itineraires.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Ecoride";