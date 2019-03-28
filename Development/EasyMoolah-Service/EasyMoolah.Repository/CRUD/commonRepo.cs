using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Repository.CRUD
{
    public class commonRepo
    {
        //Borrower
        public static int InsertBorrower(Borrower _borrower)
        {
            var key = 0;
            using (var context = new EasyMoolahEntities())
            {
                context.Borrowers.Add(_borrower);

                context.SaveChanges();

                key = _borrower.Key;
            }

            return key;
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

        public static Borrower GetBorrowerByApplicationKey(int _applicationKey)
        {
            Borrower borrower = null;
            using (var context = new EasyMoolahEntities())
            {
                borrower = context.Borrowers.Where(x => x.ApplicationKey == _applicationKey).FirstOrDefault();
            }

            return borrower;
        }

        //Application
        public static int InsertApplication(Application _application)
        {
            var key = 0;
            using (var context = new EasyMoolahEntities())
            {
                context.Applications.Add(_application);

                context.SaveChanges();

                key = _application.Key;
            }

            return key;
        }

        public static Application GetApplication(int _key)
        {
            Application application = null;
            using (var context = new EasyMoolahEntities())
            {
                application = context.Applications.Where(x => x.Key == _key).FirstOrDefault();
            }

            return application;
        }

        //Questions
        public static int InsertQuestion(Question _question)
        {
            var key = 0;
            using (var context = new EasyMoolahEntities())
            {
                context.Questions.Add(_question);

                context.SaveChanges();

                key = _question.Key;
            }

            return key;
        }        
    }
}
