//https://teachablemachine.withgoogle.com/models/utqYjd1Cs/

prediction="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(selfie){
        document.getElementById("result").innerHTML="<img id='capture_img' src="+selfie+">";
    });
}

console.log("ml5 version is:",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/utqYjd1Cs/model.json",modelloded);

function modelloded(){
    console.log("Model is loded");
}

function speak() {
    var synth = window.speechSynthesis;
    var speak_data = "The Prediction Is "+prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function check(){
    img=document.getElementById("capture_img");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        prediction = results[0].label;
        speak();

        if(results[0].label == "Amazing"){
            document.getElementById("result_emoji").innerHTML = "&#128076;&#127995;";
        }
        if(results[0].label == "Best"){
            document.getElementById("result_emoji").innerHTML = "&#128077;&#127995;";
        }
        if(results[0].label == "Victory"){
            document.getElementById("result_emoji").innerHTML = "&#9996;&#127995;";
        }
    }
}

