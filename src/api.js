//Base URL
const token = 'ry749XTxEzbKVGLCSbLEFW2XQeofu0jH3SzRBd5OKUOgIzxuXRY';
export const championsURL = (page) => `https://cors-anywhere.herokuapp.com/api.pandascore.co/lol/champions?page[number]=${page}&page[size]=10&token=${token}`;

