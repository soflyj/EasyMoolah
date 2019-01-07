using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Notification.Model
{
    public class ConfirmationOfApplication
    {
        public string ToAdress { get; set; }
        public string FromAddress { get; set; }
        public string Subject { get; set; }
        public string Title { get; set; }
        public string EmailTemplate { get; set; }

    }
}
