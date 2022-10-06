<template>
  <div class = "cgnSimpleCard">
    <div class = "cgnSimpleCardHeader">
      Dateien hochladen
    </div>
    <div class = "cgnSimpleCardBody">
        <div id="kbot-wrapper">
            <div class="flex w-full h-screen items-center justify-center text-center">
              <div class="bg-gray-100" @dragover="dragover" @dragleave="dragleave" @drop="drop">
                <input type="file" multiple name="fields[assetsFieldHandle][]" id="assetsFieldHandle" 
                  class="upload-button" @change="onChange" ref="file" accept=".pdf,.jpg,.jpeg,.png" />
              
                <label for="assetsFieldHandle" class="block cursor-pointer">
                  <div>You can drop files in here 
                    or <span class="choose-item">click here</span> to upload your files
                  </div>
                </label>
                <ul class="mt-4" v-if="this.filelist.length" v-cloak>
                  <li class="text-sm p-1" v-for="(file, index) in filelist" :key="index"> 
                     {{file[0].name}} <button class="remove-button" type="button" @click="remove(filelist.indexOf(file))" title="Remove file">remove</button>
                  </li>
                </ul>
              </div>
              <button class="submit-button" v-show="filelist.length > 0" @click="submit">
                Upload
              </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "UploadFileCard",
  data: function() {
    return {
      filelist: [] // Store our uploaded files
    }
  },
  methods: {
    onChange() {
      // this.filelist = [...this.$refs.file.files];
      this.filelist.push(this.$refs.file.files);
    },
    remove(i) {
      this.filelist.splice(i, 1);
    },
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains('bg-green-300')) {
        event.currentTarget.classList.remove('bg-gray-100');
        event.currentTarget.classList.add('bg-green-300');
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    submit() {
      console.log("Upload Submit")
    }
  }
};
</script>
