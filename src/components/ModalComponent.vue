<template>
  <!-- <Teleport to="body"> -->
  <div
    v-show="modalActive"
    class="modal fade"
    id="myModal"
    @click="toggleModal"
  >
    <div class="modal-dialog">
      <div v-show="modalActive" class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <!-- <h4 class="modal-title">{{ title }}</h4> -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <p>This is the modal body</p>
          <slot></slot>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <!-- <button v-if="extraButton" class="btn btn-success"></button> -->
          <!-- <button @click="toggleModal" class="btn btn-danger">Close</button> -->
        </div>
      </div>
    </div>
  </div>
  <!-- </Teleport> -->
</template>

<script lang="ts" setup>
import { defineProps, ref, defineEmits } from "vue";
import type ModalData from "@/models/ModalData";
import type { data2 } from "@/models/ModalData";

let modalActive = false;
// const props = defineProps();
// const data2 = props.modalData;

const data = ref("My name is Mitko");

function toggleModal() {
  modalActive = !modalActive;
}
const emit = defineEmits(["toggleModal"]);
</script>

<style lang="scss" scoped></style>
