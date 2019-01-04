using System;
using System.Collections.Generic;

namespace EasyMoolah.API.Models
{
    public partial class TblFspresult
    {
        public int Key { get; set; }
        public int BorrowerApplicationKey { get; set; }
        public string Provider { get; set; }
        public double? ApprovedAmount { get; set; }
        public int? Term { get; set; }
        public string TermPeriod { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ChangedDate { get; set; }
        public string IsActive { get; set; }
    }
}
