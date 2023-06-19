export interface User {
  id: number;
  photo: string;
  name: string;
  surname: string;
  job: string;
  companyName: string;
  salary: number;
}

const users: User[] = [
  {
    id: Math.random(),
    photo: "",
    name: "Rodion",
    surname: "Voinarovskyi",
    job: "Frontend Developer",
    companyName: "ideil",
    salary: 100,
  },
  {
    id: Math.random(),
    photo: "",
    name: "",
    surname: "",
    job: "",
    companyName: "",
    salary: 0,
  },
  {
    id: Math.random(),
    photo: "https://picsum.photos/200",
    name: "Bogdan",
    surname: "Mitsevskyi",
    job: "Backend Developer",
    companyName: "42",
    salary: 200,
  },
  {
    id: Math.random(),
    photo: "https://picsum.photos/200",
    name: "Evgen",
    surname: "Petrovskyi",
    job: "Devops",
    companyName: "softserve",
    salary: 1000,
  },
];

export default users;
