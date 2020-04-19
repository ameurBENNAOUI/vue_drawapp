<template>
  <div class="example-drag">
    <div class="upload">
      <div v-if="files.length" class="container">
        <!-- <li v-for="(file, index) in files" :key="file.id"> -->
          <table class="table table-bordered text-center " >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>


              <tr v-for="(file,index) in files" :key="file.id" class="text-center">
                <th scope="row">{{index+1}}</th>
                <td>{{file.name}}</td>
                <td v-if="file.error" ><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>{{file.error}}</td>
                <td v-else-if="file.success" >Success<i class="fa fa-check" aria-hidden="true"></i></td>
                <td v-else-if="file.active" >
                  
                  <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </td>
                <td v-else></td>
              </tr>

            </tbody>
          </table>
        
      </div>
      <div v-else>
        <td colspan="7" class="drop-field">
          <div class="text-center p-5">
            <h4>Drop files anywhere to upload<br/>or</h4>
            <label for="file" class="btn btn-lg btn-primary">Select Files</label>
          </div>
        </td>
      </div>

      <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
    		<h3>Drop files to upload</h3>
      </div>

      <div class="example-btn text-center">
        <file-upload
          class="btn btn-primary"
          post-action="http://localhost:8080/uploadfile/"
          :multiple="true"
          :drop="true"
          :drop-directory="true"
          v-model="files"
          ref="upload">
          <i class="fa fa-plus"></i>
          Select files
        </file-upload>
        <button type="button" class="btn btn-success" v-if="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.active = true">
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
          Start Upload
        </button>
        <button type="button" class="btn btn-danger"  v-else @click.prevent="$refs.upload.active = false">
          <i class="fa fa-stop" aria-hidden="true"></i>
          Stop Upload
        </button>
      </div>
    </div>


  </div>
</template>
<style>
.example-drag label.btn {
  margin-bottom: 0;
  margin-right: 1rem;
}
.example-drag .drop-active {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  opacity: .6;
  text-align: center;
  background: #000;
}
.example-drag .drop-active h3 {
  margin: -.5em 0 0;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 40px;
  color: #fff;
  padding: 0;
}
.drop-field{
    display: table;
    margin: 0 auto 15px;
    border: 1px solid #333;
    padding: 25px 125px;
    margin-top: 30px;
}
.file-uploads{
  margin-right: 10px;
}
.fa-exclamation-triangle{
  color: #f1c40f;
  font-size: 16px;
  margin-right: 5px;
}
.fa-check{
  color: #2ecc71;
  margin-right: 5px;
}
</style>

<script>
import FileUpload from 'vue-upload-component'
export default {
    name:"multi",
  components: {
    FileUpload,
  },
  data() {
    return {
      files: [],
    }
  }
}
</script>