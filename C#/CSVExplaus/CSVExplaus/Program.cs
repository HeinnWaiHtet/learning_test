// See https://aka.ms/new-console-template for more information
using EPPlusSamples.LoadDataFromCsvFilesIntoTables;

Console.WriteLine("Hello, World!");
string[] lines =
    {
    "First line", "Second line", "Third line"
};

var directory = @"D:\IT Test\CSV\WriteLines.txt";
var filename = string.Format(directory, "");
int count = 1;
while (File.Exists(filename))
{
    String[] path = filename.Split('.');
    filename = @"D:\IT Test\CSV\WriteLines" + "(" + (count++) + ")" + "." + ".txt";
}


await File.WriteAllLinesAsync(filename, lines);
Console.WriteLine("End");