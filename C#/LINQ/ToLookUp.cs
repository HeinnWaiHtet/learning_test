using DemoList;
using System;
using System.Linq;
using System.Collections;

namespace LINQ{
    public class ToLookUp{
        public static void Run(){
            IList<Student> studentList = Student.GetStudentsDemoList();
            IList<Student1> students = Student1.GetStudentsDemoList1();

            // Only has method syntax
            var query1 = studentList.ToLookup(s => s.Age);
            foreach (var group in query1)
            {
                Console.WriteLine("Age Group: {0}", group.Key);  //Each group has a key 
                        
                foreach(var s in group)  //Each group has a inner collection  
                {
                    Console.WriteLine("Student Name: {0}", s.StudentName);
                }
            }

            Console.WriteLine(".... ...... ....");
            var query2 = students.ToLookup(s => s.Last[0]);
            foreach (var group in query2)
            {
                Console.WriteLine(group.Key);
                // Explicit type for student could also be used here.
                foreach (var student in group)
                {
                    Console.WriteLine("   {0}, {1}", student.Last, student.First);
                }
            }
        }
    }
}