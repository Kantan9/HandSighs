prediction_1=""


Webcam.set({
    width:296,
    height:300,
    image_format:'png',
    png_quality:90

});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="capture_img" src="'+data_uri+'"/>';    
    });
}

console.log("ml5version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_eIaV-S5J/model.json',modelLoaded);

function modelLoaded()
{
    console.log('modelLoaded!!');
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1="the prediction is"+prediction_1;
    utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}