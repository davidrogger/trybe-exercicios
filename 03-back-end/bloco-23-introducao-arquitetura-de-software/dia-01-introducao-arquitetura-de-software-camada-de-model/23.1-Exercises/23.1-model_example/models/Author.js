const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
})

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors',
  );
  return authors.map(serialize).map(getNewAuthor);
};

const findById = async (id) => {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return getNewAuthor({ id, firstName, middleName, lastName });
}

const isValid = (firstName, middleName, lastName) => {
  const nameUndefined = [firstName, lastName].some((name) => !name || typeof name !== 'string');
//
  const middleNameString = typeof middleName !== 'string';

  if (nameUndefined || middleNameString) return false

  return true;
}

const create = async (firstName, middleName, lastName) => {
  const query = 'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)';
  await connection.execute(query, [firstName, middleName, lastName]);
}

module.exports = { getAll, findById, isValid, create };
