

class DogProfiles {
    constructor(data) {
       Object.assign(this, data);
        // this.profileName = data.profileName
        // this.avatar = data.avatar
        // this.age = data.age
        // this.bio = data.bio
        
    }

    isSwiped() {
        this.hasBeenSwiped = 
        this.hasBeenLiked = true
    }

    getProfileHtml() {
        const{profileName, avatar, age, bio} = this

        return ` 
         <img src="${avatar}" alt="dog profiles in Tindog" class="profile-img">
            
            <div class="text-container">
            <p class="profile-name">${profileName}, ${age}</p>
            <p class="profile-message">${bio}</p>
            </div>

            <div class="decision-img">
                <img src="images/like-image.png" alt="like image" class="like-img" id="like-img">
                <img src="images/nope-image.png" alt="nope image" class="nope-img" id="nope-img">
            </div>`;
    }
}

export default DogProfiles

