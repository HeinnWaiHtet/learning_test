using DemoList;
using System;
using System.Linq;
using System.Collections;

namespace LINQ{
    public class GroupBy{
        public static void Run(){
            IList<Student> studentList = Student.GetStudentsDemoList();

            // Query Syntax
            var queryGroupBy = from student in studentList
                               group student by student.Age;
            
            Console.WriteLine("Groupby using Query Syntax");
            foreach (var ageGroup in queryGroupBy)
            {
                Console.WriteLine("Age Group: {0}", ageGroup .Key); //Each group has a key 
                foreach(Student s in ageGroup) // Each group has inner collection
                {
                    Console.WriteLine("Student Name: {0}", s.StudentName);
                }
             }

             Console.WriteLine("---------");

             // Method Syntax
             var methodGroupBy = studentList.GroupBy(s => s.Age);
             Console.WriteLine("Groupby using Method Syntax");
            foreach (var ageGroup in methodGroupBy)
            {
                Console.WriteLine("Age Group: {0}", ageGroup .Key); //Each group has a key 
                foreach(Student s in ageGroup) // Each group has inner collection
                {
                    Console.WriteLine("Student Name: {0}", s.StudentName);
                }
             }

             Console.WriteLine("-----");
             IList<Student1> students = Student1.GetStudentsDemoList1();
             var booleanGroupQuery = from student in students
                                group student by student.Scores.Average() > 80;
            
            foreach (var studentGroup in booleanGroupQuery)
            {
                Console.WriteLine(studentGroup.Key == true ? "High averages" : "Low averages");
                foreach (var student in studentGroup)
                {
                    Console.WriteLine("   {0}, {1}:{2}", student.Last, student.First, student.Scores.Average());
                }
            }

            Console.WriteLine(" ----- ");
            var studentQuery = from student in students
                               let avg = (int)student.Scores.Average()
                               group student by (avg / 10) into g
                               orderby g.Key
                               select g;

            // Execute the query.
            foreach (var studentGroup in studentQuery)
            {
                int temp = studentGroup.Key * 10;
                Console.WriteLine("Students with an average between {0} and {1}", temp, temp + 10);
                foreach (var student in studentGroup)
                {
                    Console.WriteLine("   {0}, {1}:{2}", student.Last, student.First, student.Scores.Average());
                }
            }

            // Keep the console window open in debug mode.
            Console.WriteLine("..... .......... .........");

            Console.WriteLine("Composite GroupBy");
            string[] words = { "blueberry", "chimpanzee", "abacus", "banana", "apple", "cheese" };

            // Create the query.
            var wordGroups =
                from w in words
                group w by w[0];

            // Execute the query.
            foreach (var wordGroup in wordGroups)
            {
                Console.WriteLine("Words that start with the letter '{0}':", wordGroup.Key);
                foreach (var word in wordGroup)
                {
                    Console.WriteLine(word);
                }
            }

            Console.WriteLine("..... ..... .......");
            string[] words2 =
             { "blueberry", "chimpanzee", "abacus", "banana", "apple", "cheese", "elephant", "umbrella", "anteater" };
            var wordGroups2 = from w in words2
                              group w by w[0] into grps
                               where (grps.Key == 'a' || grps.Key == 'e' || grps.Key == 'i'
                               || grps.Key == 'o' || grps.Key == 'u')
                              select grps;

            // Execute the query.
            foreach (var wordGroup in wordGroups2)
            {
                Console.WriteLine("Groups that start with a vowel: {0}", wordGroup.Key);
                foreach (var word in wordGroup)
                {
                    Console.WriteLine("   {0}", word);
                }
            }
        }
    }
}