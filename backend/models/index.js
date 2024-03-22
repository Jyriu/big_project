const User = require('./user');
const Post = require('./post');
const Topic = require('./topic');
const Reply = require('./reply');
const Like = require('./like');
const Message = require('./message');
const Student = require('./student');
const Professional = require('./professional');

require('./relations');

module.exports = {
    User,
    Post,
    Topic,
    Reply,
    Like,
    Message,
    Student,
    Professional
    };