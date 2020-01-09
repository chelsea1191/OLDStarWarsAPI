
const peopleAPI = "http://star-cors.herokuapp.com/people"
const filmsAPI = "http://star-cors.herokuapp.com/films"
const starshipsAPI = "http://star-cors.herokuapp.com/starships"
const vehiclesAPI = "http://star-cors.herokuapp.com/vehicles"


  const getPeople = async () => {
    const response = await fetch(peopleAPI);
    return await response.json();
  };

  const getFilms = async () => {
    const response = await fetch(filmsAPI);
    return await response.json();
  };

  const getStarships = async () => {
    const response = await fetch(starshipsAPI);
    return await response.json();
  };

  const getVehicles = async () => {
    const response = await fetch(vehiclesAPI);
    return await response.json();
  };

  const peopleCards = document.querySelector("#people")
  const filmCards = document.querySelector("#films")
  const starshipsCards = document.querySelector("#starships")
  const vehicleCards = document.querySelector("#vehicles")

  const viewPeople = document.querySelector(".viewingPeople")
  const viewFilms = document.querySelector(".viewingFilms")
  const viewStarships = document.querySelector(".viewingStarships")
  const viewVehicles = document.querySelector(".viewingVehicles")

  const renderPeople = () => {
    getPeople().then((data) => {
      viewPeople.innerHTML = "Viewing " + "HERE" + " out of " + data.count + " people"
      for (let name in data.results) {
        let finalName = data.results[name].name
        let numberOfFilms = data.results[name].films.length
        peopleCards.innerHTML += `<div class="dataCard m-2"><li class="title">` + finalName + `</li><p><br>Appeared in ` + numberOfFilms + ` films.</p></div>`;
      }
    })
  }

  const renderFilms = () => {
    getFilms().then((data) => {
      viewFilms.innerHTML = "Viewing " + data.results.length + " out of " + data.count + " people"
      for (let i in data.results) {
        let finalTitle = data.results[i].title
        let date = data.results[i].release_date
        filmCards.innerHTML += `<div class="dataCard m-2"><li class="title">` + finalTitle + `</li><p><br>Released on: ` + date + `</p></div>`;
      }
    })
  }

  const renderStarships = () => {
    getStarships().then((data) => {
      viewStarships.innerHTML = "Viewing " + data.results.length + " out of " + data.count + " people"
      for (let i in data.results) {
        let finalStarships = data.results[i].name
        let starshipClass = data.results[i].starship_class
        starshipsCards.innerHTML += `<div class="dataCard m-2"><li class="title">` + finalStarships + `</li><p><br>` + starshipClass + `</p></div>`;
      }
    })
  }

  const renderVehicles = () => {
    getVehicles().then((data) => {
      viewVehicles.innerHTML = "Viewing " + data.results.length + " out of " + data.count + " people"
      for (let i in data.results) {
        let finalVehicle = data.results[i].name
        let manu = data.results[i].manufacturer
        vehicleCards.innerHTML += `<div class="dataCard m-2"><li class="title">` + finalVehicle + `</li><p><br>Manufactured by ` + manu + `</p></div>`;
      }
    })
  }

  renderPeople()
  renderStarships()
  renderVehicles()
  renderFilms()

  function search(id, inputId) {
    console.log(id)
    const input = document.getElementById(inputId)
    filter = input.value.toUpperCase()

    let ul = document.getElementById(id);
    let li = ul.getElementsByTagName("li");
    let dataCard = ul.getElementsByClassName("dataCard")
    let count = 0;

    for (let i = 0; i < li.length; i++) {
      let peopleName = li[i].innerHTML.toUpperCase()
      if (peopleName.includes(filter)) {
        dataCard[i].style.display = "";
        count++
      } else {
        dataCard[i].style.display = "none"
      }
    }
    console.log(count)
  }
