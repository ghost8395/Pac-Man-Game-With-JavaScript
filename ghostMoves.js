import { OBJECT_TYPE, DIRECTIONS } from "./setup";

// Primitive random movement

export default function randomMovement(position, direction, objectExist) {
  let dir = direction;
  let nextMovePos = position + dir.movement;
  // create an array from th directions object keys
  const keys = Object.keys(DIRECTIONS);

  while (
    objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
    objectExist(nextMovePos, OBJECT_TYPE.GHOST)
  ) {
    const key = keys[Math.floor(Math.random() * keys.length)];
    // set the next move
    dir = DIRECTIONS[key];
    // set the next move
    nextMovePos = position + dir.movement;
  }

  return { nextMovePos, direction: dir };
}
