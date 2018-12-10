loadScript("https://cdn.jsdelivr.net/gh/andela-anwocha/hack-typeracer@master/hack-typeracer.js", function(){
  console.log("Initialized succcesfully");
})

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
