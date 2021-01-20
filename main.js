var images=["https://www.anime-planet.com/images/characters/shingos-father-uninhabited-planet-survive-106439.jpg?t=1463119797",
"https://pbs.twimg.com/profile_images/561763540902481921/LNBtVH8P_400x400.png",
"https://wallpapercave.com/wp/wp6084878.jpg",
"https://cdn3.vectorstock.com/i/1000x1000/02/27/cute-little-boy-anime-facial-expression-image-vector-15250227.jpg"];
var names=["Dad",
"Mom",
"Me",
"Brother"];
var i=0;
function Next(){
if(i==4){
i=0;
}
document.getElementById("MY-IMAGE").src=images[i];
document.getElementById("LABEL").innerHTML=names[i];
i++;
}
function Reset(){
    document.getElementById("MY-IMAGE").src="https://img1.cgtrader.com/items/854393/2d00a2f173/cartoon-family-rigged-v2-3d-model-rigged-obj-fbx-ma-mel.jpg";
    i=0;
}
