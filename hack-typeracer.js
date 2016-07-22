function hack(){
  while(getTextToWrite() !== ""){
    $('.txtInput').autotype(getTextToWrite()+" ");
    wait();
  }
  console.log("Done!");
}

function wait(){
  setTimeout(doNothing, 10)
}

function doNothing(){
  console.log("Loading...")
}

function getTextToWrite(){
  return $('.nonHideableWords.unselectable span:nth-child(2)').text();
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
  url = "https://raw.githubusercontent.com/mmonteleone/jquery.autotype/master/jquery.autotype.js"
  loadScript(url, doNothing);

}

function loadScript(url, callback)
{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = url;
    script.type = "text/javascript"
    script.onreadystatechange = callback;
    head.appendChild(script);
}