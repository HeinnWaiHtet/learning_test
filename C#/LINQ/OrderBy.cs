using DemoList;
using System;
using System.Linq;
using System.Collections;

namespace LINQ{
    public class OrderBy{
        public static void Run(){
            IList<Student> studentList = Student.GetStudentsDemoList();

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