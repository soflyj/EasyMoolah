using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace EasyMoolah.Model.Logs
{
    public class NotificationLog
    {
        public int Key { get; set; }
        public Nullable<int> ApplicationKey { get; set; }
        public string NotificationType { get; set; }
        public string Reason { get; set; }
        public string ToAddress { get; set; }
        public string ToTitle { get; set; }
        public string ToName { get; set; }
        public string FromAddress { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
        public Nullable<System.DateTime> SentDateTime { get; set; }
        public bool IsActive { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public System.DateTime ChangedDate { get; set; }
    }
}
