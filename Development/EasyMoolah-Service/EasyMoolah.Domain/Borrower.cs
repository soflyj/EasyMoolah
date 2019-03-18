using System;
using AutoMapper;
using EasyMoolah.Model.Borrower;

namespace EasyMoolah.Domain
{
    public class Borrower
    {

        public int Insert(Model.Borrower.Borrower.InsertRequest _borrower)
        {

            var borrowerMap = Mapper.Map<Model.Borrower.Borrower.InsertRequest,Repository.Borrower>(_borrower);

            EasyMoolah.Repository.CRUD.Borrower borrower = new EasyMoolah.Repository.CRUD.Borrower();

            return borrower.Insert(borrowerMap);
        }

    }
}
