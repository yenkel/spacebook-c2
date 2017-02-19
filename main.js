var posts = [{
    text: "Post 1",
    comments: [
        { text: "Post 1, comment 1!" },
        { text: "Post 1, comment 2!" },
        { text: "Post 1, comment 3!" }
    ]
}, {
    text: "Post 2",
    comments: [
        { text: "Post 2, comment 1!" },
        { text: "Post 2, comment 2!" },
        { text: "Post 2, comment 3!" }
    ]
}, {
    text: "Post 3",
    comments: [
        { text: "Post 3, comment 1!" },
        { text: "Post 3, comment 2!" },
        { text: "Post 3, comment 3!" }
    ]
}];

var renderPosts = function() {
    $('.posts').empty();

    for (var i = 0; i < posts.length; i += 1) {
        var post = posts[i];

        var commentsContainer = '<div class="comments-container">' + '<div class=comments-list></div>' +
            '<input type="text" class="comment-name">' +
            '<button class="btn btn-primary add-comment">Post Comment</button> </div>';

        $('.posts').append('<div class="post">' + '<a href="#" class="remove">remove</a> ' + '<a href="#" class="show-comments">comments</a> ' + post.text +
            commentsContainer + '</div>');
    };
};

var renderComments = function() {
        // start here!
        $('.comments-list').empty();

        for (var i = 0; i < posts.length; i += 1) {
            var post = posts[i];

            var $post = $('.posts').find('.post').eq(i);

            for (var j = 0; j < post.comments.length; j += 1) {
                var comment = post.comments[i];
                $post.find('.comments-list').append(
                    '<div class="comment"> ' + comment.text +
                    ' <button class="btn btn-danger remove-comment">Remove Comment</button>' +
                    '</div>'
                );
            }
        };

        renderPosts();
        renderComments();
