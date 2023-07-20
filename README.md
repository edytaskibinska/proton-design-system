# Tech Stack :

- React 18.2.0
- Typescript 5.1.6

# Dependencies:

- styled-components 6.0.4

# Architecture:

The Proton Design System components architecture is based on S.O.L.I.D principles abstracted to use them in modern React Typescript application.

# Use examples:

Basic modal :

````
<Button
    onClick={(e) => {
    e.preventDefault();
    setModal(true);
    }}
>
    {" "}
    Basic Modal
</Button>
<Modal onClick={() => setModal(false)} isOpen={modal} className="modal">
    Lorem ipsum dolor sit amet, <br />
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. <br />
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut <br />
    aliquip ex ea commodo consequat.
</Modal>


````
Modal with title :


````
<Button
    onClick={(e) => {
    e.preventDefault();
    setModalTitle(true);
    }}
>
    {" "}
    Modal with Title
</Button>
<Modal
    onClick={() => setModalTitle(false)}
    isOpen={modalTitle}
    className="modal"
    modalTitle="Création de l'employée"
    modaltitlecolor="#000"
>
    Lorem ipsum dolor sit amet, <br />
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. <br />
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut <br />
    aliquip ex ea commodo consequat.
</Modal>

````
Modal with Title and button:


````
<Button
    onClick={(e) => {
    e.preventDefault();
    setModalButton(true);
    }}
>
    {" "}
    Modal with Title and button
</Button>
<Modal
    onClick={() => setModalButton(false)}
    isOpen={modalButton}
    className="modal"
    modalTitle="Création de l'employée"
    withButtonClose
    buttonText="Fermer"
    buttoncolor="#9A0680"
    modaltitlecolor="#4C0070"
>
    Lorem ipsum dolor sit amet, <br />
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. <br />
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut <br />
    aliquip ex ea commodo consequat.
</Modal>

````
Modal closed when click outside:


````
<Button
    onClick={(e) => {
    e.preventDefault();
    setModalClickOutside(true);
    }}
>
    {" "}
    Modal closed when click outside
</Button>
<Modal
    onClick={() => setModalClickOutside(false)}
    isOpen={modalClickOutside}
    className="modal"
    modalTitle="Création de l'employée"
    clicOutsideToClose
    buttoncolor="#9A0680"
    modaltitlecolor="#4C0070"
>
    Lorem ipsum dolor sit amet, <br />
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. <br />
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut <br />
    aliquip ex ea commodo consequat.
</Modal>

````
Modal with Styled Elements


````
<Button
    onClick={(e) => {
    e.preventDefault();
    setModalCustom(true);
    }}
>
    {" "}
    Modal with Styled Elements
</Button>
<Modal
    onClick={() => setModalCustom(false)}
    isOpen={modalCustom}
    className="modal"
    modalTitle="Création de l'employée"
    withButtonClose
    buttonText="Fermer"
    closebtncolor="#79018C"
    buttoncolor="#9A0680"
    modaltitlecolor="#4C0070"
    modaltextcolor="#8CA1A5"
>
    Lorem ipsum dolor sit amet, <br />
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. <br />
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut <br />
    aliquip ex ea commodo consequat.
</Modal>


````

## Codesandbox demo :

https://codesandbox.io/p/sandbox/proton-design-modal-882dtf?file=%2Fsrc%2FApp.tsx%3A63%2C10

## The link to the Proton Design System package :

https://www.npmjs.com/package/@e-skibinska/proton-design-system

# The documentation of the Proton Design System Modal :

https://edytaskibinska.github.io/proton-design-modal-doc/

# Codesandbox demo :

https://codesandbox.io/p/sandbox/proton-design-modal-882dtf?file=%2Fsrc%2FApp.tsx%3A63%2C10

## Cli commands for project:

Make sure that you have the last version of Proton Design System modules:

```
npm i @e-skibinska/proton-design-system
```

Development :

```
npm run dev
```

Build :

```
npm run build
```

Typescript check CLI :

```
tsc
```

## CLI to generate documentation

```
npx typedoc --out docs src/main.tsx
```

## CLI to publish

```
npm publish --access public
```
