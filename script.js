const users = [
        {
          name: "Raghav",
          pic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
          bio: "Silent and chaotic nature 🌪 | full of knowledge 📚",
        },
        {
          name: "Arjun Verma",
          pic: "https://images.unsplash.com/photo-1636664561425-637dc66446de",
          bio: "Calm mind & strong soul ⚡ | Loves adventures 🏔",
        },
        {
          name: "Divya Sharma",
          pic: "https://images.unsplash.com/photo-1585240975858-7264fd020798",
          bio: "Finding beauty in small moments 🌸 | artistic vibes 🎨",
        },
        {
          name: "Priya Kapoor",
          pic: "https://images.unsplash.com/photo-1582610285985-a42d9193f2fd",
          bio: "Coffee, books & late night thoughts ☕📖 | dreamer",
        },
        {
          name: "Aarav Singh",
          pic: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4",
          bio: "Tech enthusiast 💻 | deep thinker & problem solver 🧠",
        },
        {
          name: "Manya Chauhan",
          pic: "https://images.unsplash.com/photo-1610631066894-62452ccb927c",
          bio: "Strong personality 🤍 | unpredictable & fearless",
        },
        {
          name: "Kabir Rathod",
          pic: "https://images.unsplash.com/photo-1687976474495-392791a78ab4",
          bio: "Soft heart & sharp mind ✨ | loyal & selective",
        },
        {
          name: "Sia Mehta",
          pic: "https://images.pexels.com/photos/34927841/pexels-photo-34927841.jpeg",
          bio: "Loves exploring new places ✈ | sunset person 🌅",
        },
      ];

      let formInput = document.querySelectorAll(".form-input");
      let addCardbtn = document.querySelector("#add-card-btn");
      let form = document.querySelector("#add-card-form");
      let gridWrapper = document.querySelector("#card-grid");
      let search = document.querySelector(".search-input");
      let card = document.querySelector("#card-grid");
      // let profileName = formInput[1].value;

      let showUser = (user) => {
        user.forEach(function (e) {
          let card = document.createElement("article");
          card.classList.add("user-card");

          let userProfile = document.createElement("img");
          userProfile.setAttribute("src", `${e.pic}`);

          let userDatabox = document.createElement("div");
          userDatabox.classList.add("user-card-content");

          let userName = document.createElement("h2");
          userName.classList.add("user-name");
          userName.innerText = e.name;

          let userDesc = document.createElement("p");
          userDesc.classList.add("user-desc");
          userDesc.innerText = e.bio;

          userDatabox.appendChild(userName);
          userDatabox.appendChild(userDesc);

          console.log(userDatabox);

          card.appendChild(userProfile);
          card.appendChild(userDatabox);

          console.log(card);

          gridWrapper.appendChild(card);
        });
      };

      showUser(users);

      search.addEventListener("input", function(val){
        let filteredUsers = users.filter((usr)=>{
          return usr.name.startsWith(search.value);
        });
        card.innerHTML = "";
        if (Object.keys(filteredUsers).length > 0){
          showUser(filteredUsers);
        }
        else{
          console.log("No User Found");
          let card = document.createElement("article");
          card.classList.add("user-card");

          let userProfile = document.createElement("img");
          userProfile.setAttribute("src", "https://images.pexels.com/photos/4065183/pexels-photo-4065183.jpeg");

          let userDatabox = document.createElement("div");
          userDatabox.classList.add("user-card-content");
          userDatabox.classList.add("not-found");

          let userName = document.createElement("h2");
          userName.classList.add("user-name");
          userName.innerText = "User Not Found";

          let userDesc = document.createElement("p");
          userDesc.classList.add("user-desc");
          userDesc.innerText = "Nobody exist with this name";

          userDatabox.appendChild(userName);
          userDatabox.appendChild(userDesc);

          console.log(userDatabox);

          card.appendChild(userProfile);
          card.appendChild(userDatabox);

          console.log(card);

          gridWrapper.appendChild(card);
        }
        
      });
      // let createCard = (evnt) => {
      //   evnt.preventDefault();

      // These will use when you want a form through which you want to add card
      // let profileURL = formInput[0].value;
      // let profileName = formInput[1].value;
      // let profileBio = formInput[2].value;

      // let card = document.createElement("article");
      // card.classList.add("user-card");

      // console.log(profileURL);
      // console.log(profileName);
      // console.log(profileBio);

      // let userProfile = document.createElement("img");
      // userProfile.setAttribute("src", profileURL);

      // let userDatabox = document.createElement("div");
      // userDatabox.classList.add("user-card-content");

      // let userName = document.createElement("h2");
      // userName.classList.add("user-name");
      // userName.innerText = profileName;

      // let userDesc = document.createElement("p");
      // userDesc.classList.add("user-desc");
      // userDesc.innerText = profileBio;

      // userDatabox.appendChild(userName);
      // userDatabox.appendChild(userDesc);

      // console.log(userDatabox);

      // card.appendChild(userProfile);
      // card.appendChild(userDatabox);

      // console.log(card);
      // gridWrapper.appendChild(card);

      //   form.reset();
      // };

      // form.addEventListener("submit", createCard);
