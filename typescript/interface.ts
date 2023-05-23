interface User {
  name: string;
  age: number;
  id: number;
  email: string;
}

interface Employee extends User {
  salary: number;
}
export interface Login {
  login(): User;
}

let [user1, user2, ...restUsers]: User[] = [
  {
    name: "John",
    id: 1,
    age: 2,
    email: "",
  },
  {
    name: "John2",
    id: 2,
    age: 2,
    email: "",
  },
  {
    name: "John3",
    id: 3,
    age: 4,
    email: "",
  },
];
