function simulateDetection(){

    document.getElementById("overlay").style.display = "flex";

    let blockedCount = document.getElementById("blocked");

    blockedCount.innerText =
    parseInt(blockedCount.innerText) + 1;
}

function closeWarning(){

    document.getElementById("overlay").style.display = "none";
}