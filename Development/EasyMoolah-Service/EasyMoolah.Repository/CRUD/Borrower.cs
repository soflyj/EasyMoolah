using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Repository.CRUD
{
    public class Borrower
    {

        public int Insert(EasyMoolah.Repository.Borrower borrower)
        {
            int Id = 0;
            using (var context = new EasyMoolahEntities())
            {
                context.Borrowers.Add(borrower);

                Id = context.SaveChanges();
            }

            return Id;
        }
    }
}
