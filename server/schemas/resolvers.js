const { User, Thought } = require('../models');


const resolvers = {
  Query: {
    // parent is a placeholder param because something is needed in that spot
    //to access the second param
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    }
  }
};

module.exports = resolvers; 