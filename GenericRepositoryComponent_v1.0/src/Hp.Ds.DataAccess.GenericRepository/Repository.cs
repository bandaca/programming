namespace Hp.Ds.DataAccess.GenericRepository
{
    using LinqKit;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Data.Entity;
    using System.Linq;

    public class Repository<T> : IRepository<T> where T: class
    {
        private DbContext _context;
        private bool _disposedValue;
        private DbSet<T> _queryBase;
        private IUnitOfWork _unitOfWork;

        public Repository(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
            this._context = (DbContext) unitOfWork;
            this._queryBase = this._context.Set<T>();
        }

        public void Create(T entity)
        {
            this._queryBase.Add(entity);
            this._unitOfWork.SaveChanges();
        }

        public void Delete(T entity)
        {
            this._queryBase.Remove(entity);
            this._unitOfWork.SaveChanges();
        }

        public void Dispose()
        {
            this.Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!this._disposedValue && disposing)
            {
                this._context.Dispose();
            }
            this._disposedValue = true;
        }

        public IEnumerable<T> Matches(params ICriteria<T>[] criteriaArray)
        {
            IEnumerable<T> result = new List<T>();
            foreach (ICriteria<T> criteria in criteriaArray)
            {
                result = result.Union<T>(criteria.BuildQueryFrom(this._queryBase));
            }
            return result;
        }

        public IEnumerable<T> Matches(ISpecification<T> specification)
        {
            return this._queryBase.AsExpandable<T>().Where<T>(specification.Predicate);
        }

        public void Update(T entity, EntityState state)
        {
            this._context.Entry<T>(entity).State = state;
            this._unitOfWork.SaveChanges();
        }
    }
}

