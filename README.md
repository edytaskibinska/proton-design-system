# About The Project

The Proton Design System components architecture is based on S.O.L.I.D principles abstracted to use them in modern React based applications.
It's a set of reusable React Typescript components easy to use and custom.

# Built With
- React 18.2.0
- Typescript 5.0.2

# Dependencies:
- styled-components 6.0.4

# Installation:
In your React root application run 
```
npm install
```

To have tha last version of packages please run:
```
npm update
```

Install Proton Design System modules:
```
npm i @e-skibinska/proton-design-system
```

Import modules into your app, example : 
```
import { Modal } from "@e-skibinska/proton-design-system";

```

Then implement : 
```
<Modal onClick={() => setModal(false)} isOpen={modal} className="modal">
    My modal text.
</Modal>
```

If needed you can run the tpescript checker : 
```
tsc
```


# Usage :

## Codesandbox demo :

https://codesandbox.io/p/sandbox/proton-design-modal-882dtf?file=%2Fsrc%2FApp.tsx%3A63%2C10


# Useful links:

## The link to the Proton Design System package :

https://www.npmjs.com/package/@e-skibinska/proton-design-system

## The documentation of the Proton Design System Modal :

https://edytaskibinska.github.io/proton-design-modal-doc/








##### CLI to generate documentation

```
npx typedoc --out docs src/main.tsx
```

## CLI to publish

```
npm publish --access public
```
