import dogData from "./dog_profiles.js";
import Profiles from "./profile_class.js";

const likeBtn = document.querySelector("#like-btn")
const dislikeBtn = document.querySelector("#nope-btn")
// let dogIndex = 0
// let currentDogProfile = new Profiles(dogData[dogIndex])

function getNewProfile() {
   const nextDogProfile = dogData.shift();
   return nextDogProfile ? new Profiles(nextDogProfile) : []
}

// function getDogProfile() {
//     dogIndex++
//     currentDogProfile = new Profiles(dogData[dogIndex])
//     render()
// }

function likedProfile() {

        if(dogData.length > 0) {
             dogProfile.isSwiped(true);
             document.querySelector(".decision-img").style.display = "grid";
             document.querySelector(".nope-img").style.display = "none";
             setTimeout(() => {
               dogProfile = getNewProfile();
               return render();
             }, 1500); 
        } else {
          setTimeout(() => noMoreProfiles(), 2000)
        }
        
        // getDogProfile()
      }

function dislikedProfile() {

      if(dogData.length > 0) {
              dogProfile.
              document.querySelector(".decision-img").style.display = "grid";
              document.querySelector(".like-img").style.display = "none";
              setTimeout(() => {
                dogProfile = getNewProfile();
                render();
              }, 1500);
       }     
       else {
      setTimeout(() => {
        noMoreProfiles();
      }, 3000); 
  }
  
  

}

function noMoreProfiles() {
  const endMessage =  document.querySelector("#profile-container").innerHTML = `
        <div class="end-message-container">
        <p class="end-message"> There are no more profiles in your area. Check back
          later.</p>
    </div>`
    return endMessage
}

likeBtn.addEventListener('click', likedProfile)

dislikeBtn.addEventListener('click', dislikedProfile)

// const rex = new Profiles(dogData[0])

function render() {
 document.getElementById("profile").innerHTML = dogProfile.getProfileHtml();
// document.querySelector("#profile").innerHTML = currentDogProfile.getProfileHtml()
}

let dogProfile = getNewProfile()

render()
