import { storage } from '@/infrastructure/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const storageRef = ref(storage);

const userImagesFolderName = 'user-images';

export const uploadImage = async (file: File): Promise<string> => {
  const imageName = `${userImagesFolderName}/${file.name}`;
  const imageRef = ref(storageRef, imageName);
  await uploadBytes(imageRef, file);

  return imageName;
};

export const getImageUrl = async (imageName: string) => {
  return await getDownloadURL(ref(storage, imageName));
};
