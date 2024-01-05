function add_note() {
    //Create new div container
    var div_container = document.createElement("div");
    div_container.classList.add('container');
    //Create buttons
    var edit_button = document.createElement("button");
    var delete_button = document.createElement("button");
    //Set button text
    edit_button.textContent = "Edit";
    delete_button.textContent = "Delete";
    div_container.appendChild(edit_button);
    div_container.appendChild(delete_button);
    //Create textarea
    var note_pad = document.createElement("textarea");
    note_pad.name = "notepad";
    note_pad.cols = "50";
    note_pad.rows = "10";
    div_container.appendChild(note_pad);
    //Append div to body
    document.body.appendChild(div_container);
}