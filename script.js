console.log("Hello, Good Morning!");

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));


      const data ={
    title:"This is title",
    body:"This is post body",
    userId:1
}  


/* post request */

fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
    .then((res) => res.json())
    .then((data) => console.log(data));


