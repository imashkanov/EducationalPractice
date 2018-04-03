var imashkanovModule = (function () {
     var photoPosts = [
                {
                    id: '1',
                       description: 'text1,text1,text1...',
                    author: 'john fill',
                    photoLink: 'post1.jpg',
                    hashtags: ['ht1', 'ht2', 'ht3'],
                    createdAt: new Date('03/25/2015'),
                    likes: ['name1'],
                    Hidden: false
            },
            {
                id: '2',
                    description: 'text2,text2,text2...',
                    author: 'john Fillie',
                    photoLink: 'post2.jpg',
                    hashtags: ['ht1', 'ht22', 'ht3'],
                    createdAt: new Date('03/25/2015'),
                    likes: ['name1'],
                    Hidden: false
            },
            {
                id: '3',
                    description: 'text3,text3,text3...',
                    author: 'john filt',
                    photoLink: 'post3.jpg',
                    hashtags: ['ht1', 'ht22', 'ht3'],
                    createdAt: new Date('03/25/2013'),
                    likes: ['name1'],
                    Hidden: false
            },
            {
                id: '4',
                    description: 'text4,text4,text4...',
                    author: 'john fill4',
                    photoLink: 'post4.jpg',
                    hashtags: ['ht1', 'ht2', 'ht3'],
                    createdAt: new Date('03/25/2015'),
                    likes: ['name1'],
                    Hidden: false
            },
            {
                id: '5',
                    description: 'text5,text5,text5...',
                    author: 'john fil5l',
                    photoLink: 'post5.jpg',
                    hashtags: ['ht1', 'ht2', 'ht3'],
                    createdAt: new Date('03/25/2014'),
                    likes: ['name1'],
                    Hidden: false
            },
            {
                id: '6',
                    description: 'text6,text6,text6...',
                    author: 'john fill6',
                    photoLink: 'post6.jpg',

                    hashtags: ['ht1', 'ht2', 'ht3'],
                    createdAt: new Date('03/25/2018'),
                    likes: ['name1'],
                    Hidden: false
            },
            {
                id: '7',
                    description: 'text7,text7,text7...',
                    author: 'john fill7',
                    photoLink: 'post7.jpg',
                    hashtags: ['ht1', 'ht2', 'ht3'],
                    createdAt: new Date('03/25/2019'),
                    likes: ['name1'],
                    Hidden: false
            },
            {
                id: '8',
                    description: 'text8,text8,text8...',

                    author: 'john fill8',
                    photoLink: 'post8.jpg',
                    hashtags: ['ht1', 'ht2', 'ht3'],
                    createdAt: new Date('03/25/2015'),
                    likes: ['name1'],
                    Hidden: false
            },
            {
                id: '9',
                    description: 'text9,text9,text9...',
                    author: 'john fill',
                    photoLink: 'post9.jpg',
                    hashtags: ['ht1', 'ht2', 'ht3'],
                    createdAt: new Date('03/25/2015'),
                    likes: ['name1'],
                    Hidden: false
            },
            {
                id: '10',
                    description: 'text10,text10,text10...',
                    author: 'john fill10',
                    photoLink: 'post10.jpg',
                    hashtags: ['ht1', 'ht2', 'ht3'],
                    createdAt: new Date('03/25/2015'),
                    likes: ['name1'],
                    Hidden: false
            },
            {
                id: '11',
                    description: 'text11,text11,text11...',
                    author: 'john fill11',
                    photoLink: 'post11.jpg',
                    hashtags: ['ht1', 'ht2', 'ht3'],
                    createdAt: new Date('03/26/2015'),
                    likes: ['name1'],
                    Hidden: false
           },
           {
                id: '12',
                    description: 'text12,text12,text12...',
                    author: 'john fill12',
                    photoLink: 'post12.jpg',
                    hashtags: ['ht1', 'ht2', 'ht3'],
                    createdAt: new Date('03/27/2015'),
                   likes: ['name1'],
                   Hidden: false
            },
            {
                id: '13',
                    description: 'text13,text13,text13...',
                    author: 'john fill13',
                    photoLink: 'post13.jpg',
                    hashtags: ['ht1', 'ht2', 'ht3'],
                    createdAt: new Date('03/25/2015'),
                    likes: ['name1'],
                    Hidden: false
            },
            {
                id: '14',
                    description: 'text14,text14,text14...',
                    author: 'john fill12',
                    photoLink: 'post12.jpg',
                    hashtags: ['ht1', 'ht2', 'ht3'],
                    createdAt: new Date('03/25/2015'),
                    likes: ['name1'],
                    Hidden: false
            },
            {
                id: '15',
                    description: 'text15,text15,text15...',
                    author: 'john fill15',
                    photoLink: 'post15.jpg',
                    hashtags: ['ht1', 'ht2', 'ht3'],
                    createdAt: new Date('03/25/2015'),
                    likes: ['name1'],
                    Hidden: false
            },
            {
                id: '16',
                    description: 'text16,text16,text16...',
                    author: 'john fill16',
                    photoLink: 'post16.jpg',
                    hashtags: ['ht1', 'ht2', 'ht3'],
                    createdAt: new Date('03/25/2015'),
                    likes: ['name1'],
                    Hidden: false
            },
            {
                id: '17',
                    description: 'text17,text17,text17...',
                    author: 'john fill17',
                    photoLink: 'post17.jpg',
                    hashtags: ['ht1', 'ht2', 'ht3'],
                createdAt: new Date('03/25/2015'),
                    likes: ['name1'],
                    Hidden: false
            },
            {
                id: '18',
                    description: 'text18,text18,text18...',
                    author: 'john fill18',
                    photoLink: 'post18.jpg',
                    hashtags: ['ht1', 'ht2', 'ht3'],
                    createdAt: new Date('03/25/2015'),
                    likes: ['name1'],
                    Hidden: false
            },
            {
                id: '19',
                    description: 'text19,text19,text19...',
                    author: 'john fill19',
                    photoLink: 'post19.jpg',
                   hashtags: ['ht1', 'ht2', 'ht3'],
                    createdAt: new Date('03/25/2015'),
                    likes: ['name1'],
                Hidden: false
            },
            {
                id: '20',
                    description: 'text20,text20,text20...',
                    author: 'john fill20',
                    photoLink: 'post20.jpg',
                    hashtags: ['ht1', 'ht2', 'ht3'],
                    createdAt: new Date('03/25/2015'),
                   likes: ['name1'],
                    Hidden: false
            }
        ];

            function validatePhotoPost(photoPost) {
                    if (typeof (photoPost.author) !== 'string') {
                            return false;
                        }
                    if (typeof (photoPost.description) !== 'string') {
                            return false;
                        }
                    if (typeof (photoPost.photoLink) !== 'string') {
                            return false;
                        }
                    if (photoPost.hashtags === null || !(photoPost.hashtags instanceof Array)) {
                            return false;
                        }
                    if (photoPost.createdAt === null || !(photoPost.createdAt instanceof Date)) {
                            return false;
                        }
                    if (photoPost.likes === null || !(photoPost.likes instanceof Array)) {
                            return false;
                        }
                    return true;
                }
        return {
                getPhotoPosts: function (skip, top, filterConfig) {
                    skip = skip || 0;
                    top = top || 0;
                    filterConfig = filterConfig || {};
                    filterConfig.author = filterConfig.author || null;
                   filterConfig.date = filterConfig.date || null;
                    filterConfig.hashtags = filterConfig.hashtags || null;
                    var result = photoPosts;
                    if (filterConfig.author !== null) {
                            var name = filterConfig.author;
                            result = result.filter(function (post) {
                                        if (post.author === name) {
                                                return true;
                                            }
                                    })
                            }
                    if (filterConfig.date !== null) {

                                var date = new Date(filterConfig.date);
                            result = result.filter(function (post) {
                                        if (post.createdAt >= date) {
                                                return true;
                                            }
                                    })
                            }
                    if (filterConfig.hashtags !== null && filterConfig.hashtags.length !== 0) {

                                var hashtags = filterConfig.hashtags;
                            result = result.filter(function (post) {
                                        for (var item = 0; item < hashtags.length; item++) {
                                                for (var jtem = 0; jtem < post.hashtags.length; jtem++) {
                                                        if (hashtags[item] === post.hashtags[jtem]) {
                                                                return true;
                                                            }
                                                    }
                                            }
                                    })
                           }
                    result.sort(function (a, b) {

                                return (new Date(b.createdAt) - new Date(a.createdAt));
                    });
                    result = result.filter(function (post) {
                            if (post.Hidden === false) {
                                    return true;
                                }
                        });
                    result = result.slice(skip, top);
                    return result;
                },

                getPhotoPost: function (id) {
                    debugger;
                    if (id === undefined) {
                            return {};
                        }
                    return photoPosts.find(function (post) {
                                return post.id == id
                            })
                    },

                validatePhotoPost: function (photoPost) {
                    if (typeof (photoPost.author) !== 'string') {
                            return false;
                        }
                    if (typeof (photoPost.description) !== 'string') {
                            return false;
                        }
                    if (typeof (photoPost.photoLink) !== 'string') {
                            return false;
                        }
                    if (photoPost.hashtags === null || !(photoPost.hashtags instanceof Array)) {
                           return false;
                        }
                    if (photoPost.createdAt === null || !(photoPost.createdAt instanceof Date)) {
                            return false;
                        }
                    if (photoPost.likes === null || !(photoPost.likes instanceof Array)) {
                            return false;
                        }

                    return true;
                },

                addPhotoPost: function (newPost) {
                    if (validatePhotoPost(newPost)) {
                            newPost.id = (photoPosts.length + 1).toString();
                            newPost.Hidden = false;
                            photoPosts.push(newPost);
                            return true;
                        }
                    return false;
                },

                editPhotoPost: function (id, photoPost) {
                    id = id || -1;
                    photoPost = photoPost || {};
                    photoPost.description = photoPost.description || null;
                    photoPost.photoLink = photoPost.photoLink || null;
                    photoPost.hashtags = photoPost.hashtags || null;
                    if (id < 1 || id === null) {
                            return false;
                        }
                    if (typeof (photoPost.description) === 'string') {
                            photoPosts[id - 1].description = photoPost.description;
                        }
                    if (typeof (photoPost.photoLink) === 'string') {
                            photoPosts[id - 1].photoLink = photoPost.photoLink;
                        }
                    if (photoPost.hashtags !== null && photoPost.hashtags instanceof Array) {
                            photoPosts[id - 1].hashtags = photoPost.hashtags;
                        }
                    return true;
                },

                removePhotoPost: function (id) {
                    if (id < 1 || id > photoPosts.length) {
                            return false;
                        }
                    photoPosts[id - 1].Hidden = true;
                    return true;
                }
        };
    })();