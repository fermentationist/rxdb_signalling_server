const COUCH_NAME_CHARS = "abcdefghijklmnopqrstuvwxyz";

export function promiseWait(ms = 0) {
  return new Promise((res) => setTimeout(res, ms));
}

/**
 * Get a random string which can be used for many things in RxDB.
 * The returned string is guaranteed to be a valid database name or collection name
 * and also to be a valid JavaScript variable name.
 *
 * @link http://stackoverflow.com/a/1349426/3443137
 */
export function randomToken(length = 10) {
  let text = "";

  for (let i = 0; i < length; i++) {
    text += COUCH_NAME_CHARS.charAt(
      Math.floor(Math.random() * COUCH_NAME_CHARS.length)
    );
  }

  return text;
}

export function getFromMapOrCreate (
  map,
  index,
  creator,
  ifWasThere
) {
  let value = map.get(index);
  if (typeof value === 'undefined') {
      value = creator();
      map.set(index, value);
  } else if (ifWasThere) {
      ifWasThere(value);
  }
  return value;
}

export const SIMPLE_PEER_PING_INTERVAL = 1000 * 60 * 2;