using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace concept._01._languageBackground
{
    class Demo
    {
        private string Name { get; set; }
        private string Description { get; set; }

        public Demo(string name, string desc)
        {
            this.Name = name;
            this.Description = desc;
        }

        public string GetDetail() => $"{Name} : {Description}";
    }

    class Entry
    {
        public static void Main(string[] args)
        {
            var demo = new Demo("DEMO", "CHECK LANGUAGE BACKEND");
            Console.WriteLine(demo.GetDetail());
            Console.ReadLine();
        }
    }
}
