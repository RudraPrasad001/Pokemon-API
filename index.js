var nameStaker = document.getElementById("textField")
var image = document.getElementById("pokemon")
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
    pic.src=null
    
    
    
    
    try{
    const  data= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response=>response.json())
    .then(value=>{
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = value.sprites.front_default;
    
        canvas.style.display="block"
    img.onload = () => {
        ctx.drawImage(img, 0, 0,img.width*2.5,img.height*2.5);
        ctx.globalCompositeOperation = "source-in";
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 399, 399);
        pic.style.display="none"

        document.getElementById("name").innerHTML="Name:???";
        document.getElementById("weight").innerHTML="Weight:???";
            document.getElementById("type").innerHTML="Type:???";}
       
        setTimeout(()=>{
            document.getElementById("name").innerHTML="Name:"+String(value.name.charAt(0)).toLocaleUpperCase()+String(value.name.substring(1))
            document.getElementById("weight").innerHTML="Weight:"+value.weight
            document.getElementById("type").innerHTML="Type:"+value.types[0].type.name
            pic.style.display="block"
            canvas.style.display="none"
            pic.src=value.sprites.front_default;
            pic.style.backgroundImage="none"
        },2000)
        pic.style.display="block"})}
    catch(error){
        console.log("Pokemon not found 404")
        pic.style.display="none"
        document.getElementById("name").innerHTML="Pokemon Not found"
        document.getElementById("weight").innerHTML=""
        document.getElementById("type").innerHTML=""
    }
    }

