namespace Hp.Ds.DataAccess.GenericRepository
{
    using System;

    public interface IUnitOfWork
    {
        int SaveChanges();
    }
}

