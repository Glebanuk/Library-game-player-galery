const input = document.getElementById("input");
const images = document.querySelectorAll(".image");





async function setImage(perImage = 12, page = 1, keyword ) {
    await fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=-4Bvj9BMaPlIIAIszRPDsCXhAxw5c8TCo2cVtM4XIps&per_page=${perImage}`)

    .then((response) => response.json())
    .then((data) => {

        console.log(data);
        showImage(data.results);
    })

    .catch((error) => console.error(error));

}

function showImage(imageData) {

    imageData.forEach((data, index) => {
      if (images[index]) {
        images[index].src = data.urls.small;
      }
    });
  }


input.addEventListener('keydown', async (e) => {
     if(e.key === "Enter"){
        e.preventDefault();

        const keyword = input.value;
        if(keyword.trim() !== ""){
            await setImage(12, 1, keyword);
        }
    }
});


window.addEventListener("load", () =>{
    setImage()
    
})




