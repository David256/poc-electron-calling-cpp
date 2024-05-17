# PoC Electron.js calling C++ functions

> This is a proof of concept. In this test, we try to pass two arrays of integers, and an integer
> value to a C++ function. The result will be shown in the window. In the console/terminal some
> log message should be printed.

## Developing

Just run:

```bash
bun install
bun run dev
```

Or with `npm`:

```bash
npm install
npm run dev
```

## Building

To create a production version of your app:

```bash
bun run build-cpp # the addons
bun run build # the svelte app
```

## Dist

```bash
bun run app:dist # for Linux (I think)
# or
bun run app:dist:windows # for Windows
```
