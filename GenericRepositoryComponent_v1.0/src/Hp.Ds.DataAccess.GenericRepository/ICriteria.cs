namespace Hp.Ds.DataAccess.GenericRepository
{
    using System.Data.Entity;
    using System.Linq;

    public interface ICriteria<T> where T: class
    {
        IQueryable<T> BuildQueryFrom(DbSet<T> entitySet);
    }
}

