import ClassRoom from './0-classroom';

const ClassRoomList = []; // Define the ClassRoomList array

export default function initializeRooms() {
  const class1 = new ClassRoom(19);
  const class2 = new ClassRoom(20);
  const class3 = new ClassRoom(34);
  ClassRoomList.push(class1, class2, class3);
  return ClassRoomList;
}
