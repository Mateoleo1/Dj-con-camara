noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function preload(){
  sound=loadSound("Mundial.mp3")
}
function Hola(){
  sound.play();
  sound.setVolume(1.2);
  sound.rate(1.45);
}
  function setup() {
    canvas = createCanvas(600, 500);
   canvas.center()
    video = createCapture(VIDEO);
 canvas.position(330,125)
video.hide();
poseNet=ml5.poseNet(video,Watch);
  poseNet.on("pose", Red);


}
function Watch(){
console.log("poseNet Activado");
}
function Red(results){
if(results.lenght>0){
  
}
}

function draw() {
image(video,0,0,600,500)
}


