export enum FILE_FORMATS {
  PNG = 'png',
  JPEG = 'jpeg'
}

// List of files magic numbers
// https://en.wikipedia.org/wiki/List_of_file_signatures
export const FILE_MAGIC_NUMBERS: { [key in FILE_FORMATS]: string } = {
  [FILE_FORMATS.PNG]: '89504e47',
  [FILE_FORMATS.JPEG]: 'ffd8ffe0'
};

export const validateFileFormat = async (
  file: File | undefined,
  ...allowedFormats: FILE_FORMATS[]
) => {
  if (file === undefined) {
    return true;
  }

  const blobSlice = file.slice(0, 4);
  const buffer = await blobSlice.arrayBuffer();

  const magicNumber = new Uint8Array(buffer);
  let header = '';
  for (let i = 0; i < magicNumber.length; i++) {
    header += magicNumber[i].toString(16);
  }

  return allowedFormats.some((format) =>
    header.startsWith(FILE_MAGIC_NUMBERS[format])
  );
};
