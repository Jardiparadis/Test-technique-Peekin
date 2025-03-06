# Description
Test technique pour Peek'in.  
Projet réalisé avec Vue.js, Vuetify, Pinia, Vue Router.  
Les graphiques sont réalisés grâce à Chartjs.

# Lancement de l'application
`npm i`   
puis  
`npm run dev`

# Lancement des tests
Les tests sont réalisés avec vue-test-utils et vitest  
`npm run test`

# Approche
La page a été pensée comme un dashboard: une grande grille composée de différents widgets,
représentée par le composant `Dashboard`.  
Ces widgets sont des composants Vuejs (trouvable dans `src/components`).
Ces derniers sont dépourvus de logique métier, et prennent donc leurs données via les props.  
Les données sont récupérées par le composant Dashboard depuis les stores, qu'il transmet aux widgets.  
Pour justifier l'utilisation des stores, ces deniers sont remplis depuis App, qui appelle des mocks de call API
simulant une latence de 2s, et qui renvoient les données qui rempliront les stores.

# Améliorations possibles
- Possibilité de déplacer les widgets, et potentiellement pouvoir y appliquer des filtres ou les customiser
- Mieux tester la partie création des graphiques
- Créer nos propres styles de graphiques pour coller au style visuel de l'entreprise
- Internationalisation (gestion de plusieurs langues, c'est actuellement "hard-codé" en français)
- Mieux mettre en valeur certaines statistiques "textuelles", comme la note moyenne.
