function CalC() {
  let random = Math.round(Math.random()*100)
  let firstName = inp1.value
  let sceName = inp2.value
  console.log(random);
  
  if (firstName == "" || sceName == ""  ) {
    alert('The first name is empty😒')
  }else {
    if (random >= 0 && random < 20) {
      show.innerHTML = `
        <h1 id="randNum" class="text-center text-light">${random}%</h1>
        <div id = "showInner">
            <img src="sideeye.png" class="img-fluid" alt="Centered Image" id="img">
            <p class="text-center text-light">Go your separate ways😒</p> 
        </div>
      `
    } else if (random >= 20 && random < 30) {
        show.innerHTML = `
        <h1 id="randNum" class="text-center text-light">${random}%</h1>
        <div id = "showInner">
            <img src="20to30.png" class="img-fluid" alt="Centered Image" id="img">
            <p class="text-center text-light">No even try am😂</p> 
        </div>
      `
    } else if (random >= 30 && random < 40) {
        show.innerHTML = `
        <h1 id="randNum" class="text-center text-light">${random}%</h1>
        <div id = "showInner">
            <img src="30to40.png" class="img-fluid" alt="Centered Image" id="img">
            <p class="text-center text-light">We see no light</p> 
        </div>
      `
    } else if (random >= 40 && random < 50) {
        show.innerHTML = `
        <h1 id="randNum" class="text-center text-light">${random}%</h1>
        <div id = "showInner">
            <img src="40to50.png" class="img-fluid" alt="Centered Image" id="img">
            <p class="text-center text-light">Wow nice! But the connection is unstable</p> 
        </div>
      `
    } else if (random >= 50 && random < 60) {
      show.innerHTML = `
      <h1 id="randNum" class="text-center text-light">${random}%</h1>
      <div id = "showInner">
          <img src="50to60.png" class="img-fluid" alt="Centered Image" id="img">
          <p class="text-center text-light">We see potential</p> 
      </div>
    `
    } else if (random >= 60 && random < 70) {
      show.innerHTML = `
      <h1 id="randNum" class="text-center text-light">${random}%</h1>
      <div id = "showInner">
          <img src="60to70.png" class="img-fluid" alt="Centered Image" id="img">
          <p class="text-center text-light">We see more potential</p> 
      </div>
    `
    } else if (random >= 70 && random < 80) {
      show.innerHTML = `
      <h1 id="randNum" class="text-center text-light">${random}%</h1>
      <div id = "showInner">
          <img src="70to80.png" class="img-fluid" alt="Centered Image" id="img">
          <p class="text-center text-light">Amazing</p> 
      </div>
    `
    } else if (random >= 80 && random < 90) {
      show.innerHTML = `
      <h1 id="randNum" class="text-center text-light">${random}%</h1>
      <div id = "showInner">
          <img src="80to90.png" class="img-fluid" alt="Centered Image" id="img">
          <p class="text-center text-light">Just Start Dating Already</p> 
      </div>
    `
    } else if (random >= 90 && random < 100) {
      show.innerHTML = `
      <h1 id="randNum" class="text-center text-light">${random}%</h1>
      <div id = "showInner">
          <img src="90to100.png" class="img-fluid" alt="Centered Image" id="img">
          <p class="text-center text-light">When is the wedding?</p> 
      </div>
    `
    }
}
inp1.value = ""
inp2.value = ""
}
