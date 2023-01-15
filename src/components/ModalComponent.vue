<template>
  <!-- <Teleport to="body"> -->
  <div class="modal fade" id="exampleModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <!-- Check if attributes bellow can be removed -->
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title fs-5" id="exampleModalLabel">
            {{ dataStore?.modalData.title }}
          </h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <slot>
            {{ dataStore?.modalData.data }}
          </slot>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          <button
            class="btn btn-success"
            v-if="dataStore.modalData.saveButtonOn"
            :on-click="dataStore.modalData.saveButtoCallBack"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- </Teleport> -->
</template>

<script lang="ts" setup>
import { useDataStore } from "@/stores/data";
import { Modal } from "bootstrap";
const dataStore = useDataStore();
</script>

<style lang="scss" scoped></style>
