import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  const urlparams = new URLSearchParams(search)
  const adven = urlparams.get("adventure");
  return adven;
  // Place holder for functionality to work in the Stubs

}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try {
    const result = await fetch(config.backendEndpoint + `/adventures/detail/?adventure=${adventureId}`);
    const data = await result.json();
    return data;
  } catch (e) {
    return null;
  }
  // Place holder for functionality to work in the Stubs
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  //debugger
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  document.getElementById("adventure-name").innerHTML = `${adventure.name}`
  document.getElementById("adventure-subtitle").innerHTML = `${adventure.subtitle}`
  for(let i=0;i<adventure["images"].length; i++){
    let imgdiv = document.createElement('div')
    imgdiv.className = "col-lg-12";
    imgdiv.innerHTML = `<img src=${adventure.images[i]} class="activity-card-image pb-3 pb-md-0"/>`;
    document.getElementById("photo-gallery").appendChild(imgdiv)
  }
  document.getElementById("adventure-content").innerText = `${adventure.content}`
}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  debugger
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure
  document.getElementById("photo-gallery").innerHTML = `
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators" id="carouselindi">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    </ol>
    <div class="carousel-inner" id="carouselinner">
      <div class="carousel-item active">
        <img class="d-block wimage" src="${images[0]}" alt="First slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  `
  for(let i=1; i<images.length;i++){
    let activeappend = document.createElement('LI')
    activeappend.setAttribute("data-target","#carouselExampleIndicators")
    activeappend.setAttribute("data-slide-to",`${i}`)
    document.getElementById("carouselindi").appendChild(activeappend)
  }
  for(let i=1; i<images.length;i++){
    let carouselitemactiveappend = document.createElement('DIV')
    carouselitemactiveappend.setAttribute("class","carousel-item")
    carouselitemactiveappend.innerHTML = `<img class="d-block wimage" src=${images[i]} ></img>`
    document.getElementById("carouselinner").appendChild(carouselitemactiveappend)
  }
}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission using JQuery
function captureFormSubmitUsingJQuery(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using JQuery to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmitUsingJQuery,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
