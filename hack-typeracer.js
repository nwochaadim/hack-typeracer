loadJquery();
var promise;
function hack(timeDelay){
    promise = setInterval(function(){
    $('.txtInput').autotype(getTextToWrite()+getPuntuaction()+" ");
    if(getTextToWrite()===""){
      clearInterval(promise);
      clearAnnoyingPrompt();
    }
  }, timeDelay)

}

function wait(){
  setTimeout(doNothing, 10)
}
 
function doNothing(){
  console.log("Loading...")
}

function clearAnnoyingPrompt(){
  $('.PopupWithIcon.challengePromptDialog').remove();
}

function getTextToWrite(){
  return $('.nonHideableWords.unselectable span:nth-child(2)').text();
}

function getPuntuaction(){
  return $('.nonHideableWords.unselectable span:nth-child(3)').text();
}

function getWrittenText(){
  return $('.nonHideableWords.unselectable span:nth-child(1)').text();
}


function hasEnded(){
  return $('.gameStatusLabel').text() === "The race has ended."
}


function loadJquery(){
  loadScript("https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js", loadAutotype);
}

function loadAutotype(){
  url = "https://cdn.rawgit.com/mmonteleone/jquery.autotype/master/jquery.autotype.js"
  loadScript(url, doNothing);
}

function loadScript(url, callback)
{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = url;
    script.type = "text/javascript"
    script.onreadystatechange = callback;
    script.onload = callback
    head.appendChild(script);
}