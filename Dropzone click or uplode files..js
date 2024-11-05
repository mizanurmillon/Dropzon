 //Dropzone click or uplode files.
      Dropzone.autoDiscover = false;      
      const dropzone = $("#image").dropzone({ 
        url: "{{ route('temp-images.create') }}",
        maxFiles: 10,
        paramName: 'image',
        addRemoveLinks: true,
        acceptedFiles: "image/jpeg,image/png,image/gif,image/svg,image/webp",
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }, success: function(file, response){
            //$("#image_id").val(response.image_id);
            var html=`<div class="col-md-4" id="image-row-${response.image_id}"><div class="card">
                    <input type="hidden" name="image_array[]" value="${response.image_id}">
                    <img src="${response.image_path}" class="card-img-top" alt="">
                    <div class="card-body">
                      <a href="javascript:void(0)" onclick="deleteImage(${response.image_id})" class="btn bt-sm btn-danger"><i class="fa fa-trash"></i></a>
                    </div>
                  </div></div>`;
            $("#prodcut-gallery").append(html);
        },
        complete:function(file) {
          this.removeFile(file);
        }
      });
      function deleteImage(id) {
       $("#image-row-"+id).remove();
      }