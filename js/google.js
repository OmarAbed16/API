function logout(g) {
  google.accounts.id.revoke(g, () => {
    console.log("Logout success");
  });
}

function auth_info(a) {
  const decodedToken = jwt_decode(a.credential);
  console.log(decodedToken);
  logout(decodedToken.email);
}
