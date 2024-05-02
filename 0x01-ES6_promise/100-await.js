import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photoUploaded, userCreated] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    return {
      photo: photoUploaded,
      user: userCreated,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
