var photoPosts = (function() {
    return function() {
        this.photoPosts = [
            {
                id: '1',
                description: 'description1',
                createdAt: new Date('2018-01-01'),
                author: 'user1',
                photoLink: 'photo1.jpg',
                hashTags: ['#tag11', '#tag12']

            },
            {
                id: '2',
                description: 'description2',
                createdAt: new Date('2018-01-02'),
                author: 'user2',
                photoLink: 'photo2.jpg',
                hashTags: ['#tag21', '#tag22']

            },
            {
                id: '3',
                description: 'description3',
                createdAt: new Date('2018-01-03'),
                author: 'user3',
                photoLink: 'photo3.jpg',
                hashTags: ['#tag31', '#tag32']

            },
            {
                id: '4',
                description: 'description4',
                createdAt: new Date('2018-01-04'),
                author: 'user4',
                photoLink: 'photo4.jpg',
                hashTags: ['#tag41', '#tag42']

            },

            {
                id: '5 ',
                description: 'description5',
                createdAt: new Date('2018-01-05'),
                author: 'user5',
                photoLink: 'photo5.jpg',
                hashTags: ['#tag51', '#tag52']

            },
            {
                id: '6',
                description: 'description6',
                createdAt: new Date('2018-01-06'),
                author: 'user6',
                photoLink: 'photo6.jpg',
                hashTags: ['#tag61', '#tag62']

            },
            {
                id: '7',
                description: 'description7',
                createdAt: new Date('2018-01-07'),
                author: 'user7',
                photoLink: 'photo7.jpg',
                hashTags: ['#tag71', '#tag72']

            },
            {
                id: '8',
                description: 'description8',
                createdAt: new Date('2018-01-08'),
                author: 'user8',
                photoLink: 'photo8.jpg',
                hashTags: ['#tag81', '#tag82']

            },
            {
                id: '9',
                description: 'description9',
                createdAt: new Date('2018-01-09'),
                author: 'user9',
                photoLink: 'photo9.jpg',
                hashTags: ['#tag91', '#tag92']

            },

            {
                id: '10',
                description: 'description10',
                createdAt: new Date('2018-01-01'),
                author: 'user0',
                photoLink: 'photo10.jpg',
                hashTags: ['#tag01', '#tag02']

            },
            {
                id: '11',
                description: 'description11',
                createdAt: new Date('2018-01-01'),
                author: 'user1',
                photoLink: 'photo11.jpg',
                hashTags: ['#tag11', '#tag12']

            },
            {
                id: '12',
                description: 'description12',
                createdAt: new Date('2018-01-12'),
                author: 'user2',
                photoLink: 'photo12.jpg',
                hashTags: ['#tag21', '#tag22']

            },
            {
                id: '13',
                description: 'description13',
                createdAt: new Date('2018-01-13'),
                author: 'user3',
                photoLink: 'photo13.jpg',
                hashTags: ['#tag31', '#tag32']

            },
            {
                id: '14',
                description: 'description14',
                createdAt: new Date('2018-01-14'),
                author: 'user4',
                photoLink: 'photo14.jpg',
                hashTags: ['#tag41', '#tag42']

            },
            {
                id: '15',
                description: 'description15',
                createdAt: new Date('2018-01-15'),
                author: 'user5',
                photoLink: 'photo15.jpg',
                hashTags: ['#tag51', '#tag52']

            },
            {
                id: '16',
                description: 'description16',
                createdAt: new Date('2018-01-16'),
                author: 'user6',
                photoLink: 'photo16.jpg',
                hashTags: ['#tag61', '#tag62']

            },
            {
                id: '17',
                description: 'description17',
                createdAt: new Date('2018-01-17'),
                author: 'user7',
                photoLink: 'photo17.jpg',
                hashTags: ['#tag71', '#tag72']
            },
            {
                id: '18',
                description: 'description18',
                createdAt: new Date('2018-01-18'),
                author: 'user8',
                photoLink: 'photo18.jpg',
                hashTags: ['#tag81', '#tag82']

            },
            {
                id: '19',
                description: 'description19',
                createdAt: new Date('2018-01-19'),
                author: 'user9',
                photoLink: 'photo19.jpg',
                hashTags: ['#tag91', '#tag92']

            },
            {
                id: '20',
                description: 'description20',
                createdAt: new Date('2018-01-20'),
                author: 'user0',
                photoLink: 'photo20.jpg',
                hashTags: ['#tag21', '#tag22']

            },
            {
                id: '111',
                description: 'description111description111description111description111description111description111description111' +
                'description111description111description111description111description111description111description111description111description111' +
                'description111description111description111description111description111description111description111description111description111' +
                'description111description111description111description111description111description111description111description111description111' +
                'description111description111description111description111description111description111description111description111description111',
                createdAt: new Date('2018-01-20'),
                author: 'user0',
                photoLink: 'photo20.jpg',
                hashTags: ['#tag21', '#tag22']
            },
            {
                id: '69',
                description: 'description69',
                createdAt: new Date('2018-01-15'),
                author: 'user69',
                photoLink: '',
                hashTags: ['#tag69']

            }
        ];

        filterByAuthor = function (author, newPosts, top) {
            var findPosts = [];
            if (!author)
                return newPosts;
            for (var i = 0; i < newPosts.length; i++)
                if (newPosts[i].author === author && findPosts.length <= top)
                    findPosts.push(newPosts[i]);
            return findPosts;
        }

        filterByDate = function (dateFrom, dateTo, newPosts, top) {
            var foundPosts = [];
            if (!dateFrom || !dateTo)
                return newPosts;
            for (var i = 0; i < newPosts.length; i++)
                if (newPosts[i].createdAt >= dateFrom) {
                    if (newPosts[i].createdAt <= dateTo && foundPosts.length <= top) {
                        foundPosts.push(newPosts[i]);
                    }
                }
            return foundPosts;
        }

        filterByHashTags = function (hashTag, newPosts, top) {
            var foundPosts = [];
            if (!hashTag)
                return newPosts;
            for (var j = 0; j < newPosts.length; j++){
                if(newPosts[j]) {
                    var step = 0;
                    for (var i = 0; i < hashTag.length; i++) {
                        if(hashTag[i]){
                            if (newPosts[j].hashTags.indexOf(hashTag[i]) !== -1 && foundPosts.length <= top)
                                step++;
                        }
                    }
                    if(step === hashTag.length){
                        foundPosts.push(newPosts[j]);
                    }
                }
            }
            return foundPosts;
        }

        this.getPhotoPosts = function (skip, top, filterConfig) {
            var newPosts = this.photoPosts;
            if (skip === skip < 0 || skip >= photoPosts.length || skip === undefined)
                skip = 0;
            else if (skip !== 0) {
                skip++;
            }
            if (top === undefined || top <= 0)
                top = 10;
            else if (top !== 10) {
                top++;
            }

            if (filterConfig) {
                if ("author" in filterConfig)
                    newPosts = filterByAuthor(filterConfig.author, newPosts, top);
                if ("dateFrom" in filterConfig)
                    newPosts = filterByDate(filterConfig.dateFrom, filterConfig.dateTo, newPosts, top);
                if (filterConfig.hashTags)
                    newPosts = filterByHashTags(filterConfig.hashTags, newPosts, top);
                newPosts = this.sortByDate(newPosts).slice(skip, skip + top);
            }
            else {
                newPosts = this.sortByDate(this.photoPosts).slice(skip, skip + top);
            }
            return newPosts;
        }

        function sortF(a, b) {
            return a.createdAt - b.createdAt
        }

        this.sortByDate = function(array) {
            var findPosts = array.slice();
            return findPosts.sort(sortF);
        }

        this.getPhotoPost = function(id) {
            if (!id)
                return null;

            for (var i = 0; i < this.photoPosts.length; i++) {
                if (this.photoPosts[i].id === id)
                    return this.photoPosts[i];
            }
            return null;
        }

        this.validatePhotoPost = function(photoPost) {
            if ((typeof(photoPost.id) === "string") &&
                (typeof(photoPost.description) === "string") &&
                (typeof(photoPost.author) === "string") &&
                (typeof(photoPost.photoLink) === "string") &&
                (photoPost.createdAt instanceof Date)) {
                if (photoPost.photoLink.length !== 0 && photoPost.description.length <= 200 && photoPost.author !== 0) {
                    return true;
                }
            }
            return false;
        }

        this.addPhotoPost = function(photoPost) {
            if (!photoPost)
                return false;
            if (this.validatePhotoPost(photoPost) && this.getPhotoPost(photoPost.id) === null) {
                this.photoPosts.push(photoPost);
                return true;
            }
            return false;
        }
        this.editPhotoPost = function(id, photoPost) {
            var oldPhotoPost = this.getPhotoPost(id);
            var isEmpty = false;
            if (!oldPhotoPost || !photoPost|| !id)
                return false;

            if (photoPost.description !== undefined) {
                if(photoPost.description !==null){
                    if (photoPost.description.length >= 200)
                        return false;
                    else {
                        oldPhotoPost.description = photoPost.description;
                        isEmpty = true;
                    }
                }
            }

            if (photoPost.photoLink !== undefined) {
                if(photoPost.photoLink!==null) {
                    if (photoPost.photoLink.length === 0)
                        return false;
                    else {
                        oldPhotoPost.photoLink = photoPost.photoLink;
                        isEmpty = true;
                    }
                }
            }

            return isEmpty;
        }

        this.removePhotoPost = function(id) {
            if (!id)
                return false;
            for (var i=0; i<this.photoPosts.length; i++)
                if (this.photoPosts[i].id === id) {
                    this.photoPosts.splice(i, 1);
                    return true;
                }
            return false;
        }
    }

})();

