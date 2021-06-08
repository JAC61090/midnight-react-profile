import axios from "axios";


export let profileInfo =  axios.get("https://api.github.com/users/JAC61090")
export let repos =  axios.get("https://api.github.com/users/JAC61090/repos")