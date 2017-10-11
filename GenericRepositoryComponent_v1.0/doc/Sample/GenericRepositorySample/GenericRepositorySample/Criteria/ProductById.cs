using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using Hp.Ds.DataAccess.GenericRepository;

namespace GenericRepositorySample
{


    public class ProductById : CriteriaWrapper<Product>
    {
        private int _Id;

        public ProductById(ICriteria<Product> criteria, int id) : base(criteria)
        {
            this._Id = id;
        }

        public override IQueryable<Product> BuildQueryFrom(DbSet<Product> entitySet)
        {
            return base.BuildQueryFrom(entitySet).Where(P => P.ProductID == _Id);
        }
    }
}

