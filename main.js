
const panoramaImage = new PANOLENS.ImagePanorama("images/aerial-drone-panoramic-view-old-brasov-centre-romania.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer.add(panoramaImage);
