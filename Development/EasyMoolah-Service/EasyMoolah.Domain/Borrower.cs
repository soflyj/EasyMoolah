using System;
using AutoMapper;
using EasyMoolah.Repository;

namespace EasyMoolah.Domain
{
    public class Borrower
    {

        public int Insert(Repository.Borrower _borrower)
        {            
            EasyMoolah.Repository.CRUD.BorrowerRepo borrower = new EasyMoolah.Repository.CRUD.BorrowerRepo();

            return borrower.Insert(_borrower);
        }

        public Repository.Borrower Get(int _key)
        {
            EasyMoolah.Repository.CRUD.BorrowerRepo borrower = new EasyMoolah.Repository.CRUD.BorrowerRepo();

            return borrower.Get(_key);
        }

    }
}
