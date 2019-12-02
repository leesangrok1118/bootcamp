const thisIsButton = document.getElementsByClassName('button_in_div_')[0];

thisIsButton.addEventListener('click', function() {
   
    let commentFromUser = document.getElementById('comment_from_user');

    // change original text
    // let originalText = document.getElementById('user_comments');
    // originalText.innerHTML = commentFromUser.value;

    // make element, text node
    let newElement = document.createElement('div');
    let newText = document.createTextNode(commentFromUser.value);

    newElement.appendChild(newText);

    // find current node
    // let position = document.getElementById('user_comments')[0]; // this is wrong code
    const position = document.getElementsByClassName('comment_div')[0];
    position.appendChild(newElement);

// debugging code
    // alert(newElement);
    // alert(commentFromUser.value);
});
