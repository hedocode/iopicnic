# Iopicnic
Ionic app for hiking and picnicking

Application ionic pour faire de la randonnée et des pic-nic



![](demo.png)



## Usage

Pour lancer le projet, se déplacer dans le dossier start avec `cd start` puis taper la commande  `ionic serve --devapp`  en ayant node 12 (npm>6)



## Bilan

Je matrise désormais l'architecture globale d'un projet ionic, la notion de modules, pages, composants et même pipes afin d'afficher les unités du compteur avec un zéro devant (e.g. sous la forme 01:02:03 et non 1:2:3)

 J'ai pu réaliser toutes les pages demandées avec la plupart des fonctionnalitées demandées. J'ai juste rencontrer des problèmes avec leaflet et leaflet routing machine, d'ailleurs si la carte refuse de s'afficher ou l'itinéraire de se tracer, n'hésitez pas à rafraichir la page. 

Je ne suis pas parvenu à enlever les anciens marqueurs et celui de la dernière étape refuse de s'afficher aussi pour une raison qui m'est étrange (il est censé trouver les coordonnées du dernier marqueur car la valeur de step est la bonne :thinking:)

Cependant les étapes défilent bien comme souhaité avec comme première étape prédéfinie de se rendre au début de la randonnée.



PS: Le CSS tout comme l'intégralité du projet est entièrement fait par moi même et responsive :smile:

PS2: J'ai eu beaucoup de mal à comprendre les erreurs qui se présentait dans la console, elle n'étaient quasiment jamais explicites