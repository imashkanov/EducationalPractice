var depictPhotoPost = function (photoPost) {
    let buffer = "";
    if (photoPost.hashTags) {
        for (let i = 0; i < photoPost.hashTags.length; i++) {
            buffer += photoPost.hashTags[i];
        }
    }

    let likes = "";
    if (photoPost.likes) {
        likes = photoPost.likes.length;
        if (photoPost.likes.length === 0) {
            likes = "";
        }
    }
    return "<div class=\"post\" id=\"" + photoPost.id + "\">\n" +
        " <div class=\"header\">\n" +
        " <div class=\"top\">\n" +
        " <img src=\"user_blue.png\">" + photoPost.author +
        "  </div>\n" +
        "  <div class=\"top\">" + (photoPost.createdAt) + "</div>\n" +
        "  </div>\n" +
        "<img class=\"image\" src=" + photoPost.photoLink + ">\n" +
        " <p>" + photoPost.description + "</p>\n" +
        "  <div class=\"header\">\n" +
        "   <div class=\"bottom\">\n" +
        "  <em>" + buffer + "</em>\n" +
        "  </div>\n" +
        "<div class=\"bottom\">\n" + "<div>" + likes + "</div>\n" +
        "<div><input type=\"image\" src=\"like.png\" name=\"submit\" /></div>\n" +
        "</div>  \n" +
        "</div>\n" +
        "</div>\n"
}

var depictPhotoPostWithoutWrap = function (photoPost) {
    let buffer = "";
    if (photoPost.hashTags) {
        for (let i = 0; i < photoPost.hashTags.length; i++) {
            buffer += photoPost.hashTags[i];
        }
    }

    let likes = "";
    if (photoPost.likes) {
        likes = photoPost.likes.length;
        if (photoPost.likes.length === 0) {
            likes = "";
        }
    }
    return "<div class=\"header\">\n" +
        " <div class=\"top\">\n" +
        "  <img src=\"user_blue.png\">" + photoPost.author +
        " </div>\n" +
        " <div class=\"top\">" + (photoPost.createdAt) + "</div>\n" +
        " </div>\n" +
        " <img class=\"image\" src=" + photoPost.photoLink + ">\n" +
        " <p>" + photoPost.description + "</p>\n" +
        "  <div class=\"header\">\n" +
        " <div class=\"bottom\">\n" +
        "  <em>" + buffer + "</em>\n" +
        " </div>\n" +
        " <div class=\"bottom\">\n" + "<div>" + likes + "</div>\n" +
        "<div><input type=\"image\" src=\"like.png\" name=\"submit\" /></div>\n" +
        "</div>  \n" +
        " </div>\n";
}

var depictPhotoPostAuthorised = function (photoPost) {
    let buffer = "";
    if (photoPost.hashTags) {
        for (let i = 0; i < photoPost.hashTags.length; i++) {
            buffer += photoPost.hashTags[i];
        }
    }
    let likes = "";
    if (photoPost.likes) {
        likes = (photoPost.likes.length);
        if (photoPost.likes.length === 0) {
            likes = "";
        }
    }
    return "<div class=\"post\ id=\"" + photoPost.id + "\>\n" +
        "<div class=\"header\">\n" +
        "<div class=\"top\">\n" +
        "<img src=\"user_blue.png\">" + photoPost.author +
        " </div>\n" +
        " <div class=\"top\">" + (photoPost.createdAt) + "</div>\n" +
        " </div>\n" +
        "<img class=\"image\" src=" + photoPost.photoLink + ">\n" +
        " <p>" + photoPost.description + "</p>\n" +
        "<div class=\"header\">\n" +
        " <div class=\"bottom\">\n" +
        "<em>" + buffer + "</em>\n" +
        "</div>\n" +
        "<div class=\"bottom\">\n" +
        "<input type=\"image\" src=\"pencil32.png\" name=\"submit\"/>\n" + "</div>\n" +
        " <div class=\"bottom\">\n" +
        " <input type=\"image\" src=\"bin.png\" name=\"submit\"/>\n" +
        "</div>\n" +
        "<div class=\"bottom\">\n" +
        likes + "<input type=\"image\" src=\"like.png\" name=\"submit\" />\n" +
        "</div>  \n" +
        "</div>\n" +
        "</div>\n"
}

