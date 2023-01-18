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
          <slot> </slot>
          <input type="file" name="inputFile" id="inputFile" />
          <div class="image-preview" id="imagePreviewContainer">
            <img src="" alt="Image Preview" class="image-preview__image" />
            <span class="image-preview__default-text">Image Preview</span>
          </div>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          <!-- Optional submit button vie props with data binding -->
          {{ dataStore?.modalData.optionalButton }}
        </div>
      </div>
    </div>
  </div>
  <!-- </Teleport> -->
</template>

<script lang="ts" setup>
import { useDataStore } from "@/stores/data";
import { read } from "@popperjs/core";
const dataStore = useDataStore();
const inputFile = document.getElementById("inputFile");
const previewConatiner = document.getElementById("imagePreviewContainer");
const previewImage = document.querySelector(".image-preview__image");
const previewDefaultText = document.querySelector(".image-preview__default");
inputFile?.addEventListener("change", () => {
  const file = this.file[0];
  if (file) {
    const reader = new FileReader();
    previewDefaultText.style.display = "none";
    previewImage.style.display = "block";
    reader.addEventListener("load", () => {
      console.log(this);
      previewImage?.setAttribute("src", file);
    });
  }
});
</script>
