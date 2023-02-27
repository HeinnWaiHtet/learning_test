enum DoorState {
  open,
  close,
}

let door: DoorState;
door = DoorState.open;
console.log("Door State : ", door.toString(), DoorState[door]);
