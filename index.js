import dogData from "./dog_profiles.js";
import Profiles from "./profile_class.js";

const likeBtn = document.querySelector("#like-btn")
const dislikeBtn = document.querySelector("#nope-btn")

// dogData[0].hasBeenLiked = true
//  console.log(!dogData[0].hasBeenLiked)
function getNewProfile() {
   const nextDogProfile = dogData.shift();
   return nextDogProfile ? new Profiles(nextDogProfile) : []
}

function likedProfile() {

    if (!dogProfile.hasBeenLiked && !dogProfile.hasBeenSwiped) {
         document.querySelector(".decision-img").style.display = "grid";
         document.querySelector(".nope-img").style.display = "none";
         setTimeout(() => {
           dogProfile = getNewProfile();
           return render();
         }, 1500); 
     
    } else {
        noMoreProfiles()
    }

    
}

function dislikedProfile() {
    //   if(dogProfile.hasBeenSwiped)
    document.querySelector(".decision-img").style.display = "grid";
    document.querySelector(".like-img").style.display = "none";
    setTimeout(() => {
            dogProfile = getNewProfile()
             render()
    }, 1500)
  setTimeout(() => {
    noMoreProfiles();
  }, 3000) 

}

function noMoreProfiles() {
  const endMessage =  document.querySelector("#profile-container").innerHTML = `
        <div class="end-message-container">
        <p class="end-message"> There are no more profiles in your area</p>
    </div>`
    return endMessage
}

likeBtn.addEventListener('click', likedProfile)

dislikeBtn.addEventListener('click', dislikedProfile)

// const rex = new Profiles(dogData[0])

function render() {
document.getElementById("profile").innerHTML = dogProfile.getProfileHtml();
}

let dogProfile = getNewProfile()

render()
