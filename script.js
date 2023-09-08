let searchForm = document.querySelector(".search-form");
let userCardConatiner = document.querySelector(".user-card");
let loader = document.querySelector(".loader");
let keyword = document.querySelector(".keyword");
let bgLightBtn = document.getElementById("light");
let bgDarkBtn = document.getElementById("dark");
let logo = document.querySelector(".logo");

let getuser = async () => {
    if (keyword.value.length <= 0) {
        alert("Empty Input");
    } else {
        loader.innerHTML = `<i class="fa fa-spinner fa-spin"></i>`;
        let response = await fetch(`https://api.github.com/users/${keyword.value}`);
        let result = await response.json();
        let data = await result;
        console.log(data);
        showuser(data);
        loader.innerHTML = 'Please enter your github username.'
    }
};

let showuser = (data) => {
    if (data.message === 'Not Found') {
        loader.innerHTML = 'User not found';
        userCardConatiner.innerHTML = loader.innerHTML;
    } else {
        let userCradHtml = `
        <div class="head">
            <img src="${data.avatar_url}" alt="${data.name}" class="userPhoto">
            <div class="naming">
                <h2>${(data.name) ? data.name : '-'}</h2>
                <a href="${data.html_url}" class="username" target="_blank">@${data.login}</a>
            </div>
        </div>
    <div class="details">
        <ul class="infoCard">
            <li>
                <p><span class="boldInfo">Bio :</span> ${(data.bio) ? data.bio : '-'}</p>
            </li>
            <li>
                <p> <span class="boldInfo">Repos : </span>${data.public_repos}</p>
            </li>
            <li>
                <p><span class="boldInfo">Followers : </span>${data.followers}</p>
            </li>
            <li>
                <p><span class="boldInfo">Following : </span>${data.following}</p>
            </li>
            <li>
                <p><i class="fa fa-map-marked-alt"></i> <span class="boldInfo">Location : </span> ${(data.location) ? data.location : '-'}</p>
            </li>
            <li>
                <p><i class="fa fa-building"></i> <span class="boldInfo">Comapany : </span> ${(data.company) ? data.company : '-'}</p>
            </li>

        </ul>
    </div>
        `
        userCardConatiner.innerHTML = userCradHtml
        keyword.value = "";
    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getuser();
});

bgDarkBtn.addEventListener("click", () => {
    logo.style.color = "white";
    document.body.style.backgroundColor = "rgb(50, 50, 50)";
})

bgLightBtn.addEventListener("click", () => {
    logo.style.color = "black";
    document.body.style.backgroundColor = "white";
})