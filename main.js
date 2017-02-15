var posts = [];
var id = 1;


var addPost = function(text, id) {
    var newPost = {
        "text": text,
        "id": id
    };
    posts.push(newPost);
};

$(".btn").on("click", function() {
    var text = $("input").val();
    addPost(text, id);
    updatePosts();
});

var updatePosts = function() {
    $(".posts").empty();
    id += 1;

    for (var i = 0; i < posts.length; i++) {
        var com = "<div class='form-group'>" + "<input type='text' placeholder='comment'></input></div>";
        $('.posts').append('<p>' +
            '<button type="button" class="btn"><a href="#" data-id="' + posts[i].id + '" class="remove">remove</a> </button> ' +
            posts[i].text + "</p>" + com);
    }
};


$(".posts").on("click", "button", function() {
    $(this).closest('p').remove();
    posts.splice(this, 1);
});
