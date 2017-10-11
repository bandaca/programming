using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using Hp.Ds.DataAccess.GenericRepository;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using GenericRepositorySample;
using System.Data;

namespace GenericRepositorySampleTest
{

    [TestClass]
    public class RepositoryTest
    {
        private static DbContext AdvWorksDataContext;
        private static IRepository<Product> ProductRepository;
        private Microsoft.VisualStudio.TestTools.UnitTesting.TestContext testContextInstance;


        [ClassCleanup]
        public static void MyClassCleanup()
        {
            AdvWorksDataContext.Dispose();
        }

        [ClassInitialize]
        public static void MyClassInitialize(Microsoft.VisualStudio.TestTools.UnitTesting.TestContext testContext)
        {
            AdvWorksDataContext = new AdvWorksDBContext();
            ProductRepository = new Repository<Product>((IUnitOfWork)AdvWorksDataContext);
        }

        [TestMethod]
        public void GetProductsByModel_Test()
        {
            Assert.IsTrue(ProductRepository.Matches(ProductSpecifications.ModelNameIs("HL Mountain Frame")  ).ToList<Product>().Count > 0);
        }

        [TestMethod]
        public void MatchesTest()
        {
            Assert.IsTrue(ProductRepository.Matches(new ICriteria<Product>[] { new ProductById(new AllProducts(), 0x13c), new ProductById(new AllProducts(), 0x148) }).ToList<Product>().Count == 2);
        }

        [TestMethod]
        public void MatchesWithPredicates_AND_Operator_Test()
        {
            Assert.IsTrue(ProductRepository.Matches(ProductSpecifications.IdIs(0x148) & ProductSpecifications.NameIs("Mountain End Caps")).ToList<Product>().Count == 1);
        }

        [TestMethod]
        public void MatchesWithPredicates_OR_Operator_Test()
        {
            Assert.IsTrue(ProductRepository.Matches(ProductSpecifications.IdIs(0x13c) | ProductSpecifications.NameIs("Crankarm")).ToList<Product>().Count > 0);
        }


        [TestMethod]
        public void Update_Product_Test()
        {
            Product product = ProductRepository.Matches(ProductSpecifications.ModelNameIs("HL Mountain Frame") & ProductSpecifications.ColorIs("Silver")).ToList<Product>().FirstOrDefault<Product>();
            string initialValue = product.Name;
            product.Name = "NewProductEdited";
            ProductRepository.Update(product, EntityState.Modified);
            Product product2 = ProductRepository.Matches(ProductSpecifications.ModelNameIs("HL Mountain Frame") & ProductSpecifications.ColorIs("Silver")).ToList<Product>().FirstOrDefault<Product>();
            Assert.IsTrue(initialValue != product2.Name);
            product.Name = initialValue;
            ProductRepository.Update(product, EntityState.Modified);
            product2 = ProductRepository.Matches(ProductSpecifications.ModelNameIs("HL Mountain Frame") & ProductSpecifications.ColorIs("Silver")).ToList<Product>().FirstOrDefault<Product>();
            Assert.IsTrue(initialValue == product2.Name);
        }

        public Microsoft.VisualStudio.TestTools.UnitTesting.TestContext TestContext
        {
            get
            {
                return this.testContextInstance;
            }
            set
            {
                this.testContextInstance = value;
            }
        }
    }
}

