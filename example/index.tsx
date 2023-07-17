import 'react-app-polyfill/ie11';
import * as React from 'react';
import { FC, useState, ReactNode, MouseEvent } from "react";
import "./App.css";
import * as ReactDOM from 'react-dom';
import { Modal } from '../src/Modal';


interface IButton {
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const Button: FC<IButton> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};


const App = () => {
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(false);
  const [modalButton, setModalButton] = useState(false);
  const [modalClickOutside, setModalClickOutside] = useState(false);
  const [modalCustom, setModalCustom] = useState(false);
  return (
    <>
      <div>
        <h2>Basic Modal:</h2>
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
      </div>
      <div>
        <h2>Modal with Title:</h2>
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
      </div>
      <div>
        <h2>Modal with button:</h2>
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
      </div>
      <div>
        <h2>Modal closed when click outside:</h2>
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
      </div>
      <div>
        <h2>Modal with Styled elements:</h2>
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
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
