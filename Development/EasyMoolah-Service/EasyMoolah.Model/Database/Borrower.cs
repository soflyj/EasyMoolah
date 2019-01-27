using System;
using System.Collections.Generic;

namespace EasyMoolah.Model
{
    public partial class Borrower
    {
        public int key { get; set; }
        public string idNumber { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string mobileNumber { get; set; }
        public string landlineNumber { get; set; }
        public DateTime? createdDate { get; set; }
        public DateTime? changedDate { get; set; }
        public string isActive { get; set; }
    }
}
