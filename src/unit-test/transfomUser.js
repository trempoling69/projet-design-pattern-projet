const transformUsers = (users) => {
  if (!Array.isArray(users)) {
    throw new Error('Users must be provided.');
  }
  if (users.length > 8) {
    throw new Error('Too many users provided.');
  }
 return users.map((user) => {
    if (typeof user === 'string') {
      throw new Error('Users must be provided.');
    }
    const expectedUserObject = { id: '', name: '', age: '' };
    expectedUserObject.id = user.id;
    expectedUserObject.name = user.body.userName;
    expectedUserObject.age = user.body.userAge;
    return expectedUserObject;
  });
};
module.exports = { transformUsers };
