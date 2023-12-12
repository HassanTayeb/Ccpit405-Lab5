const addPhotoBtn = document.getElementById("addPhotoBtn");
addPhotoBtn.addEventListener("click", addPhoto);

function addPhoto() {
 const photoURL = prompt("enter the url of the photo");
 console.log(photoURL)
 const imgElem = createImgElement(photoURL);
 addPhotoToGalleryDiv(imgElem);
 addDeleteBtn(imgElem);
}

function createImgElement(photoURL){
    const imgElem = document.createElement('img')
    imgElem.src = photoURL;
    imgElem.alt = 'photo of a cat';
    return imgElem;
}

function addPhotoToGalleryDiv(imgElem){
    const photoGalleryDiv = document.getElementById('photo-gallery');
    photoGalleryDiv.appendChild(imgElem);
}

function addDeleteBtn(imgElem){
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.addEventListener('click', function(){
        imgElem.remove();
        deleteBtn.remove();
    });
    const photoGalleryDiv = document.getElementById('photo-gallery');
    photoGalleryDiv.appendChild(deleteBtn);
}
  
