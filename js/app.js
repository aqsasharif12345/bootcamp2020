console.log("Fetch API") 

async function getapi(){
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(api, "API")
    
    const json = api.json()
    
    console.log(json, "json")

}


getapi()