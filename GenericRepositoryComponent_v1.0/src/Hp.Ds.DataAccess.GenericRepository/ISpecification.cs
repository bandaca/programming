namespace Hp.Ds.DataAccess.GenericRepository
{
    using System;
    using System.Linq.Expressions;

    public interface ISpecification<T>
    {
        bool IsSatisfiedBy(T entity);

        Expression<Func<T, bool>> Predicate { get; }
    }
}

