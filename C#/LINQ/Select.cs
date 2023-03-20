using DemoList;
using System;
using System.Linq;
using System.Collections;

namespace LINQ{
    public class LINQ_SelectMethod{

        public static void Run(){
            IList<Student> studentList = Student.GetStudentsDemoList();

            // Method Syntax
            var selectResult = studentList.Select(s => new { Name = "Mr." + s.StudentName, Age = s.Age  });
		
            // iterate selectResult
            foreach (var item in selectResult){
                Console.WriteLine("Student Name: {0}, Age: {1}", item.Name, item.Age);
            }

            Console.WriteLine(System.Environment.NewLine);
        }       
    }
}
