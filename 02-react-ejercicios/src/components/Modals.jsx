import { useState } from "react";
import Modal from "./Modal";
import ContactForm from "./ContactForm";
import SongSearch from "./SongSearch";
import { useModal } from "../hooks/useModal";
import ModalPortal from "./ModalPortal";

function Modals() {
  const [isOpenModal1, openModal1, closeModal1] = useModal(true);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openContact, closeContact] = useModal(false);
  const [isOpenSong, openSong, closeSong] = useModal(false);
  const [isOpenPortal, openPortal, closePortal] = useModal(false);

  return (
    <div>
      <h2>Ventanas Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Esta es la primera ventana modal</p>
        <img src="https://placeimg.com/400/400/animals" alt="animals" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi
          autem molestiae inventore dignissimos porro distinctio tenetur? Est
          quis vero velit facere quas soluta repudiandae, culpa voluptatum
          dolorum voluptates similique?
        </p>
        <img src="https://placeimg.com/400/400/people" alt="people" />
      </Modal>
      <button onClick={openContact}>Modal Contact Form</button>
      <Modal isOpen={isOpenContact} closeModal={closeContact}>
        <ContactForm></ContactForm>
      </Modal>
      <button onClick={openSong}>Modal Song Search</button>
      <Modal isOpen={isOpenSong} closeModal={closeSong}>
        <SongSearch />
      </Modal>
      <button onClick={openPortal}>Modal Portal</button>
      <ModalPortal isOpen={isOpenPortal} closeModal={closePortal}>
        <h3>Modal Portal</h3>
        <p>Esto es una ventana modal hecha con los React Portal</p>
        <img src="https://placeimg.com/400/400/tech" alt="tech" />
      </ModalPortal>
    </div>
  );
}

export default Modals;
