using DemoList;
using System;
using System.Linq;
using System.Collections;

namespace LINQ{
    public class ThenBy{
        public static void Run(){
            IList<Student> studentList = Student.GetStudentsDemoList();

            // Query Syntax
            var queryThenby = from student in studentList
                              orderby student.StudentName descending, student.Age descending
                              select student;

            Console.WriteLine("By Query Then By ");
            foreach (var std in queryThenby)
        	{
                Console.WriteLine("Name: {0}, Age : {1}", std.StudentName, std.Age);
            }

            Console.WriteLine("-----");

            var methodThenby = studentList.OrderBy(s => s.StudentName).ThenBy(s => s.Age);
            Console.WriteLine("By Method Then By ");
            foreach (var std in methodThenby)
        	{
                Console.WriteLine("Name: {0}, Age : {1}", std.StudentName, std.Age);
            }
        }
    }
}