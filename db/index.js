const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/wizard_news_seq_2208_db');

const User = conn.define('user', {
  name: {
    type: Sequelize.STRING
  }
});
const Post = conn.define('post', {
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  }
});

Post.belongsTo(User);
User.hasMany(Post);

module.exports = {
  User,
  Post,
  conn
};

