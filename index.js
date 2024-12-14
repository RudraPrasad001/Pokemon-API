var nameStaker = document.getElementById("textField")
nameStaker.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        fetchData()
    }
});
 async function fetchData()
{
    
    var name = document.getElementById("textField").value
    name=String(name).toLowerCase()
    const pic = document.getElementById("pokemon")
    try{
    const  data= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response=>response.json())
    .then(value=>{
        document.getElementById("name").innerHTML="Name:"+String(value.name.charAt(0)).toLocaleUpperCase()+String(value.name.substring(1))
        document.getElementById("weight").innerHTML="Weight:"+value.weight
        document.getElementById("type").innerHTML="Type:"+value.types[0].type.name
        pic.src=value.sprites.front_default
        pic.style.display="block"
    })}
    catch(error){
        console.error("Pokemon not found 404")
        pic.style.display="none"
        document.getElementById("name").innerHTML="Pokemon Not found"
        document.getElementById("weight").innerHTML=""
        document.getElementById("type").innerHTML=""
    }
}
fetchData()
