const selectedAnimal = document.getElementById("animal");
// console.log(selectedAnimal.value);
const nutrients = document.querySelectorAll("td");
const image = document.getElementById("animal-pic");

const shegoaPic =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMO9Q-lNYN2sXSgfCQY1ypVHsY4cHl5EKcw&usqp=CAU";
const goatPic =
  "https://st2.depositphotos.com/2268777/11555/v/600/depositphotos_115559166-stock-illustration-cartoon-farm-animals-for-kids.jpg";
const cowPic =
  "https://st.depositphotos.com/1967477/2393/v/600/depositphotos_23939761-stock-illustration-smiling-cow-sitting.jpg";
const sheepPic =
  "https://static7.depositphotos.com/1007168/727/i/950/depositphotos_7277048-stock-photo-grazing-black-sheep.jpg";
// console.log(nutrients);
// const nutritionInfo = document.querySelectorAll(`#${selectedAnimal.value}`);

const updateValue = () => {
  nutrients.forEach((nutrient) => {
    if (nutrient.className === "nutrientInfo") {
      if (nutrient.id === selectedAnimal.value) {
        nutrient.hidden = false;
      } else {
        nutrient.hidden = true;
      }
    }
  });
  if (selectedAnimal.value === "shegoa") {
    image.setAttribute("src", shegoaPic);
  } else if (selectedAnimal.value === "cow") {
    image.setAttribute("src", cowPic);
  } else if (selectedAnimal.value === "goat") {
    image.setAttribute("src", goatPic);
  } else {
    image.setAttribute("src", sheepPic);
  }
};

selectedAnimal.addEventListener("change", updateValue);

updateValue();
