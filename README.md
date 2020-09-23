# Next.js TypeScript TailwindCSS

This is a really simple project that shows the usage of Next.js with TypeScript.

```bash
yarn
```

# Generate Config file for TailwindCSS

Once we have TailwindCSS installed in our project, we need to create or generate a tailwind.config.js file to get all the tailwind features.

```bash
npx tailwindcss init --full
```

## Notes

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
