# Project : NttFirst

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Mise en oeuvre:

* Démarrer le serveur : `npm run start`
* Build : `npm run build`
* Lancer le mock d'API REST : `npm run api`
* Générer la documentation : `npm run compodoc:build-and-serve`

## Project Scope:

> Projet éducatif dans le cadre d'une formation Angular.

## Fondamentaux Angular :

> Angular permet la structuration d'un projet d'apllication web, dans le but de préserver la simplicité du code.

Le concept central est le **Component** une unité de l'interface utilisateur encapsulant (HTML,CSS et JavaScript exprimé en TypeScript.)

**Angular offre 5 concepts fondamentaux**

* `@NgModule`     - Organisation du code (Angular).
  * `@Component`  - Unité de l'interface utilisateur.
  * `@Directive`  - Native ou personnalisées, enrichissant la vue (les composants).
  * `@Pipe`       - Règle de transformation avant présentation (affichage).
* `@Injectable`   - Aussi appelés services, pour le code logique non exclusif à la présentation.

**Décorateurs (Annotations)**

> Relation entre le code produit et Angular (compiler -> runtime)

*Il y a 19 décorateurs préfixé de `@`*

# Commandes utiles :

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
