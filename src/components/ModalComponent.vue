<template>
  <Teleport to="body">
    <div
      v-show="useDataStore.modalActive"
      class="modal fade"
      id="myModal"
      @click="toggleModal"
    >
      <div class="modal-dialog">
        <div v-show="modalActive" class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">{{ title }}</h4>
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
  </Teleport>
</template>

<script lang="ts" setup>
import { useDataStore } from "@/stores/data";
</script>

<style lang="scss" scoped></style>
