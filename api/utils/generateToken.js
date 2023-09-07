import jwt from 'jsonwebtoken'

export default class Token {
  async generateToken(id) {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: '10m' })
  }
  async verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET)
  }
}
