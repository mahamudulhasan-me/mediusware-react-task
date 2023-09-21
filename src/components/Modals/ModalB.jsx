import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalB = ({ show, handleClose, switchingModalsA, USContacts }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal B</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {USContacts.map((contact) => (
          <div key={contact.id}>{contact.phone}</div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={switchingModalsA}>
          All Contacts
        </Button>
        <Button style={{ backgroundColor: "#ff7f50" }} variant="secondary">
          US Contacts
        </Button>
        <Button
          style={{
            backgroundColor: "#ffff",
            borderColor: "#46139f",
            color: "#000000",
          }}
          variant="secondary"
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalB;
