// console.log(window.location.hash);
if (window.location.hash.length === 0) {
  window.location.replace(
    "https://discord.com/oauth2/authorize?client_id=447809656652562433&redirect_uri=https%3A%2F%2Frauff.wtf%2Fguildcount%2F&response_type=token&scope=guilds%20identify"
  );
}
