document.getElementById('uploadForm').addEventListener('submit', function(e) {
  e.preventDefault();

cosnt imageInput = document.getElementById('imageInput').files[0];
cosnt fileInput = document.getElementById('fileInput').filer[0];
cosnt preview = document.getElementById('preview');
  preview.innerHTML = "";

// Preview Gambar
if (imageInput) {
  cosnt img = document.creatElement('img');
  img.src = URL.createObjectURL(imageInpu);
  img.onload = function() { URl.revokeObjectURL(img.src); };
  preview.appendChild(img);
}

// Info File
if (fileInput) {
  cosnt fileInfo = document.createElement('p');
  fileInfo.textContect = `File dipilih: ${fileInput.name} (${fileInput.type || 'tipe tidak diketahui'})`;
  preview.appendChild(fileInfo);
}
});
