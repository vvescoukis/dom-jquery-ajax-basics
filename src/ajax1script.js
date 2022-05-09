function getXHR() {
    let xhr;
    if (window.XMLHttpRequest) { // Browsers younger than 10 y.o...
        xhr = new XMLHttpRequest();
    } else {
        console.log("XMLHttpRequest() failed... Get some new browser, please...");
        return null;
    }
    return xhr;
};

function ajax1Load() {
    function ajaxDataManager() {
        let text = document.getElementById("ajax1Area");
        if (ajaxDataToLoad.readyState === 4) {
            if (ajaxDataToLoad.status === 200) {
                text.innerHTML = ajaxDataToLoad.responseText;
            } else {
                console.log('Something went wrong with the request.'); } }
    };

    let ajaxDataToLoad = getXHR();
    if (ajaxDataToLoad) {
        ajaxDataToLoad.onreadystatechange = ajaxDataManager;             // what to do when ready
        ajaxDataToLoad.open("GET", "someLocalData.txt");    // the actual call description
        ajaxDataToLoad.send(); }                                      // execution of call
    else {
        console.log("You MUST upgrade your browser NOW!!!"); }
}



function ajax2Load() {

    function ajaxDataManager() {
        let text = document.getElementById("ajax2Area");
        if (ajaxDataToLoad.readyState === 4) {
            if (ajaxDataToLoad.status === 200) {
                text.innerHTML = ajaxDataToLoad.responseText;
                console.log(text.innerHTML);
            } else {
                console.log('Something went wrong with the request.');
            }
        }
    };

    let ajaxDataToLoad = getXHR();
    if (ajaxDataToLoad) {
        ajaxDataToLoad.onreadystatechange = ajaxDataManager;             // what to do when ready
        ajaxDataToLoad.open("GET", "http://localhost:3000/quizzes");    // the actual call description
        ajaxDataToLoad.send();                                          // execution of call
    }
    else {
        console.log("You MUST upgrade your browser NOW!!!");
    }
}

document.getElementById('ajax1Button').addEventListener("click", ajax1Load);
document.getElementById('ajax2Button').addEventListener("click", ajax2Load);




