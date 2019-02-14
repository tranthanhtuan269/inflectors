const Inflectors = require("../dist/index").Inflectors;

function watch (inputElementId, callback) {
    var val = document.getElementById(inputElementId).value;
    setInterval(function(){
        if(val === document.getElementById(inputElementId).value) return;
        else callback();
    },20);
}

function outputUnit (contents) {
    return "<span>"+contents+"</span>";
}

watch("verbs-input",function(){
    var newValue = document.getElementById("verbs-input").value.split(" ")[0];
    if(!newValue) return;
    var instance = new Inflectors(newValue);
    var newHTML = 
        outputUnit(instance.toPresent()) +
        outputUnit(instance.toPast()) +
        outputUnit(instance.toPastParticiple()) + "<br>" +
        outputUnit(instance.toGerund()) +
        outputUnit(instance.toPresentS());
    document.getElementById("verbs-output").innerHTML = newHTML;
});