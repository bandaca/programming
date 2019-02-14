namespace patterns
{
    class Person
    {
        public string Name { get; }
        public int Age {get; }

        public Person(string name, int age) {
            Name = name;
            Age = age;
        }

        public virtual string getInformation() {
            return string.Format(" Name: {0} \n Age: {1}", Name, Age);
        }
    }
}