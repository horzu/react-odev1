import axios from "axios";

const getData = async function (user_id){
    return new Promise(async (resolve,reject) => {
    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
    const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);
    let result = {...user, ...post};
    resolve(result)
});
}
export default getData;