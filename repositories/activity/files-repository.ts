import { getStorage, ref, uploadBytes } from 'firebase/storage';

const storage = getStorage();
const storageRef = ref(storage);

const userImagesFolderName = 'user-images';

export const uploadImage = async (file: File): Promise<string> => {
  const imageName = `${userImagesFolderName}/${file.name}`;
  const imageRef = ref(storageRef, imageName);
  await uploadBytes(imageRef, file);

  return imageName;
};
