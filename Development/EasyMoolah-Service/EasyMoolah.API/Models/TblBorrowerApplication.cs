using System;
using System.Collections.Generic;

namespace EasyMoolah.API.Models
{
    public partial class TblBorrowerApplication
    {
        public int Key { get; set; }
        public int? BorrowerKey { get; set; }
        public double? RequestedAmount { get; set; }
        public int? IndustryKey { get; set; }
        public string BankingWith { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ChangedDate { get; set; }
        public string IsActive { get; set; }
    }
}
