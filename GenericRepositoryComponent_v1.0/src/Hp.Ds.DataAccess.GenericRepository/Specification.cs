namespace Hp.Ds.DataAccess.GenericRepository
{
    using System;
    using System.Linq;
    using System.Linq.Expressions;

    public class Specification<T> : ISpecification<T>
    {
        private readonly Expression<Func<T, bool>> _predicate;

        public Specification(Expression<Func<T, bool>> predicate)
        {
            this._predicate = predicate;
        }

        public bool IsSatisfiedBy(T entity)
        {
            return this._predicate.Compile()(entity);
        }

        public static Specification<T> operator &(Specification<T> leftside, Specification<T> rightside)
        {
            InvocationExpression rightInvoke = Expression.Invoke(rightside.Predicate, leftside.Predicate.Parameters.Cast<Expression>());
            return new Specification<T>(Expression.Lambda<Func<T, bool>>(Expression.MakeBinary(ExpressionType.AndAlso, leftside.Predicate.Body, rightInvoke), leftside.Predicate.Parameters));
        }

        public static Specification<T> operator |(Specification<T> leftside, Specification<T> rightside)
        {
            InvocationExpression rightInvoke = Expression.Invoke(rightside.Predicate, leftside.Predicate.Parameters.Cast<Expression>());
            return new Specification<T>(Expression.Lambda<Func<T, bool>>(Expression.MakeBinary(ExpressionType.OrElse, leftside.Predicate.Body, rightInvoke), leftside.Predicate.Parameters));
        }

        public Expression<Func<T, bool>> Predicate
        {
            get
            {
                return this._predicate;
            }
        }
    }
}

