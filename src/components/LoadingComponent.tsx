// import { useDataStore } from "@/stores/data";
// import { ModalData } from "@/models/ModalData";

export default function loadingScreen() {
  return (
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
