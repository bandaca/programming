using System;

namespace patterns
{
    class Program
    {
        static void Main(string[] args)
        {

            Person[] people = new Person[3];

            people[0] = new Person ("Carlos", 21);
            people[1]  = new Worker("Jose", 30, "Paper Black SA", 5);
            people[2]  = new Student("Alfred", 18, "First University", 7);

            for(int i=0; i<people.Length; i++)
                Console.WriteLine(people[i].getInformation() +  "\n");
            
        }
    }
}
