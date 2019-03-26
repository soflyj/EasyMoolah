using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Repository.CRUD
{
    public class defaultRepo
    {

        public async static Task<int> InsertBorrower(Borrower _borrower)
        {
            var Key = 0;
            using (var context = new EasyMoolahEntities())
            {
                context.Borrowers.Add(_borrower);

                await context.SaveChangesAsync();

                Key = _borrower.Key;
            }

            return Key;
        }

        public static Borrower GetBorrower(int _key)
        {
            Borrower borrower = null;
            using (var context = new EasyMoolahEntities())
            {
                borrower = context.Borrowers.Where(x => x.Key == _key).FirstOrDefault();                
            }

            return borrower;
        }

        public async static Task<int> InsertEmailAudit(AuditEmail _auditEmail)
        {
            var Key = 0;
            using (var context = new EasyMoolahEntities())
            {
                context.AuditEmails.Add(_auditEmail);

                await context.SaveChangesAsync();

                Key = _auditEmail.Key;
            }

            return Key;
        }
    }
}
