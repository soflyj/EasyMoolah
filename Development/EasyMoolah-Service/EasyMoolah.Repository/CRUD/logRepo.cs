using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Repository.CRUD
{
    public class logRepo
    {
        //Notification
        public static int InsertNotification(NotificationLog _notificationLog)
        {
            var key = 0;
            using (var context = new EasyMoolahEntities())
            {
                context.NotificationLogs.Add(_notificationLog);

                context.SaveChanges();

                key = _notificationLog.Key;
            }

            return key;
        }

        //Notification Audit
        public static int InsertError(ErrorLog _errorLog)
        {
            var key = 0;
            using (var context = new EasyMoolahEntities())
            {
                context.ErrorLogs.Add(_errorLog);

                context.SaveChanges();

                key = _errorLog.Key;
            }

            return key;
        }
    }
}
