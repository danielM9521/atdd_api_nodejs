import request from 'supertest'
import app from '../app'
import test from 'ava'

const version = '/v1'
const userUtils



/* Save user data */
test.cb('save valid user data', (t) => {
/* Obtener datos válidos del usuario(name and email) */
  const user = { name: 'Dani', email: 'daniel@mail.com' }
  /* El usuario envía sus datos al sistema */
  request(app)
    .post(`${version}/users`)
    .send(user)
    .expect('Content-Type', /json/)
    .expect(201)
    .end((err, res) => {
      t.falsy(err, 'should not error')
      t.end()
    })
})
