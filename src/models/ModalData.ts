import { Modal } from "bootstrap";

export interface ModalData {
  modalActive?: boolean;
  title?: "";
  data?: "";
  optionalButton?: object;
}

export const data2 = {
  isOpen: true,
  title: "",
  data: "",
};

export const myModal = new Modal("#exampleModal", {
  keyboard: false,
});
