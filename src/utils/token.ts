import jwt from 'jsonwebtoken';
import User from '@/resources/user/user.interface';
import Token from '@/utils/interfaces/token.interface';


export const createToken = (user: User): string => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET as jwt.Secret, {
        expiresIn: '1d',
    });
}; 

// Keep track of revoked tokens in a Set
export const revokedTokens = new Set<string>();

// Invalidate a token for a given user
function revokeToken(userId: string, token: string) {
    // Add the token to the revokedTokens Set
    revokedTokens.add(token);
    // Optionally, store the revoked token in a database or cache
  }

// Generate a new token and revoke the old token
export function refreshToken(user: User, oldToken: string): string {
    // Revoke the old token
    revokeToken(user._id, oldToken);
    // Generate a new token
    const newToken = createToken(user);
    return newToken;
  }
  



export const verifyToken = async (
    token: string
): Promise<jwt.VerifyErrors | Token> => {
    console.log("sdsfsasdasdasdas")
    console.log("token: ",token)
    return new Promise((resolve, reject) => {
        jwt.verify(
            token,
            process.env.JWT_SECRET as jwt.Secret,
            (err, payload) => {
                if (err) return reject(err);

                resolve(payload as Token);
            }
        );
    });
};

export default { createToken, verifyToken };
