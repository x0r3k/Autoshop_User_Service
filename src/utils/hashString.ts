import crypto from 'crypto';

class HashString {
  static generateSalt() {
    // generate random 16 bytes long salt
    return crypto.randomBytes(16).toString('hex');
  }

  static hash(string: string): Promise<{salt: string, hash: string}> {
    return new Promise((resolve, reject) => {
      const salt = this.generateSalt();

      crypto.pbkdf2(string, salt, 10000, 64, 'sha512', (err, derivedKey) => {
        if (err) reject(err);
        resolve({ salt, hash: derivedKey.toString('hex') });
      });
    });
  }

  static verify(string: string, hash: string, salt: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      crypto.pbkdf2(string, salt, 10000, 64, 'sha512', (err, derivedKey) => {
        if (err) reject(err);
        resolve(hash === derivedKey.toString('hex'));
      });
    });
  }

  static hashSync(string: string): {salt: string, hash: string} {
    const salt = this.generateSalt();
    const hashedString = crypto.pbkdf2Sync(string, salt, 10000, 64, 'sha512');
    return { salt, hash: hashedString.toString('hex') };
  }

  static verifySync(string: string, hash: string, salt: string): boolean {
    const hashedString = crypto.pbkdf2Sync(string, salt, 10000, 64, 'sha512');
    return hashedString.toString('hex') === hash;
  }
}

export default HashString;
