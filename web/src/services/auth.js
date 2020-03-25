const TOKEN = "@usr-tkn";
const isAuth = () => localStorage.getItem(TOKEN) !== null;
const getToken = () => localStorage.getItem(TOKEN);
const isLogin = token => localStorage.setItem(TOKEN, token);
const isLogout = () => localStorage.removeItem(TOKEN);

export {isAuth, getToken, isLogin, isLogout};
