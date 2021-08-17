Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 91
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function (Sc){document.getElementById("result").innerHTML = '<img id="cam-Img" src= "'+Sc+'"/>'});
}

console.log("Ml5 ", ml5.version);

classify = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4IMYnUOsk/model.json', ModelLoaded);

function ModelLoaded(){
    console.log("Model is Loaded");
}

function check(){
    ImgHolder = document.getElementById("cam-Img");
    classify.classify(ImgHolder, GiveResults);
}

function GiveResults(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}