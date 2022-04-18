img="";
status=""
object=[];
function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetectoror=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status : decting objects";
}
function preload() {
    img=loadImage('dog_cat.jpg');
}
function draw() {
    image(img,0,0,640,240);
    
    if (status !="") {
        for (i=0;i<object.lenght;i++) {
            document.getElementById("status").innerHTML="status : decting objects";
            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
text(objects[i].label+""+percent+"%",object[i].x+15,object[i].y+15);
noFill();
stroke("#FF0000");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }  

}
function modelLoaded() {
    console.log("modelLoaded!!");
     status=true;
     objectDetector.detect(img,gotResult);
}
function gotResult(error,results) {
    if (error) {
        console.log(error);
        
    }
    console.log(results);
    object=results;
}
