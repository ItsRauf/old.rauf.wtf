const hash = window.location.hash.substr(1);
const values = hash.split("&").reduce((result, item) => {
  const parts = item.split("=");
  result[parts[0]] = parts[1];
  return result;
}, {});

history.pushState(
  "",
  document.title,
  window.location.pathname + window.location.search
);

async function getData() {

  const userData = await fetch("https://discord.com/api/v8/users/@me", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      Authorization: `${values.token_type} ${values.access_token}`,
    },
  });

  const user = await userData.json();
  user.guilds = await getGuilds(0)

  return user;
}

async function getGuilds(after) {
  const guilds = await fetch(
    `https://discord.com/api/v8/users/@me/guilds?after=${after}`,
    {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Authorization: `${values.token_type} ${values.access_token}`,
      },
    }
  );

  let guildsJson = await guilds.json()
  if (guildsJson.length === 100) guildsJson.concat(await getGuilds(guildsJson[99].id))

  return guildsJson
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
