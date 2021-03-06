//get pageContent element
let pageContent = document.getElementById('pageContent');
//get picInfo element
let pictInfo = document.getElementById('pictInfo');
//define the image array
let rawImgaes = '[{"filename":"image-1.jpg","name":"Plage de Bretagne","author":"Damien Bruyndonckx","exposure":"100 ISO - 18 mm - f/22 - 302 Sec"},{"filename":"image-2.jpg","name":"Cadre dans le cadre","author":"Damien Bruyndonckx","exposure":"200 ISO - 150 mm - f/10 - 1/320 Sec"},{"filename":"image-3.jpg","name":"Vigie minérale","author":"Damien Bruyndonckx","exposure":"100 ISO - 59 mm - f/13 - 1/250 Sec"},{"filename":"image-4.jpg","name":"Les cheveux du ciel","author":"Damien Bruyndonckx","exposure":"100 ISO - 18 mm - f/22 - 531 Sec"},{"filename":"image-5.jpg","name":"Prendre le large","author":"Damien Bruyndonckx","exposure":"100 ISO - 128 mm - f/11 - 1/250 Sec"},{"filename":"image-6.jpg","name":"Maman les p\'tits bateaux","author":"Damien Bruyndonckx","exposure":"100 ISO - 150 mm - f/28 - 1/320 Sec"},{"filename":"image-7.jpg","name":"L\'ombre des palmiers","author":"Damien Bruyndonckx","exposure":"100 ISO - 26 mm - f/10 - 1/100 Sec"},{"filename":"image-8.jpg","author":"Damien Bruyndonckx","name":"Pont d\'or","exposure":"100 ISO - 37 mm - f/11 - 1/400 Sec"},{"filename":"image-9.jpg","name":"L\'ombre assise","author":"Damien Bruyndonckx","exposure":"100 ISO - 24 mm - f/5 - 1/200 Sec"},{"filename":"image-10.jpg","name":"Au bout de l\'ombre","author":"Damien Bruyndonckx","exposure":"200 ISO - 150 mm - f/6.3 - 1/320 Sec"},{"filename":"image-11.jpg","name":"CA Capitol","author":"Damien Bruyndonckx","exposure":"200 ISO - 39 mm - f/10 - 1/640 Sec"},{"filename":"image-12.jpg","name":"Soleil tropical","author":"Damien Bruyndonckx","exposure":"100 ISO - 20 mm - f/11 - 1/80 Sec"},{"filename":"image-13.jpg","name":"Reflet urbain","author":"Damien Bruyndonckx","exposure":"200 ISO - 39 mm - f/13 - 1/200 Sec"},{"filename":"image-14.jpg","name":"Lucide?","author":"Damien Bruyndonckx","exposure":"200 ISO - 70 mm - f/8.0 - 1/100 Sec"}]';
//je vais parcourir cette variable
let images = JSON.parse(rawImgaes);


//choose a random image
let randomImage =images[ Math.floor(Math.random() * images.length)]; //floor permet d'arrondir toujours vers le bas 

//apply the image as a background of pageContent
console.log(randomImage);

//je veux afficher l image et donc l objet qui m'interesse c'est filename alors que tous les filnames situent dans images
pageContent.style.backgroundImage = `url(images/${randomImage.filename})`;
if(pictInfo){//empty the picinfo  div
    while (pictInfo.firstChild) { //sig si pictInfo.firstChild est vrai 
        pictInfo.removeChild(pictInfo.firstChild); //alors le vider
    }
    
    
    //create pictInfo title and add it to the div
    let pictTitle = document.createElement('h1');
    let picInfoTitleContent = document.createTextNode(randomImage.name);
    pictTitle.appendChild(picInfoTitleContent);//je vais mettre le contenu dans le titre
    pictInfo.appendChild(pictTitle);//je vais ajouter le titre au div
    
    
    //create author and exposure and add them to the div
    
    let picAuthor = document.createElement('p');
    let picData = document.createElement('p');
    let picAuthorContent = document.createTextNode(randomImage.author);
    let picDataContent = document.createTextNode(randomImage.exposure);
    picAuthor.appendChild(picAuthorContent);
    picData.appendChild(picDataContent);
    pictInfo.appendChild(picAuthor);
    pictInfo.appendChild(picData);
}
else {
    
    }