var depictPhotoPostAuthorisedWithoutWrap = function (photoPost) {
    let buffer = "";
    if (photoPost.hashTags) {
        for (let i = 0; i < photoPost.hashTags.length; i++) {
            buffer += photoPost.hashTags[i];
        }
    }
    let likes = "";
    if (photoPost.likes) {
        likes = (photoPost.likes.length);
        if (photoPost.likes.length === 0) {
            likes = "";
        }
    }
    return " <div class=\"header\">\n" +
        "<div class=\"top\">\n" +
        "<img src=\"user_blue.png\">" + photoPost.author +
        "</div>\n" +
        "<div class=\"top\">" + (photoPost.createdAt) + "</div>\n" +
        " </div>\n" +
        " <img class=\"image\" src=" + photoPost.photoLink + ">\n" +
        " </div>\n" +
        " <p>" + photoPost.description + "</p>\n" +
        " <div class=\"header\">\n" +
        " <div class=\"bottom\">\n" +
        " <em>" + buffer + "</em>\n" +
        "</div>\n" +
        "<div class=\"bottom\">\n" +
        " <input type=\"image\" src=\"pencil32.png\" name=\"submit\"/>" +
        "</div>\n" +
        "<div class=\"bottom\">\n" +
        " <input type=\"image\" src=\"bin.png\" name=\"submit\"/>\n" +
        " </div>\n" +
        "<div class=\"bottom\">\n" +
        likes + "<input type=\"image\" src=\"like.png\" name=\"submit\" />\n" +
        "</div>  \n" +
        "</div>\n";
}



