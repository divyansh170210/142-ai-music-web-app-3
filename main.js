song1 = "";
song2 = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center;
    canvas.position(300, 250);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded (){
    console.log('PoseNet Is Initiallized 👍');
}

function gotPoses (results) {
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWristX;
        leftWristY = results[0].pose.leftWristY;
        console.log("leftWristX = " + leftWristX +"leftWristY = " + leftWristY);

        console.log(results);
        rightWristX = results[0].pose.rightWristX;
        rightWristY = results[0].pose.rightWristY;
        console.log("rightWristX = " + rightWristX +"rightWristY = " +rightWristY);
    }
}

function draw()
{
    image(video, 0,0, 600,500);
}