var Posts = new photoPosts();

console.log("Source array: ");
console.log(Posts.photoPosts);

console.log("\nSorted by date: ");
console.log(Posts.sortByDate(Posts.photoPosts));

console.group("\n\nvalidateModule:");
console.log('Correct post: ');
console.log(Posts.validatePhotoPost(Posts.getPhotoPost('11')));
console.log('False because descr=>200 : ');
console.log(Posts.validatePhotoPost(Posts.getPhotoPost('111')));
console.log('False because empty link: ');
console.log(Posts.validatePhotoPost(Posts.getPhotoPost('69')));
console.log('with invalid arguments : ');
console.log(Posts.validatePhotoPost({
    id: '135',
    description: 'something',
    createdAt: new Date('2018-02-30'),
}));
console.groupEnd();

console.group("\n\n\n getModule:");
console.log("first 10 posts sorted by date: ")
console.log(Posts.getPhotoPosts());
console.log("\nSkip 5: it means 10 posts sorted by date from the 6th num: ")
console.log(Posts.getPhotoPosts(5));
console.log("\nfilterConfig = {author : 'user1'}: ");
console.log(Posts.getPhotoPosts(0, 5, {author : 'user1'} ));
console.log("\nfilterConfig = {hashTag : '#tag22'}:");
console.log(Posts.getPhotoPosts(0, 10,{hashTags : ['#tag22']} ));
console.log('photoPost with id=1 : ');
console.log(Posts.getPhotoPost('1'));
console.log('\nphotoPost with id=35(no any posts) : ');
console.log(Posts.getPhotoPost('1000'));
console.groupEnd();

