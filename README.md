# static-kalliope

We keep the <head> in each html file for SEO reasons.

## Tailwind CSS

Tailwind utilities are compiled to `tailwind.css` for production. Run `npm ci` from the repository root to install dependencies. Before committing, run `make pre-commit`; it formats the project with Prettier and then rebuilds `tailwind.css`. Include the generated stylesheet when you commit and deploy changes. To build the stylesheet manually, run `npm run build:css`.
