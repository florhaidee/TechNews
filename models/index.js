const User = require('./User');
const Post = require("./Post");
// const Comment = require('./Comment');


//associations
User.hasMany(Post, {
    foreignKey: 'user_id',
    foreignKeyConstraint: true, 
    onDelete: 'SET NULL', 
    onUpdate:  'SET NULL' 
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    foreignKeyConstraint: true, 
    onDelete: 'SET NULL', 
    onUpdate:  'SET NULL' 
});

module.exports = { User, Post};