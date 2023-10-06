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
    if (typeof user.id !== 'number' || typeof user.body.userAge !== 'number') {
      throw new Error('Id and age must be numbers');
    }
    if (typeof user.body.userName !== 'string') {
      throw new Error('userName must be a string');
    }
    expectedUserObject.id = user.id;
    expectedUserObject.name = user.body.userName;
    expectedUserObject.age = user.body.userAge;
    return expectedUserObject;
  });
};

module.exports = { transformUsers };
