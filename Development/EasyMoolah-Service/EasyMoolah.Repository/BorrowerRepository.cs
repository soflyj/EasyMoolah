using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EasyMoolah.Model;
using EasyMoolah.Repository.Models;

namespace EasyMoolah.Repository
{
    public class BorrowerRepository
    {
        public BorrowerRepository()
        {

        }

        public List<Models.TblBorrower> GetAllBorrowers()
        {
            var context = new EMDevContext();
            var getAllBorrowers =
                context.TblBorrower
                    .ToList();
                                    
            return getAllBorrowers;
        }


    }
}
