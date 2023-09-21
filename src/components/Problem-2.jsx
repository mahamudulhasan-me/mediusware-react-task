import React, { useEffect, useState } from "react";
import ModalA from "./Modals/ModalA";
import ModalB from "./Modals/ModalB";
const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [contacts, setContacts] = useState([]);

  const handleShowModalA = () => setShowModalA(true);
  const handleShowModalB = () => setShowModalB(true);
  const handleCloseModalA = () => setShowModalA(false);
  const handleCloseModalB = () => setShowModalB(false);

  const switchingModalsB = () => {
    setShowModalA(false);
    setShowModalB(true);
  };
  const switchingModalsA = () => {
    setShowModalA(true);
    setShowModalB(false);
  };

  useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/")
      .then((response) => response.json())
      .then((data) => setContacts(data.results));
  }, []);

  const USContacts = contacts.filter(
    (contact) => contact.country?.name === "United States"
  );
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              onClick={handleShowModalA}
              className="btn btn-lg btn-outline-primary"
              type="button"
            >
              All Contacts
            </button>
            <button
              onClick={handleShowModalB}
              className="btn btn-lg btn-outline-warning"
              type="button"
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>{" "}
      <ModalA
        show={showModalA}
        handleClose={handleCloseModalA}
        switchingModalsB={switchingModalsB}
        contacts={contacts}
      />
      <ModalB
        show={showModalB}
        handleClose={handleCloseModalB}
        switchingModalsA={switchingModalsA}
        USContacts={USContacts}
      />
    </>
  );
};

export default Problem2;
