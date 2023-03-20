
using System;
using System.Linq;
using System.Collections;

namespace LINQ{
    public class LINQ_MethodJoin{
        public class Student{ 
            public int StudentID { get; set; }
            public string StudentName { get; set; }
            public int StandardID { get; set; }
        }

        public class Standard{ 
            public int StandardID { get; set; }
            public string StandardName { get; set; }
        }

        public static void Run(){
            IList<Student> studentList = new List<Student>() { 
                new Student() { StudentID = 1, StudentName = "John", StandardID =1 },
                new Student() { StudentID = 2, StudentName = "Moin", StandardID =1 },
                new Student() { StudentID = 3, StudentName = "Bill", StandardID =2 },
                new Student() { StudentID = 4, StudentName = "Ram" , StandardID =2 },
                new Student() { StudentID = 5, StudentName = "Ron"  } 
            };

            IList<Standard> standardList = new List<Standard>() { 
                new Standard(){ StandardID = 1, StandardName="Standard 1"},
                new Standard(){ StandardID = 2, StandardName="Standard 2"},
                new Standard(){ StandardID = 3, StandardName="Standard 3"}
            };

            var query1 = studentList.Join(
                standardList,
                student => student.StandardID,
                standard => standard.StandardID,
                (student, standard) => new {
                    StudentName = student.StudentName,
                    Standard = standard.StandardName
                }
            );

            foreach(var gp in query1){
                Console.WriteLine("Student Name : {0} Standard : {1}", gp.StudentName, gp.Standard);
            }
            
            Console.WriteLine("---------------");
            Console.WriteLine(System.Environment.NewLine);

            var query2 = standardList.GroupJoin(
                studentList,
                standard => standard.StandardID,
                student => student.StandardID,
                (standard, studentsGroup) => new {
                    Students = studentsGroup,
                    Standard = standard.StandardName
                }
            );

            foreach (var item in query2)
            { 
                Console.WriteLine(item.Standard );

                foreach(var stud in item.Students)
                    Console.WriteLine(stud.StudentName);
            }
        }
    }
}
