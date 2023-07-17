import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Modal } from '../src/Modal';

const App = () => {
  const colors = {
    black: '#000',
    white: '#fff',
    green: '#5A6E07',
    greenMedium: '#6E8510',
    greenClear: '#93AD17',
    greenSecondarySage: '#AAC8A7',
    greenSecondaryLime: '#E9FFC2',
    greenSecondaryYellow: '#FDFFAE',
    red: '#EF6262',
  };

  const [modal, setModal] = React.useState(false);
  return (
    <div>
      <button onClick={() => setModal(true)}>Classic modal</button>
      <Modal
        onClick={() => setModal(false)}
        isOpen={modal}
        className="modal"
        modalTitle="Création de l'employée"
        closebtncolor={colors.greenMedium}
        buttoncolor={colors.black}
        modaltitlecolor={colors.black}
        modaltextcolor={colors.green}
      >
        Employee Created!
      </Modal>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
