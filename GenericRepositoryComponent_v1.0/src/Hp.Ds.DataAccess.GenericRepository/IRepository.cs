namespace Hp.Ds.DataAccess.GenericRepository
{
    using System;
    using System.Collections.Generic;
    using System.Data;

    public interface IRepository<T> : IDisposable where T: class
    {
        void Create(T entity);
        void Delete(T entity);
        IEnumerable<T> Matches(ISpecification<T> specification);
        IEnumerable<T> Matches(params ICriteria<T>[] criteria);
        void Update(T entity, EntityState state);
    }
}

