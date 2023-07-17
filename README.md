# Tech Stack :

- React 18.2.0
- Typescript 5.1.6

# Dependencies :

- styled-components 6.0.4

# Architecture

The Proton Design System components architecture is based on S.O.L.I.D principles abstracted to use them in modern React Typescript application.

# Code :

## The link to the Proton Design System package :

https://www.npmjs.com/package/@e-skibinska/proton-design-system

# Commands :

## CLI to generate documentation

npx typedoc --out docs src/main.tsx

# Doc :

# @e-skibinska/proton-design-systemIModal

Interface IModal

Defined in src/Modal.tsx:125

Properties:

```
interface IModal {

  children: ReactNode;

  onClick:
  | MouseEventHandler<HTMLButtonElement>
  | MouseEventHandler<HTMLDivElement>
  | any;

  className?: string;

  modalTitle?: string | boolean;

  isOpen?: boolean;

  clicOutsideToClose?: boolean;

  withButtonClose?: boolean;

  buttonText?: string;

  buttoncolor?: string;

  closebtncolor?: string;

  modaltitlecolor?: string;

  modaltextcolor?: string;
}

```

Defined in src/Modal.tsx:135
