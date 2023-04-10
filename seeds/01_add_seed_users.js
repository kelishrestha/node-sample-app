/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const getModel = () => knex.table('users');
  const totalCount = await getModel().count();
  if (totalCount[0]['count'] > 0){
    await knex('users').del();
  }

  // Insert users data
  await knex('users').insert([
    {id: 1, name: 'john doe'},
    {id: 2, name: 'jane doe'},
    {id: 3, name: 'harry doe'}
  ]);
};
