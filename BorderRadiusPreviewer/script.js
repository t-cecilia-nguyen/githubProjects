function borderRadius() {
    var topLeft = document.getElementById("top-left").value;
    var topRight = document.getElementById("top-right").value;
    var bottomLeft = document.getElementById("bottom-left").value;
    var bottomRight = document.getElementById("bottom-right").value;
    var shape = document.getElementById("shape");

    if (topLeft == "") {
        topLeft = "0%";
    } else {
        topLeft += "%";
    }
    if (topRight == "") {
        topRight = "0%";
    } else {
        topRight += "%";
    }
    if (bottomLeft == "") {
        bottomLeft = "0%";
    } else {
        bottomLeft += "%";
    }
    if (bottomRight == "") {
        bottomRight = "0%";
    } else {
        bottomRight += "%";
    }

    shape.style.borderRadius = `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
}

function copyText() {
    var copyText = document.getElementById("copyText");
    var topLeft = document.getElementById("top-left").value;
    var topRight = document.getElementById("top-right").value;
    var bottomLeft = document.getElementById("bottom-left").value;
    var bottomRight = document.getElementById("bottom-right").value;

    if (topLeft == "") {
        topLeft = "0%";
    } else {
        topLeft += "%";
    }
    if (topRight == "") {
        topRight = "0%";
    } else {
        topRight += "%";
    }
    if (bottomLeft == "") {
        bottomLeft = "0%";
    } else {
        bottomLeft += "%";
    }
    if (bottomRight == "") {
        bottomRight = "0%";
    } else {
        bottomRight += "%";
    }
    
    copyText.value = `border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`;

    // Select the text field
    copyText.select();
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    setTimeout(function() {
        alert("Copied the text: " + copyText.value);
    }, 500);
}

