const hash = window.location.hash.substr(1);
const values = hash.split("&").reduce((result, item) => {
  const parts = item.split("=");
  result[parts[0]] = parts[1];
  return result;
}, {});
// console.log(values);
// fetch("https://discord.com/api/v7/users/@me", {
//   method: "GET",
//   mode: 'cors',
//   cache: 'no-cache',
//   headers: {
//     "Authorization": `${values.token_type} ${values.access_token}`
//   },
// }).then(res => {
//   if (res.ok) {
//     const data = res.json();
//   }
// })

async function getData() {
  const userData = await fetch("https://discord.com/api/v7/users/@me", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      Authorization: `${values.token_type} ${values.access_token}`,
    },
  });

  const user = await userData.json();

  const userGuildData = await fetch(
    "https://discord.com/api/v7/users/@me/guilds",
    {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Authorization: `${values.token_type} ${values.access_token}`,
      },
    }
  );

  user.guilds = await userGuildData.json();

  return user;
}

getData().then((user) => {
  console.log(user);
  const avatarRow = document.getElementById("avatar-row");
  const img = document.createElement("img");
  img.setAttribute(
    "src",
    `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}?size=256`
  );
  img.setAttribute("alt", `${user.username}#${user.discriminator}'s Avatar`);
  img.setAttribute("id", "avatar");
  avatarRow.appendChild(img);

  const userH3 = document.getElementById("user");
  userH3.innerText = `Hello ${user.username}#${user.discriminator}`;

  const countH5 = document.getElementById("count");
  countH5.innerText = `Your Guild Count is ${user.guilds.length}`;
});
