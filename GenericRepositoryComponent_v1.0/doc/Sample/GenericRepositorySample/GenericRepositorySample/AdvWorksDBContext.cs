using System;
using Hp.Ds.DataAccess.GenericRepository;

namespace GenericRepositorySample
{

    public class AdvWorksDBContext : AdventureWorksEntities, IUnitOfWork
    {
        public override int SaveChanges()
        {
            return base.SaveChanges();
        }
    }

}

