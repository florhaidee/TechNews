const User = require('./User');
const Post = require("./Post");
const Comment = require('./Comment');


//associations
User.hasMany(Post, {
    foreignKey: 'user_id',
    foreignKeyConstraint: true, 
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    foreignKeyConstraint: true, 
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    foreignKeyConstraint: true, 
    onDelete: 'cascade' 
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    foreignKeyConstraint: true, 
    onDelete: 'cascade' 
});

User.hasMany(Comment, {
    foreignKey: 'user_id', 
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

module.exports = { User, Post, Comment};