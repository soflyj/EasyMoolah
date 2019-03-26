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
            var test = await Repository.CRUD.defaultRepo.InsertBorrower(_borrower);
            return test;
        }

        public static Repository.Borrower Get(int _key)
        {
            var response = Repository.CRUD.defaultRepo.GetBorrower(_key);
            return response;
        }

    }
}
