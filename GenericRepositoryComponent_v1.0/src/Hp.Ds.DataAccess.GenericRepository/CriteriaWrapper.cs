namespace Hp.Ds.DataAccess.GenericRepository
{
    using System;
    using System.Data.Entity;
    using System.Linq;

    public abstract class CriteriaWrapper<T> : ICriteria<T> where T: class
    {
        protected readonly ICriteria<T> Criteria;

        protected CriteriaWrapper(ICriteria<T> criteriaValue)
        {
            this.Criteria = criteriaValue;
        }

        public virtual IQueryable<T> BuildQueryFrom(DbSet<T> entitySet)
        {
            return ((this.Criteria != null) ? this.Criteria.BuildQueryFrom(entitySet) : null);
        }
    }
}

