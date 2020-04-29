 <template>
    <div class="container">

        <div id="example-2">
        <!-- <p><i class="icon-camera-retro icon-large"></i> icon-camera-retro</p> -->
            <button type="button" id="refresh" class="btn btn-success" v-on:click="greet">Refresh</button>
            <button type="button" id="refresh" class="btn btn-success" v-on:click="csv">export XLS</button>

        </div>
<table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">url</th>
        <th scope="col">queue name</th>
        <th scope="col">status</th>
        <th scope="col">score</th>
        <th scope="col">data extracted</th>
        <th scope="col">feedback</th>
        <th scope="col">Delete</th>

      </tr>
    </thead>
    <tbody>
        <tr  v-for="item in json_data" :key="item.message"  >

        <td>{{item.id}} </td>
        <td>{{item.url}}</td>

        <td>{{item.queue_name}}</td>
        <td>{{item.status}}</td>
        <td>{{item.score}}</td>
        <td><button type="button" class="btn btn-light"  v-on:click="gotosite(item)">View</button></td>

          <!-- <div :id="item.id" >
              <div>{{item.extracted_data}}</div>
                <img :src="'http://localhost:8080/static/queues_pdf_cropped/'+toImg(item.url)" alt="">
            </div> -->

        <td>{{item.feedback_user}}</td>
        <td><button type="button" class="btn btn-danger" v-on:click="Delete(item.id)">Delete</button></td>



      </tr>

    </tbody>
  </table>



    </div>
</template>

<script>
import axios from 'axios/dist/axios.min.js'

import stringInject from 'stringinject'

import 'bootstrap/dist/js/bootstrap.js'
// import * as jsonexport from "jsonexport/dist"

import bootbox from 'bootbox'
import store from '../store'
// import $ from 'jquery'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters.token

export default {
    methods: {
        csv:function(){
                const method = 'GET';

    const url = "http://localhost:8080/csv/0";


    axios.request({
        url,
        method,
        responseType: 'blob', //important
      }).then(({ data }) => {
        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'file.xlsx'); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
      });

//   };


            // window.open( 
            //   "http://localhost:8080/csv/0", "_blank");
              
            // $.ajax({
            // type: "GET",
            // url: "http://localhost:8080/csv/0",
            // headers: {'Authorization' :'Bearer ' + store.getters.token},
            // success: function(response)
            // {
            //     // alert('got response');
            //     window.location (response, "_blank");
            // },
            // error: function () 
            // {
            //     alert('Error occurred while opening fax template');
            // }
        // });
        },
        toImg:function(url){
            var res = url.replace(".pdf", ".jpg");
            return res
        },

        Delete:function(id){

          bootbox.confirm({
                message: '<img src="/logo.png" alt="/logo.png" height="250" width="200">',
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-danger'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-success'
                    }
                },
                callback: function (result) {
                  console.log(result,id)
                  if (result==true){


                var header={
                    headers: { 'Content-Type': 'application/json' }
                  }
                    axios.delete('http://localhost:8080/ProccessQueue//'+id,header).then(function (response) {
                    console.log(response);
                    location.reload();
                
                      })
                    console.log('This was logged in the callback: ' + result);
                }
                }
                  }

            
            
         );},
        greet:function(){
            location.reload();
        },
        gotosite:function(item){
            var self=this
            var el
            self.json_data.forEach(element => {
                if (element.id==item.id){
                    el=element.extracted_data
                    
                    return;
                }
                });
                if(el==null){
                    el="No extracted data"
                }

            var e=(item.url).replace(".pdf", ".jpg") 
            console.log(e)

            // toimg= url.replace(".pdf", ".jpg");
            // var a=document.getElementById(item).innerHTML
            // var b="fff"
            // bootbox.dialog.init
            var str = stringInject('<p>{element}</p><br><img src="http://localhost:8080/static/queues_pdf_cropped/{name}" alt="/logo.png" height="250" width="200">', { element: el, name: e});
            var put_url=stringInject('http://localhost:8080/ProccessQueue/{queue_id}/{pdf_id}',{ queue_id: item.queue_id, pdf_id: item.id})
            bootbox.dialog({
            title: "str",
            message: str,
            size: 'large',
            buttons: {
                cancel: {
                    label: "Close",
                    className: 'btn-danger',
                    callback: function(){
                        console.log('Custom cancel clicked');
                    }
                },
                noaclose: {
                    label: "Bad",
                    className: 'btn-warning',
                    callback: function(){
                        axios.put(put_url,{"feedback": "Bad"})
                        .then((response) => {
                        console.log(response);
                        location.reload();
                        // return false
                        // self.json_data=response.data.Queues;
                        }, (error) => {
                        console.log(error);
                        });
                        // console.log('Custom button clicked');
                        // return false;
                    }
                },
                oka: {
                    label: "Meduim",
                    className: 'btn-success',
                    callback: function(){
                        axios.put(put_url,{"feedback": "Meduim"})
                        .then((response) => {
                        console.log(response);
                        location.reload();
                        // return false
                        // self.json_data=response.data.Queues;
                        }, (error) => {
                        console.log(error);
                        });
                    }
                },
                ok: {
                    label: "Good",
                    className: 'btn-info',
                    callback: function(){
                        axios.put(put_url,{"feedback": "Good"})
                        .then((response) => {
                        console.log(response);
                        location.reload();
                        // return false
                        // self.json_data=response.data.Queues;
                        }, (error) => {
                        console.log(error);
                        });
                    }
                },
                
            }
        });
            // bootbox.alert(a);

        }
    },
    data(){
        return{
            json_data:{},
            blah:{}
        }
    },
    mounted (){
        var self=this
        axios.get('http://localhost:8080/ProccessQueue/0')
        .then((response) => {
        console.log(response);
        self.json_data=response.data.Queues;
        }, (error) => {
        console.log(error);
        });
    }
}
</script>

<style  scoped>
.bootbox-body{
    display: flex;
    justify-content: space-around;
}
p{
    margin-right: 92px;
}
</style>