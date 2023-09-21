import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalC from "./ModalC";
import "./Styles.css";

const ModalB = ({ show, handleClose, switchingModalsA }) => {
  const [USContacts, setUSContacts] = useState([]);
  const [showModalC, setShowModalC] = useState(false);
  const [contact, setContact] = useState({});

  const handleCloseModalC = () => setShowModalC(false);
  const handleShowModalC = (contact) => {
    setShowModalC(true);
    setContact(contact);
  };
  useEffect(() => {
    fetch(
      `https://contact.mediusware.com/api/country-contacts/${"United States"}/`
    )
      .then((response) => response.json())
      .then((data) => setUSContacts(data.results));
  }, []);
  console.log(USContacts);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal B</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {USContacts.map((contact) => (
            <ul key={contact.id} className="contacts">
              <li
                onClick={() => handleShowModalC(contact)}
                style={{ cursor: "pointer" }}
              >
                <strong className="font-weight-bold">ID-{contact?.id}: </strong>
                {contact?.phone}
              </li>
            </ul>
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
      <ModalC
        show={showModalC}
        handleClose={handleCloseModalC}
        contactDetails={contact}
      />
    </>
  );
};

export default ModalB;
