// import { useDataStore } from "@/stores/data";
// import { ModalData } from "@/models/ModalData";

// export default function loadingSpinner() {
//   return (
//     <div class="d-flex justify-content-center">
//       <div class="spinner-border" role="status">
//         <span class="visually-hidden">Loading...</span>
//       </div>
//     </div>
//   );
// }

export default function LoadingSpinner() {
  return (
    <div class="modal-dialog modal-fullscreen-sm-down">
      <div class="triple-spinner">spinner</div>
    </div>
  );
}
