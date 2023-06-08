/*perfiles*/
const apiUrl = "https://raw.githubusercontent.com/Manuelard03/GHIFLIX-FINAL/main/assets/json/perfiles.json";
const getImages = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};
const images = await getImages();
const imageElement = document.getElementById("image");
imageElement.src = images[0].url;
