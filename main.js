function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sFgjgwtZq/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(){
    console.log("gotResults")
}