using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace EasyMoolah.Model.Notification
{
    public class FSPResult
    {
        public string ToAddress { get; set; }

        public string ToAddressTitle { get; set; }

        public string ToAddressName { get; set; }

        public string FromAddress { get; set; }

        public string Subject { get; set; }

        public bool Successful { get; set; }

        public int BorrowerId { get; set; }
    }
}
