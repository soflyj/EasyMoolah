using EasyMoolah.Model;
using System;
using System.Threading.Tasks;

namespace EasyMoolah.Domain
{
    public class Logs
    {
        public static void InsertNotification(Repository.NotificationLog _notificationLog)
        {
            Repository.CRUD.logRepo.InsertNotification(_notificationLog);
        }

        public static void InsertError(Repository.ErrorLog _errorLog)
        {
            Repository.CRUD.logRepo.InsertError(_errorLog);
        }
    }
}
