using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using Hp.Ds.DataAccess.GenericRepository;

namespace GenericRepositorySample
{
    using System;
    using System.Data.Entity;
    using System.Linq;
    using System.Linq.Expressions;

    public class AllProducts : ICriteria<Product>
    {
        public IQueryable<Product> BuildQueryFrom(DbSet<Product> entitySet)
        {
            return (from Product p in entitySet select p).AsQueryable();
        }
    }
}

