using System;
using System.Threading.Tasks;
using AutoMapper;
using EasyMoolah.Repository;

namespace EasyMoolah.Domain
{
    public class Borrower
    {

        public async Task<int> Insert(Repository.Borrower _borrower)
        {
            //var temp = Mapper.Map<Repository.Borrower>(_borrower);

            EasyMoolah.Repository.CRUD.BorrowerRepo borrower = new EasyMoolah.Repository.CRUD.BorrowerRepo();
            var test = await borrower.Insert(_borrower);
            return test;
        }

        public Repository.Borrower Get(int _key)
        {
            EasyMoolah.Repository.CRUD.BorrowerRepo borrower = new EasyMoolah.Repository.CRUD.BorrowerRepo();

            return borrower.Get(_key);
        }

    }
}
