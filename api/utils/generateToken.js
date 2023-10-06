import jwt from 'jsonwebtoken';

 class Token {
  static async generateToken(id) {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: '1d' })
  }
  static async verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET)
  }
}


export default Token;