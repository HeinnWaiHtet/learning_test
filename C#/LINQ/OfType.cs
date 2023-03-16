using DemoList;
using System;
using System.Linq;
using System.Collections;

namespace LINQ{

    public class OfType{
        public static void Run(){
            IList mixedList = new ArrayList();
            mixedList.Add(0);
            mixedList.Add("One");
            mixedList.Add("Two");
            mixedList.Add(3);
            mixedList.Add(new Student() { StudentID = 1, StudentName = "Bill" });
            
            // Query Syntax
            var queryInt = from mix in mixedList.OfType<int>()
                           select mix;
            var queryStr = from mix in mixedList.OfType<string>()
                           select mix;
            var queryStu = from mix in mixedList.OfType<Student>()
                           select mix;

            Console.WriteLine("Query Select : ");
            foreach (var std in queryInt)
        	{
                Console.WriteLine(std);
            }
            
            Console.WriteLine("-----");
            foreach (var std in queryStr)
        	{
                Console.WriteLine(std);
            }
            
            Console.WriteLine("-----");
            foreach (var std in queryStu)
        	{
                Console.WriteLine(std.StudentName);
            }
            Console.WriteLine(queryStu);
            Console.WriteLine("-----");

            var methodInt = mixedList.OfType<int>();
            var methodStr = mixedList.OfType<string>();
            var methodStu = mixedList.OfType<Student>();

            Console.WriteLine("Method Select : ");
            foreach (var std in methodInt)
        	{
                Console.WriteLine(std);
            }
            
            Console.WriteLine("-----");
            foreach (var std in methodStr)
        	{
                Console.WriteLine(std);
            }
            
            Console.WriteLine("-----");
            foreach (var std in methodStu)
        	{
                Console.WriteLine(std.StudentName);
            }
            
            Console.WriteLine("-----");
        }
    }
}