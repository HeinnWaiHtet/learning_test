var DoorState;
(function (DoorState) {
    DoorState[DoorState["open"] = 0] = "open";
    DoorState[DoorState["close"] = 1] = "close";
})(DoorState || (DoorState = {}));
var door;
door = DoorState.open;
console.log("Door State : ", door.toString(), DoorState[door]);
