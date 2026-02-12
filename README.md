# Tic-tac-toe

Vous pouvez jouer au tic tac toe en sélectionnant "Choix du jeu" puis en sélectionnant un des 2 modes disponibles : "normal" et "personnalisé"

## How to play

Pour jouer, il vous suffit de cliquer sur l'écran dans les cases quand c'est votre tour.
Le joueur qui doit jouer est écrit en haut (soit 'croix', soit 'rond').
Sur le côté droit, vous pouvez voir l'historique des actions de la partie. Pas la peine d'essayer de cliquer sur les boutons quand une seule action a eu lieu.
Sur la droite, vous voyez le score de la partie : le nombre de partie (en utilisant le bouton "rejouer"), le nombre de victoire des croix et des ronds.
Quand vous terminez une partie, un message de victoire (ou d'égalité) s'affichera et vous aurez la possibilité de rejouer avec les mêmes paramètres.

## Normal mode

Le mode normal est un morpion classique, 3 ligne, 3 colonnes et 3 symboles à aligner pour gagner

## Personalised mode

Le mode personnalisé est simplement un mode où vous pouvez choisir le nombre de colonnes et de lignes (de 3 à 10).
Dans ce mode, vous pouvez également changer le nombre de symbole que nous devons aligner et le premier joueur (les croix par défaut).
Si vous le voulez, vous pouvez jouer au puissance 4, même si c'est un morpion.

# Explanation

## What techno I use

Pour le tic-tac-toe, j'ai utilisé la framework React, que je n'avais jamais utilisé auparavant.
Pour commencer le projet, j'ai utlisé la commande `npm create vite@latest projectName`, qui permet d'avoir un squelette utilisable pour le développement.
J'ai donc choisi les options React et TypeScript.
Je n'ai pas utilisé de back-end comme fortement conseillé dans le sujet.
J'ai utilisé l'IDE Visual Studio Code pour développer ce projet et parfois le très connu ChatGPT pour m'aider avec les techniques dont je n'avais pas connaissance.
Je n'ai pas utilisé de canard en plastique pour ce sujet même si j'aurais pu (dans `/src/assets/` et dans `/src/components/tile.tsx` en commentaires).

## What I learned

Dans ce projet, j'ai appris un nouveau langage/framework: le React. 
J'ai pu découvrir cette technologie et je vous en remercie.
Plus précisemment, j'ai notamment appris comment utiliser les routers, comment relier les classes / fonctions entre elles et comment créer des variables réactives. Ce projet a été réellement enrichissant.

# Exercise

J'ai décidé d'effectuer le travail demander en Python, qui est un langage que vous nous demandiez de maitriser dans votre offre.
Vous trouverez mes algorithmes python dans `/exercice.py` à la racine du projet.
J'ai déjà fourni des données de tests suffisantes pour vérifier les algos les plus compliqués.

## What I think of the QuickSort

L'algorithme du tri rapide est facile d'implémentation et rapide dans la plupart des cas. Il a une complexité temporelle bien inférieur aux algorithmes de tri classique.
Cependant, si le pivot n'est pas optimal, comme dans mon cas, il peut prendre du temps pour des listes qui sont déjà triées dans l'ordre croissant ou décroissant.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
