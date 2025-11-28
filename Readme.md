contient des informations sur mon site

# Ecoride

Ceci est une plateforme de covoiturage en ligne.

 ## Démarche pour déployer l'application en local 

### Étapes préalables  

* Assurez-vous d'avoir Node.js 22.19.0 qui est la version compatible avec le projet et npm version 10.9.3 installés sur votre système 
* Cloner le repository Git à l'aide de la commande: 
`git clone https://github.com/Rabanti/Ecoride1.git`  
git status
## Installation des dépendances  

* Exécutez la commande `npm install` pour installer les dépendances nécessaires  

## Lancement de l'application  

* Exécutez la commande `npm start` pour lancer l'application  
* Ouvrez un navigateur et accédez à l'adresse `http://localhost:3000` pour voir l'application en action  

## Configuration
* J’ai configuré mon environnement de travail en installant Node.js (Installer via le lien officielle) et Bootstrap (en ligne de commande) :

Etapes d'installations de chacun d'eux: 
-Bootstrap: 
1.	Je tape sur le terminal “npm ” pour vérifier si le programme existe dans le pc
2.	Je vois que le programme est existant
3.	Je tape “npm install bootstrap” ce qui va créer un projet npm qui est la création d’un dossier “node_modules” qui lui télécharges les dépendances de Bootstrap.
4.	Je vérifie en ouvrant “node_modules”, un dossier Bootstrap avec toute la source de Bootstrap a été créer.


## Dépannage  

* Si vous rencontrez des problèmes lors du lancement de l'application, consultez les journaux pour obtenir plus d'informations  
* Si vous avez des questions ou des problèmes, n'hésitez pas à contacter l'équipe de développement

##  Installation Dockerfile node.js
 
# Utilise l'image officielle Node dans la bonne version
FROM node:22.19.0

# Définit le dossier de travail dans le conteneur
WORKDIR /ECORIDE

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances du projet
RUN npm install

# Copie tout le code de l'application
COPY . .

# Expose le port sur lequel tourne ton application
EXPOSE 3307

# Commande de démarrage
CMD ["npm", "start"]
