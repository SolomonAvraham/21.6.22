class Student {
  constructor(name, grade, id) {
    this.name = name;
    this.grade = grade;
    this.id = id;
  }
}

const studentOne = new Student("Sol", "Fifth Grade", 2222);
const studentTwo = new Student("Mol", "2nd Grade", 5555);
console.log(studentOne, studentTwo);

class CollegeStudent extends Student {
  constructor(name, grade, id, college) {
    super(name, grade, id );
    this.college = college;
  }
}

const newCollegeStudent = new CollegeStudent(
  "Roli",
  "Nine Grade",
  2323,
  "Tel-Avive"
);
console.log(newCollegeStudent);

class HighSchoolStudent extends Student {
  constructor(name, grade, id, highSchool, age, email) {
    super(name, grade, id);
    this.highSchool = highSchool;
    this.age = age;
    this.email = email;
  }
}

const HighSchoolStudentOne = new HighSchoolStudent(
  "Doni",
  "Ten Grade",
  4323,
  "Yeshiva"
);
console.log(HighSchoolStudentOne);

const HighSchoolStudentTwo = new HighSchoolStudent(
  "Doni",
  "Ten Grade",
  4323,
  "Yeshiva",
  17,
  "ggg@gmail.com"
);
console.log(HighSchoolStudentTwo);

class JonuirHigh extends Student {
  constructor(name, grade, id, jonuirHigh) {
    super(name, grade, id);
    this.jonuirHigh = jonuirHigh;
  }
}

const jonuirHighOne = new JonuirHigh("Boni", "eleven", 5454, "Logg");
console.log(jonuirHighOne);
