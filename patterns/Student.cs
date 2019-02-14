namespace patterns
{
    class Student : Person
    {
        public string SchoolName { get; }
        public int Grade {get; }

        public Student(string name, int age, string schoolName, int grade) : base (name, age) {
            SchoolName = schoolName;
            Grade = grade;
        }

        public override string getInformation() {
            return string.Format(" Name: {0} \n Age: {1} \n School: {2} \n Grade: {3}", Name, Age, SchoolName, Grade);
        }
    }
}