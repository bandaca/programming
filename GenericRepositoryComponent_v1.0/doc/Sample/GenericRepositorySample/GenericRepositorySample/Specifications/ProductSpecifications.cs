using Hp.Ds.DataAccess.GenericRepository;

namespace GenericRepositorySample
{

    public class ProductSpecifications
    {
        public static Specification<Product> NameIs(string productName) {
            return new Specification<Product>(P => P.Name.Contains(productName));
        }

        public static Specification<Product> IdIs(int id)
        {
            return new Specification<Product>(P => P.ProductID == id);
        }

        public static Specification<Product> ModelNameIs(string modelName)
        {
            return new Specification<Product>(P => string.Compare(P.ProductModel.Name,modelName) == 0);
        }

        public static Specification<Product> ColorIs(string color)
        {
            return new Specification<Product>(P => P.Color.Contains(color));
        }
    }
}

