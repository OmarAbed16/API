function logout(g) {
  google.accounts.id.revoke(g, () => {
    console.log("Logout success");
  });
}

function auth_info(a) {
  console.log(a, "1");
  console.log(a.credential, "2");
  const decodedToken = jwt_decode(a.credential);
  console.log(decodedToken, "3");
  console.log(decodedToken.name, decodedToken.email, "4");

  logout(decodedToken.email);
}
