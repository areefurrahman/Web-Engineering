// const images = [
//     'images/slide1.png',
//     'images/slide2.png',
//     'images/slide3.png',
//     'images/slide4.png'

//   ];
  
//   let index = 0;
//   const carouselImage = document.getElementById('carousel-image');
  
//   setInterval(() => {
//     index = (index + 1) % images.length;
//     carouselImage.src = images[index];
//   }, 3000);
  
  


//   contact page js
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("form-message");
  
    if (name && email && message) {
      formMessage.style.color = "lime";
      formMessage.textContent = "Message sent successfully!";
      this.reset();
    } else {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill out all fields correctly.";
    }
  });
  