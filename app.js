const loadJoke = async () => {
    try{
        const chuckNorrisJoke = await fetch('https://api.chucknorris.io/jokes/random',{
            headers : {
                Accept : 'application/json'
            }
        })
        const jokeData = await chuckNorrisJoke.json()
        document.getElementById("loading_joke").innerHTML = jokeData.value
    }
    catch(error){
        console.log(error);
    }   
}
document.getElementById('loadBtn').addEventListener("click",loadJoke)