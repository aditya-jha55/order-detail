export function calculateFileSize(file: File): string {
  const bytes = file.size;

  if (bytes === 0) {
    return "";
  }

  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  if (i === 0) {
    return `${bytes} ${sizes[i]}`;
  }

  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}

export const convertLinkString = (input: string) => {
  const urlRegex =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  const matches = input.match(urlRegex);
  let output = input;
  if (!matches) {
    return input;
  }
  for (let match of matches) {
    const protocolRegex = /^(?:https?|ftp):\/\//.test(match);
    output = output.replace(
      match,
      `<a href="${
        !protocolRegex && "https://"
      }${match}" target="_new" rel="noopener noreferrer">${match}</a>`
    );
  }
  return output;
};
