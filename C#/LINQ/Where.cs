using DemoList;
using System;
using System.Linq;
using System.Collections;

namespace LINQ{

    public class LINQ_WHERE{
        public static void Run(){
            IList<Student> studentList = new List<Student>()
            { 
                new Student() { StudentID = 1, StudentName = "John", Age = 13} ,
                new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
                new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
                new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
                new Student() { StudentID = 5, StudentName = "Ron" , Age = 15 }
            };

            // Query Syntax
            var adultStudent = from student in studentList
                               where student.Age > 18
                               select student;

            Console.WriteLine("Adult Student : ");
            foreach(var s in adultStudent){
                Console.WriteLine($"Name : {s.StudentName} Age : {s.Age}");
            }

            Console.WriteLine("-------");
            Console.WriteLine("Non Adult Student : ");
            // Method Syntax
            var adult = studentList.Where(s => s.Age < 18);
            foreach(var s in adult){
                Console.WriteLine($"Name : {s.StudentName} Age : {s.Age}");
            }
        }
    }
}