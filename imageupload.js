    document.getElementById('image').addEventListener('change', function(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
  
        reader.onload = function(event) {
          localStorage.setItem('uploadedImage', event.target.result);
          
        };
  
        reader.readAsDataURL(file);
      });

