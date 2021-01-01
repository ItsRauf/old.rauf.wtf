const pronouns_age = document.getElementById("pronouns_age");
pronouns_age.innerText += ` ${
  dayjs().from(dayjs("2003-07-30"), true).split(" ")[0]
}`;

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const descriptors = [
  "developer",
  "programmer",
  "musician",
  "editor",
  "designer",
  "artist",
  "person",
  "human",
  "friend",
];

function setDescriptor() {
  let descriptor = random(descriptors);
  const elem = document.getElementById("descriptor");
  elem.innerText = ` ${descriptor}`;
}
setDescriptor();
setInterval(setDescriptor, 1000 * 5);

// function getSpotifyNowPlaying() {
//   return fetch("https://spotify.rauf.workers.dev");
// }

// async function setSpotify() {
//   const spotifyNowPlaying = document.getElementById("spotifyNowPlaying");
//   const spotifyImage = document.getElementById("spotifyPlayingImage");
//   const spotifyArtistText = document.getElementById("spotifyTextArtist");
//   const spotifyTextTitle = document.getElementById("spotifyTextTitle");
//   const spotifyTextAlbum = document.getElementById("spotifyTextAlbum");

//   const req = await getSpotifyNowPlaying();
//   const body = await req.text();
//   if (body === "") {
//     spotifyNowPlaying.style.opacity = 0;
//     spotifyNowPlaying.style.padding = 0;
//     spotifyNowPlaying.style.display = "none";
//     return;
//   }

//   const spotify = JSON.parse(body);

//   if (spotify && spotify.item) {
//     spotifyNowPlaying.style.opacity = 1;
//     spotifyNowPlaying.style.padding = "10px";
//     spotifyNowPlaying.style.display = "inline";
//     spotifyImage.src = spotify.item.album.images[2].url;
//     spotifyArtistText.innerText = spotify.item.artists
//       .map((artist) => artist.name)
//       .join(", ");
//     spotifyTextTitle.innerText = spotify.item.name;
//     spotifyTextAlbum.innerText = `${spotify.item.album.name}`;
//   } else {
//     spotifyNowPlaying.style.opacity = 0;
//     spotifyNowPlaying.style.padding = 0;
//     spotifyNowPlaying.style.display = "none";
//   }
// }
// setSpotify();
// setInterval(setSpotify, 20000);

// function getGithubProfile() {
//   return fetch("https://api.github.com/users/itsrauf", {
//     headers: {
//       Accept: "application/vnd.github.v3+json"
//     }
//   });
// }

// async function setGithubProfile() {
//   const githubProfile = document.getElementById("githubProfile");
//   const githubProfileImage = document.getElementById("githubProfileImage");
//   const githubUsername = document.getElementById("githubUsername");
//   const githubBio = document.getElementById("githubBio");
//   const githubCompany = document.getElementById("githubCompany");

//   const req = await getGithubProfile();
//   const github = await req.json();
//   if (github) {
//     githubProfile.style.opacity = 1;
//     githubProfile.style.padding = "10px";
//     githubProfile.style.display = "inline";
//     githubProfileImage.src = github.avatar_url;
//     githubUsername.innerText = github.login;
//     githubBio.innerText = github.bio;
//     githubCompany.innerText = github.company;
//   } else {
//     githubProfile.style.opacity = 0;
//     githubProfile.style.padding = 0;
//     githubProfile.style.display = "none";
//   }
// }

// setGithubProfile();
