using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Repository.CRUD
{
    public class BorrowerRepo
    {

        public int Insert(Borrower _borrower)
        {
            int Key = 0;
            using (var context = new EasyMoolahEntities())
            {
                context.Borrowers.Add(_borrower);

                Key = context.SaveChanges();
            }

            return Key;
        }

        public Borrower Get(int _key)
        {
            Borrower borrower = null;
            using (var context = new EasyMoolahEntities())
            {
                borrower = context.Borrowers.Where(x => x.Key == _key).FirstOrDefault();                
            }

            return borrower;
        }
    }
}
