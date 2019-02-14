namespace patterns
{
    class Worker : Person
    {
        public string Company { get; }
        public int YearsOfExperience {get; }

        public Worker(string name, int age, string company, int yearsOfExperience) : base (name, age) {
            Company = company;
            YearsOfExperience = yearsOfExperience;
        }

        public override string getInformation() {
            return string.Format(" Name: {0} \n Age: {1} \n Company: {2} \n Years of Experience: {3}", Name, Age, Company, YearsOfExperience);
        }
    }
}