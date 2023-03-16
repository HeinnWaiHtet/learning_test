using DemoList;
using System;
using System.Linq;
using System.Collections;

namespace LINQ{
    public class OrderBy{
        public static void Run(){
            IList<Student> studentList = new List<Student>() { 
                new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
                new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
                new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
                new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
                new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 } 
            };

            var queryOrderBy = from student in studentList
                               orderby student.StudentName
                               select student;
            var queryOrderByDesc = from student in studentList
                                   orderby student.StudentName descending 
                                   select student;
            
            Console.WriteLine("By Query Order By ");
            foreach (var std in queryOrderBy)
        	{
                Console.WriteLine(std.StudentName);
            }

            Console.WriteLine("------");
            foreach (var std in queryOrderByDesc)
        	{
                Console.WriteLine(std.StudentName);
            }
            Console.WriteLine("------");

            var methodOrderBy = studentList.OrderBy(s => s.StudentName);
            var methodOrderByDesc = studentList.OrderByDescending(s => s.StudentName);
            Console.WriteLine("By Method Order By ");
            foreach (var std in methodOrderBy)
        	{
                Console.WriteLine(std.StudentName);
            }
            
            Console.WriteLine("------");
            foreach (var std in methodOrderByDesc)
        	{
                Console.WriteLine(std.StudentName);
            }
        }
    }
}