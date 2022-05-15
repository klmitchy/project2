const User = require('./User');
const Comments = require('./comments');

User.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comments.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Comments };