console.group("\n\n\n editModule:");
console.log('Post with id=1 is edited : ');
console.log(Posts.editPhotoPost('1', {description : 'glebMashkanov'}));
console.log("\nPhotoPost with id=1 after edit: ");
console.log(Posts.photoPosts[0]);
console.log('\nTry to edit post with wrong ID: ');
console.log(Posts.editPhotoPost('500', {description : 'aaa'}));
console.groupEnd();

console.group("\n\n\n addModule:");
console.log('Post with id=22 added: ');
console.log(Posts.addPhotoPost({
    id: '22',
    description: 'something',
    createdAt: new Date('2018-03-01'),
    author: 'user22',
    photoLink: 'photo22.jpg'
}));
console.log('\n\nTry to add post with existing ID: ');
console.log(Posts.addPhotoPost(Posts.getPhotoPost('1')));
console.log('Try to add with only some of args: ');
console.log(Posts.addPhotoPost({id: '26', description: 'GlebMashkanov'}));
console.groupEnd();


console.group("\n\nremoveModule:");
console.log('Delete photoPost with id=1 : ');
console.log(Posts.removePhotoPost('1'));
console.log("\nArray after deleting photoPost : ");
console.log(Posts.photoPosts);
console.log('\nTry to delete post with wrong ID : ');
console.log(Posts.removePhotoPost('10000'));
console.groupEnd();
