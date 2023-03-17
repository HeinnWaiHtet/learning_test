using DemoList;
using System;
using System.Linq;
using System.Collections;

namespace LINQ{

    public class LINQ_WHERE{
        public static void Run(){
            IList<Student> studentList = Student.GetStudentsDemoList();

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