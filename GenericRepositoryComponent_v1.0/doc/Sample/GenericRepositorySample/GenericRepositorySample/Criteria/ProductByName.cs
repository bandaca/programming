using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using Hp.Ds.DataAccess.GenericRepository;

namespace GenericRepositorySample
{

    public class ProductByName : CriteriaWrapper<Product>
    {
        private string _name;

        public ProductByName(ICriteria<Product> criteria, string name) : base(criteria)
        {
            this._name = name;
        }

        public override IQueryable<Product> BuildQueryFrom(DbSet<Product> entitySet)
        {
            return base.BuildQueryFrom(entitySet).Where(P => P.Name.Contains(_name));
        }
    }
}