var photoPosts = (function () {
    return function () {

        this.photoPosts = [];


        filterByAuthor = function (author, newPosts, top) {
            var findPosts = [];
            if (!author)
                return newPosts;
            for (var i = 0; i < newPosts.length; i++) {
                if (newPosts[i].author.toLowerCase() === author.toLowerCase()) {
                    findPosts.push(newPosts[i]);
                }
            }
            return findPosts;
        }

        filterByDate = function (dateFrom, dateTo, newPosts, top) {
            var findPosts = [];
            if (!dateFrom || !dateTo)
                return newPosts;
            for (var i = 0; i < newPosts.length; i++)
                if (newPosts[i].createdAt >= dateFrom) {
                    if (newPosts[i].createdAt <= dateTo) {
                        findPosts.push(newPosts[i]);
                    }
                }
            return findPosts;
        }

        filterByHashTags = function (hashTag, newPosts, top) {
            return newPosts.filter(function (post) {
                return hashTag.every(function (hashTagIndex) {
                    return post.hashTags.includes(hashTagIndex);
                });
            });
        }

        this.getPhotoPosts = function (skip, top, filterConfig) {

            var newPosts = this.photoPosts;

            if (skip < 0 || !skip)
                skip = 0;

            else if (skip !== 0) {
                skip++;
            }
            if (!top || top <= 0)
                top = 10;

            else if (top !== 10) {
                top++;
            }

            if (skip >= newPosts.length) {
                newPosts = [];
            }

            if (filterConfig && newPosts.length>0) {
                if ("author" in filterConfig) {
                    newPosts = filterByAuthor(filterConfig.author, newPosts, top);
                    document.getElementById('filter')[0].value = filterConfig.author;
                }
                if ("dateFrom" in filterConfig && "dateTo" in filterConfig && newPosts.length>0) {
                    newPosts = filterByDate(filterConfig.dateFrom, filterConfig.dateTo, newPosts, top);
                    document.getElementById('filter')[1].value = filterConfig.dateFrom;
                    document.getElementById('filter')[2].value = filterConfig.dateTo;
                }
                if (filterConfig.hashTags && newPosts.length>0) {
                    newPosts = filterByHashTags(filterConfig.hashTags, newPosts, top);
                    document.getElementById('filter')[3].value = filterConfig.hashTags;
                }
                newPosts = this.sortByDate(newPosts).slice(skip, skip + top);

            }
            else {
                newPosts = this.sortByDate(this.photoPosts).slice(skip, skip + top);
            }

            document.getElementById('feedback').innerHTML = "";

            for (let i = 0; i < newPosts.length; i++) {
                if (currentUser === newPosts[i].author) {
                    document.getElementById("feedback").innerHTML += depictPhotoPostAuthorised(newPosts[i]);
                }
                else {
                    document.getElementById("feedback").innerHTML += depictPhotoPost(newPosts[i]);
                }
            }

        }

        function sort(a, b) {
            return a.createdAt - b.createdAt
        }

        this.sortByDate = function (array) {
            var findPosts = array.slice();
            return findPosts.sort(sort);
        }

        this.getPhotoPost = function (id) {
            if (!id)
                return null;

            for (var i = 0; i < this.photoPosts.length; i++) {
                if (this.photoPosts[i].id === id)
                    return this.photoPosts[i];
            }
            return null;
        }

        this.validatePhotoPost = function (photoPost) {
            if ((typeof (photoPost.id) === "string") &&
                (typeof (photoPost.description) === "string") &&
                (typeof (photoPost.author) === "string") &&
                (typeof (photoPost.photoLink) === "string") &&
                (photoPost.createdAt instanceof Date)) {
                if (photoPost.photoLink.length !== 0 && photoPost.description.length <= 200 && photoPost.author !== 0) {
                    if (!photoPost.hashTags) {
                        photoPost.hashTags = [];
                    }
                    return true;
                }
            }
            return false;
        }

        this.addPhotoPost = function (photoPost) {
            if (!photoPost) {
                alert("invalid photo post");
                return false;
            }

            if (this.validatePhotoPost(photoPost) && this.getPhotoPost(photoPost.id) === null) {
                this.photoPosts.push(photoPost);
                document.getElementById("feedback").innerHTML += depictPhotoPost(photoPost);
                return true;
            }

            return false;
        }

        this.editPhotoPost = function (id, photoPost) {
            var oldPhotoPost = this.getPhotoPost(id);
            var empty = false;
            if (!oldPhotoPost || !photoPost || !id)
                return false;

            if (photoPost.description) {
                if (photoPost.description.length >= 200)
                    return false;
                else {
                    oldPhotoPost.description = photoPost.description;
                    empty = true;
                }
            }
            if (photoPost.photoLink) {
                if (photoPost.photoLink.length === 0)
                    return false;
                else {
                    oldPhotoPost.photoLink = photoPost.photoLink;
                    empty = true;
                }
            }

            if (photoPost.hashTags) {
                oldPhotoPost.hashTags = photoPost.hashTags;
                empty = true;
            }

            let i = 0;
            while (i < document.getElementById('feedback').getElementsByClassName('post').length) {
                if (document.getElementById('feedback').getElementsByClassName('post')[i].id.toString() === oldPhotoPost.id) {

                    document.getElementById('feedback').getElementsByClassName('post')[i].innerHTML = showPhotoPost(oldPhotoPost);
                }
                i++;
            }

            return empty;
        }

        this.removePhotoPost = function (id) {
            if (!id)
                return false;
            for (var i = 0; i < this.photoPosts.length; i++) {
                if (this.photoPosts[i].id === id) {
                    this.photoPosts.splice(i, 1);
                    elementsArray = document.getElementById('feedback').getElementsByClassName('post');
                    elementsArray[i].remove();
                    return true;
                }
            }
            return false;
        }
    }

})();

let posts = new photoPosts();
posts.addPhotoPost({
    id: "1",
    description: "111",
    createdAt: new Date('2018-01-01'),
    author: "user1",
    hashTags: ['#tag1', '#tag2', '#tag3'],
    photoLink: "image1.jpg",
    likes: ['user2', 'user1', 'user3']
});

posts.addPhotoPost({
    id: "2",
    description: "222",
    createdAt: new Date('2018-01-02'),
    author: "user2",
    hashTags: ['#tag1', '#tag2', '#tag3'],
    photoLink: "image2.jpg",
    likes: ['user1', 'user2']
});

posts.addPhotoPost({
    id: "3",
    description: "333",
    createdAt: new Date('2018-01-01'),
    author: "user1",
    hashTags: ['#tag1', '#tag22', '#tag32'],
    photoLink: "3.jpg",
    likes: ['user1']
});

posts.addPhotoPost({
    id: "4",
    description: "1111",
    createdAt: new Date('2018-01-02'),
    author: "user3",
    hashTags: ['#tag11', '#tag2', '#tag3'],
    photoLink: "4.jpg",
    likes: ['user2', 'user1', 'user3']
});

posts.addPhotoPost({
    id: "5",
    description: "555",
    createdAt: new Date('2018-01-03'),
    author: "user3",
    hashTags: ['#tag111', '#tag22', '#tag3'],
    photoLink: "5.jpg",
    likes: ['user2', 'user1', 'user3']
});

