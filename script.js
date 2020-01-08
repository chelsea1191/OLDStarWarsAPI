//console.log("JS connected")

const peopleAPI = "http://star-cors.herokuapp.com/people"
const filmsAPI = "http://star-cors.herokuapp.com/films"
const starshipsAPI = "http://star-cors.herokuapp.com/starships"
const vehiclesAPI = "http://star-cors.herokuapp.com/vehicles"

  const getPeople = async () => {
    //console.log("made it to getPeople")
    const response = await fetch(peopleAPI);
    return await response.json();
  };
  //getPeople()

  const getFilms = async () => {
    //console.log("made it to getFilms")
    const response = await fetch(filmsAPI);
    return await response.json();
  };
  //getFilms()

  const getStarships = async () => {
    //console.log("made it to getStarships")
    const response = await fetch(starshipsAPI);
    return await response.json();
  };
  //getStarships()

  const getVehicles = async () => {
    //console.log("made it to getVehicles")
    const response = await fetch(vehiclesAPI);
    return await response.json();
  };
  //getVehicles()

  const peopleCards = document.querySelector("#people")
  const filmCards = document.querySelector("#films")
  const starshipsCards = document.querySelector("#starships")
  const vehicleCards = document.querySelector("#vehicles")


  const renderPeople = () => {
    getPeople().then((data) => {
      //console.log(data.results)
      for (let name in data.results) {
        //console.log(data.results[name].name)
        let finalName = data.results[name].name
        //console.log(cards)
        let numberOfFilms = data.results[name].films.length
        peopleCards.innerHTML += `<div class="dataCard"><li class="title">` + finalName + `</li><p>Appeared in ` + numberOfFilms + ` films.</p></div>`;
      }
    })
  }

  const renderFilms = () => {
    getFilms().then((data) => {
      //console.log(data.results)
      for (let i in data.results) {
        //console.log(data.results[name].title)
        let finalTitle = data.results[i].title
        let date = data.results[i].release_date
        filmCards.innerHTML += `<div class="dataCard"><li class="title">` + finalTitle + `</li><p>Released on: ` + date + `</p></div>`;
      }
    })
  }

  const renderStarships = () => {
    getStarships().then((data) => {
      //console.log(data.results)
      for (let i in data.results) {
        //console.log(data.results[i].name)
        let finalStarships = data.results[i].name
        let starshipClass = data.results[i].starship_class
        starshipsCards.innerHTML += `<div class="dataCard"><li class="title">` + finalStarships + `</li><p>` + starshipClass + `</p></div>`;
      }
    })
  }

  const renderVehicles = () => {
    getVehicles().then((data) => {
      //console.log(data.results)
      for (let i in data.results) {
        //console.log(data.results[i].name)
        let finalVehicle = data.results[i].name
        let manu = data.results[i].manufacturer
        vehicleCards.innerHTML += `<div class="dataCard"><li class="title">` + finalVehicle + `</li><p>Manufactured By ` + manu + `</p></div>`;
      }
    })
  }
  renderPeople()
  renderStarships()
  renderVehicles()
  renderFilms()
