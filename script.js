document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentsList = document.getElementById("comments-list");

    // Load comments from localStorage on page load
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    savedComments.forEach(comment => addCommentToList(comment));

    // Add new comment on form submission
    commentForm.addEventListener("submit", event => {
        event.preventDefault();
        const comment = commentInput.value.trim();
        if (comment) {
            addCommentToList(comment);
            saveComment(comment);
            commentInput.value = "";
        }
    });

    // Add comment to the list
    function addCommentToList(comment) {
        const li = document.createElement("li");
        li.textContent = comment;
        commentsList.appendChild(li);
    }

    // Save comment to localStorage
    function saveComment(comment) {
        savedComments.push(comment);
        localStorage.setItem("comments", JSON.stringify(savedComments));
    }
});
